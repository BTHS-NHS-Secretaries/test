import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const attempts = new Map<string, { count: number; lastAttempt: number }>();

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    
    // RATE LIMITING

    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const record = attempts.get(ip) || { count: 0, lastAttempt: now };

    // Reset counter after 1 minute
    if (now - record.lastAttempt > 60000) {
      record.count = 0;
    }

    record.count += 1;
    record.lastAttempt = now;
    attempts.set(ip, record);

    // Block after 5 attempts
    if (record.count > 5) {
      return NextResponse.json(
        { error: 'Too many login attempts. Try again later.' },
        { status: 429 }
      );
    }

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 400 }
      );
    }

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single();

    if (error || !user) {
      console.error('Login query error:', error);
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    if (user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        username: user.username,
        id: user.id,
        email: user.username, // Email is same as username in users table
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

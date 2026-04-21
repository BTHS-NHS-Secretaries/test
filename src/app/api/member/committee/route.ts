import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Query the Committee table by Email
    const { data: committeeData, error: committeeError } = await supabase
      .from('Commitee')
      .select('*')
      .eq('Email', email)
      .single();

    if (committeeError) {
      console.error('Committee data query error:', committeeError);
      return NextResponse.json(
        { error: 'User data not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: committeeData,
    });
  } catch (err) {
    console.error('Error fetching committee data:', err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

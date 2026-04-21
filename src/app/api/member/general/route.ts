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

    // Query the General table by Email
    const { data: generalData, error: generalError } = await supabase
      .from('General')
      .select('*')
      .eq('Email', email)
      .single();

    if (generalError) {
      console.error('General data query error:', generalError);
      return NextResponse.json(
        { error: 'User data not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: generalData,
    });
  } catch (err) {
    console.error('Error fetching general data:', err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}

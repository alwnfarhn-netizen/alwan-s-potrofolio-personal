import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  // Initialize Resend inside the request handler to avoid build-time top-level errors in Vercel
  const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Attempt to send email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['alwnfarhn@gmail.com'], // Target email
      subject: `New Transmission from ${name}`,
      text: `Entity Name: ${name}\nComm Channel: ${email}\n\nPayload:\n${message}`,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Transmission successful', data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to transmit data' },
      { status: 500 }
    );
  }
}

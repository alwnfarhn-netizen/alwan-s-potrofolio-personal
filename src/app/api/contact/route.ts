import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
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
      reply_to: email,
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

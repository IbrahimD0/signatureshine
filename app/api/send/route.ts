
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, addOns } = body;

    const { data, error } = await resend.emails.send({
      from: 'Signature Shine <info@signatureshine.org>',
      to: [email],
      cc:"Signatureshine1@gmail.com",
      subject: 'Booking Confirmation - Signature Shine',
      react: EmailTemplate({ firstName: name.split(' ')[0], service, phone, addOns }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ Tells Next.js this route is not static

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Create the transporter (using your hosting mail)
    const transporter = nodemailer.createTransport({
      host: "mail.hoursfromnow.tech", // example: use your hosting SMTP
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // info@hoursfromnow.tech
        pass: process.env.EMAIL_PASS, // app password or actual password
      },
    });

    const mailOptions = {
      from: `"Hours From Now Contact" <${process.env.EMAIL_USER}>`,
      to: "info@hoursfromnow.tech",
      subject: `New message from ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `,
    };
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");


    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Error sending email.' }, { status: 500 });
  }
}

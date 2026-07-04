import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      method,
      message,
    } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

// 1. Email to the firm
await transporter.sendMail({
  from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_TO,
  replyTo: email,
  subject: `New Website Enquiry - ${name}`,
  html: `
    <h2>New Website Enquiry</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Preferred Contact:</strong> ${method}</p>

    <h3>Message</h3>

    <p style="white-space:pre-line">
      ${message}
    </p>
  `,
});

// 2. Confirmation email to the client
await transporter.sendMail({
  from: `"MAS Attorneys" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "We've received your enquiry",
  html: `
  <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#333;line-height:1.6">

      <h2 style="color:#0F2845">
        Thank you for contacting MAS Attorneys
      </h2>

      <p>Dear ${name},</p>

      <p>
        Thank you for contacting MAS Attorneys.
        We have successfully received your enquiry and one of our legal
        professionals will review it shortly.
      </p>

      <p>
        We aim to respond within <strong>24 business hours</strong> using your
        preferred contact method:
        <strong>${method}</strong>.
      </p>

      <hr>

      <h3>Your enquiry</h3>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <p><strong>Message:</strong></p>

      <div style="
        background:#f8f8f8;
        padding:15px;
        border-left:4px solid #d4bb2a;
        white-space:pre-line;
      ">
        ${message}
      </div>

      <br>

      <p>
        If your matter is urgent, you may contact us directly:
      </p>

      <p>
        📞 079 470 6439<br>
        ✉️ info@masattorneys.co.za
      </p>

      <br>

      <p>
        Kind regards,
      </p>

      <p>
        <strong>MAS Attorneys</strong><br>
        366 Kent Avenue<br>
        Kent Gardens<br>
        Ferndale, Randburg
      </p>

  </div>
  `,
});

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send email.",
      },
      { status: 500 }
    );
  }
}
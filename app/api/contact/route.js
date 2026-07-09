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
<div style="margin:0;padding:40px 20px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #d4bb2a;border-radius:8px;overflow:hidden;">

<tr>
<td style="padding:35px;text-align:center;border-bottom:4px solid #d4bb2a;">

<img
src="https://masattorneys.co.za/logo.png"
width="250"
alt="MAS Attorneys"
style="display:block;margin:auto;"
>

</td>
</tr>

<tr>
<td style="padding:40px;">

<h2 style="margin-top:0;color:#0F2845;font-size:28px;">
New Website Enquiry
</h2>

<p style="color:#666;">
A new enquiry has been submitted via the MAS Attorneys website.
</p>

<table width="100%" cellpadding="12" cellspacing="0" style="margin-top:25px;border:1px solid #ececec;border-collapse:collapse;">

<tr>
<td style="background:#fafafa;"><strong>Name</strong></td>
<td>${name}</td>
</tr>

<tr>
<td style="background:#fafafa;"><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr>
<td style="background:#fafafa;"><strong>Phone</strong></td>
<td>${phone}</td>
</tr>

<tr>
<td style="background:#fafafa;"><strong>Preferred Contact</strong></td>
<td>${method}</td>
</tr>

</table>

<div style="
margin-top:30px;
padding:25px;
border-left:5px solid #d4bb2a;
background:#fafafa;
">

<h3 style="margin-top:0;color:#0F2845;">
Client Message
</h3>

<p style="white-space:pre-line;line-height:1.8;">
${message}
</p>

</div>

</td>
</tr>

<tr>
<td align="center" style="padding:35px;border-top:1px solid #ececec;">

<img
src="https://masattorneys.co.za/logo.png"
width="180"
style="display:block;margin:auto 0 15px;"
>

<p style="margin:0;color:#888;font-size:13px;">
366 Kent Avenue • Kent Gardens • Ferndale • Randburg
</p>

<p style="margin:8px 0 0;">
<a href="mailto:info@masattorneys.co.za" style="color:#0F2845;text-decoration:none;">
info@masattorneys.co.za
</a>
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</div>
`,
});

// 2. Confirmation email to the client
await transporter.sendMail({
  from: `"MAS Attorneys" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "We've received your enquiry",
html: `
<div style="margin:0;padding:40px 20px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #d4bb2a;border-radius:8px;overflow:hidden;">

<tr>
<td align="center" style="padding:40px;border-bottom:4px solid #d4bb2a;">

<img
src="https://masattorneys.co.za/logo.png"
width="250"
alt="MAS Attorneys"
>

</td>
</tr>

<tr>
<td style="padding:45px;">

<h2 style="margin-top:0;color:#0F2845;">
Thank you for contacting MAS Attorneys
</h2>

<p>Dear <strong>${name}</strong>,</p>

<p>
Thank you for contacting MAS Attorneys.
We have successfully received your enquiry and one of our attorneys
will review it shortly.
</p>

<p>
We aim to respond within
<strong>24 business hours</strong>
via your preferred contact method:
<strong style="color:#d4bb2a;">
${method}
</strong>.
</p>

<div style="
margin:35px 0;
padding:25px;
border:1px solid #d4bb2a;
background:#fcfcfc;
">

<h3 style="margin-top:0;color:#0F2845;">
Your Enquiry
</h3>

<table width="100%" cellpadding="10">

<tr>
<td width="180"><strong>Name</strong></td>
<td>${name}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr>
<td><strong>Phone</strong></td>
<td>${phone}</td>
</tr>

<tr>
<td><strong>Preferred Contact</strong></td>
<td>${method}</td>
</tr>

</table>

<hr style="border:none;border-top:1px solid #eee;margin:20px 0;">

<div style="
padding:18px;
background:#fafafa;
border-left:4px solid #d4bb2a;
white-space:pre-line;
line-height:1.7;
">
${message}
</div>

</div>

<p>
If your matter is urgent, please contact us directly.
</p>

<p>

<strong>Phone:</strong> 079 470 6439<br>

<strong>Email:</strong> info@masattorneys.co.za

</p>

<p style="margin-top:35px;">
Kind regards,
</p>

<p>
<strong style="color:#0F2845;">
MAS Attorneys
</strong>
</p>

</td>
</tr>

<tr>
<td align="center" style="padding:35px;border-top:1px solid #ececec;">

<img
src="https://masattorneys.co.za/logo.png"
width="180"
>

<p style="margin-top:20px;font-size:13px;color:#888;">
366 Kent Avenue, Kent Gardens<br>
Ferndale, Randburg, Johannesburg
</p>

<p style="margin-top:10px;">
<a href="https://masattorneys.co.za" style="color:#0F2845;text-decoration:none;">
www.masattorneys.co.za
</a>
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

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
import { transporter } from "@/lib/mail/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      fullname,
      email,
      subject,
      message,
    } = await req.json();

    // 1. Dynamic UI Accents matching the gold and navy theme
    const primaryColor = "#1e3a8a"; // Navy
    const secondaryColor = "#D4AF37"; // Gold
    const backgroundColor = "#f0f6ff";

    const subjectLine = `New Contact Inquiry: ${subject || "No Subject"}`;

    // 2. High-Fidelity Transactional HTML Mail Layout for Yahweh Run Orphanage
    const htmlEmailTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: ${backgroundColor}; color: #334155; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
          .container { max-width: 600px; margin: 24px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); border: 1px solid #E2E8F0; }
          .banner { background-color: ${primaryColor}; padding: 40px 24px; text-align: center; border-bottom: 4px solid ${secondaryColor}; }
          .banner h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.025em; }
          .banner p { color: rgba(255,255,255,0.85); margin: 8px 0 0 0; font-size: 16px; font-weight: 500; }
          .content { padding: 40px 32px; }
          .section-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: ${secondaryColor}; margin-bottom: 16px; border-bottom: 1px solid #F1F5F9; padding-bottom: 8px; }
          .card { background-color: #F8FAFC; border: 1px solid #F1F5F9; padding: 16px 20px; border-radius: 16px; margin-bottom: 16px; }
          .label { font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; margin-bottom: 4px; }
          .value { font-size: 15px; font-weight: 600; color: #0F172A; }
          .message-box { background-color: #F8FAFC; border-left: 4px solid ${secondaryColor}; padding: 20px; border-radius: 0 16px 16px 0; font-size: 15px; line-height: 1.6; color: #334155; margin-bottom: 24px; }
          .footer { background-color: #F8FAFC; padding: 24px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 12px; color: #94A3B8; font-weight: 600; }
          .heart { color: ${secondaryColor}; font-size: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Branded Banner Component -->
          <div class="banner">
            <h1>New Message Received</h1>
            <p>Yahweh Run Orphanage Foundation</p>
          </div>

          <div class="content">
            <!-- Sender Identification -->
            <div class="section-title">Sender Information</div>
            <div class="card">
              <div class="label">Full Name</div>
              <div class="value" style="font-size: 18px; color: ${primaryColor};">${fullname}</div>
            </div>
            <div class="card">
              <div class="label">Email Address</div>
              <div class="value">${email}</div>
            </div>

            <!-- Inquiry Details -->
            <div class="section-title">Inquiry Details</div>
            <div class="card">
              <div class="label">Subject</div>
              <div class="value">${subject || "General Inquiry"}</div>
            </div>

            <div class="section-title">Message Content</div>
            <div class="message-box">
              ${message ? message.replace(/\n/g, "<br/>") : "No message content provided."}
            </div>
          </div>

          <!-- Base System Ledger Footer -->
          <div class="footer">
            <div style="margin-bottom: 8px;">Automated Generation Node • Yahweh Run Orphanage</div>
            <div class="heart">♥</div>
          </div>
        </div>
      </body>
      </html>
    `;

    // 3. Nodemailer Transmission Trigger
    await transporter.sendMail({
      from: `"Yahweh Run Website" <${process.env.SMTP_USER}>`,
      to: "info@yahwehrunorphanage.org",
      replyTo: email,
      subject: subjectLine,
      html: htmlEmailTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Critical contact message transmission exception:", error);
    return NextResponse.json(
      { success: false, error: "Internal processing disruption occurred." },
      { status: 500 },
    );
  }
}

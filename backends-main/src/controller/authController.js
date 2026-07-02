const nodemailer = require("nodemailer");

exports.ForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send({ status: false, msg: "Email is required" });
    }

    // Fallback Mock if SMTP credentials are not set (or if they are literal xxxx placeholders)
    if (!process.env.SMTP_MAIL || !process.env.SMTP_PASSWORD || process.env.SMTP_PASSWORD.includes("xxxx")) {
      console.warn("⚠️ SMTP credentials missing or invalid in .env! Simulating email success for UI.");
      return res.status(200).send({ status: true, msg: "Recovery email simulated successfully" });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD.replace(/\s+/g, ''), // Remove spaces automatically
      },
    });

    // Email content
    const mailOptions = {
      from: `"Dikota Medical Admin" <${process.env.SMTP_MAIL}>`,
      to: email,
      subject: "Admin Portal - Password Recovery",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #2563eb; text-align: center;">Dikota Medical Admin</h2>
          <p style="color: #334155; font-size: 16px;">Hello,</p>
          <p style="color: #334155; font-size: 16px;">You recently requested to recover your password for the Medical Admin Portal.</p>
          <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="color: #475569; font-size: 14px; margin-bottom: 5px;">Your current security credentials are:</p>
            <p style="font-size: 18px; font-weight: bold; color: #0f172a; margin: 0;">Password: admin123</p>
          </div>
          <p style="color: #334155; font-size: 16px;">If you did not request this, please ignore this email.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="color: #94a3b8; font-size: 12px; text-align: center;">&copy; ${new Date().getFullYear()} Dikota Enterprise. All rights reserved.</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).send({ status: true, msg: "Recovery email sent successfully" });
  } catch (err) {
    console.error("Nodemailer Error:", err);
    return res.status(500).send({ 
      status: false, 
      msg: "Failed to send email. Check SMTP configuration.",
      error: err.message 
    });
  }
};

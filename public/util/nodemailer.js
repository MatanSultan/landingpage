import nodemailer from "nodemailer";
export default async function sendEmail(email, name, subject, phone) {
  const SMTP_USER = process.env.SMTP_USER; // email address
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD; // password for that account

  if (!SMTP_USER) {
    throw new Error("Define the SMTP_USER environmental variable");
  }

  if (!SMTP_PASSWORD) {
    throw new Error("Define the SMTP_PASSWORD environmental variable");
  }

  const transporter = nodemailer.createTransport({
    secure: false, // doesn't work without this line
    service: "hotmail", // doesn't work without this line
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
  const mailData = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `Traibo - new client: ${name}`,
    html: ` <p><b>Subject: <b>${subject}</p>
            <p><b>Email: </b> ${email}</p>
            <p><b>Phone: </b> ${phone}</p>
      `,
  };
  try {
    await transporter.sendMail(mailData); // "await" is the modern way to do it, not callback functions
  } catch (error) {
    console.log(`error`, error);
  }
}

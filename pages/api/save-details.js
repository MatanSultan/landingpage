import connectToDatabase from "../../public/util/mongodb.js";
import {
  nameError,
  emailError,
  phoneError,
  subjectError,
} from "../../public/util/contact-us-validations.js";
import { sendEmail } from "../../public/util/sendgrid.js";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    res.status(405).json({
      error: `save-details is a PUT request,not ${req.method}!`,
    });
    return;
  }

  let { name, subject, phone, email } = req.body;

  name = name?.trim();
  phone = phone?.trim();
  subject = subject?.trim();
  email = email?.trim().toLowerCase();

  const anyError =
    nameError(name) ||
    emailError(email) ||
    phoneError(phone) ||
    subjectError(subject);

  if (anyError) {
    res.status(406).json({ error: anyError });
    return;
  }

  try {
    var { db } = await connectToDatabase();
    await db.collection("contactUs").insertOne({
      name,
      subject,
      phone,
      email,
      date: new Date(),
    });
    await sendEmail({
      name,
      subject,
      phone,
      email,
    });
    res
      .status(201)
      .json({ mes: "The item has been added & sent successfully" });
  } catch (err) {
    res
      .status(503)
      .json({ error: `Failed to connect to DB or send email ${err}` });
    return;
  }
}

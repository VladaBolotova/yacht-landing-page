import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'vladislavabolotova@gmail.com',
    pass: 'Alexasani2020',
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'vladislavabolotova@gmail.com',
      subject: `New message from ${name} <${email}>`,
      text: message,
      html: `<p>${message}</p>`,
    });

    console.log(`Message sent: ${info.messageId}`);

    return res.status(200).json({ message: 'Message sent' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({message:"Error sending message"});
  }}


import { NextApiRequest, NextApiResponse } from 'next';
import { ContatcFormData } from 'pages/contact-me';
const nodeMail = require('nodemailer');

interface ExtendedNextApiRequest extends NextApiRequest {
  body: ContatcFormData;
}

async function sendEmail(req: ExtendedNextApiRequest, res: NextApiResponse) {
  const transporter = await nodeMail.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  const mailOption = {
    from: process.env.GMAIL_USER,
    to: 'g1mishra.dev@gmail.com',
    subject: `${req.body.name} want to talk`,
    html: `You got a message from  <br/>
    Email : ${req.body.email} <br/>
    Name: ${req.body.name} <br/>
    Message: ${req.body.message}`,
  };
  try {
    await transporter.sendMail(mailOption);
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;

const nodeMail = require('nodemailer');

// interface ExtendedNextApiRequest extends NextApiRequest {
//   body: ContatcFormData;
// }

export async function POST(req: Request) {
  const body = await req.json();

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
    subject: `${body.name} want to talk`,
    html: `You got a message from  <br/>
    Email : ${body.email} <br/>
    Name: ${body.name} <br/>
    Message: ${body.message}`,
  };
  try {
    await transporter.sendMail(mailOption);
  } catch (error: any) {
    // return res.status(error.statusCode || 500).json({ error: error.message });
    return Response.json({ error: error.message });
  }

  // return res.status(200).json({ error: '' });
  return Response.json({ error: '' });
}

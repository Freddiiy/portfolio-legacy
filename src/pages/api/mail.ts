// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export interface Mail {
  name: string;
  from: string;
  subject: string;
  message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let configOption = {
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  let { name, from, subject, message }: Mail = req.body;

  let transporter = nodemailer.createTransport(configOption);

  transporter.sendMail(
    {
      from: `"${name}" <frederikgaller@live.dk>`,
      to: "frederikgaller@live.dk",
      replyTo: from,
      subject: `Besked fra ${name}: ${subject}`,
      text: message,
    },
    (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: 500,
          info: "There was an error sending the message",
        });
      } else {
        console.log(`email sent to ${name}`);
        res.status(200).json({ status: 200, info: info.accepted });
      }
    }
  );
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export interface Mail {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let configOption = {
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  let { from, subject, text } = req.body;

  let transporter = nodemailer.createTransport(configOption);

  let info = transporter.sendMail(
    {
      from: "kontakt@frederikgaller.com",
      to: "frederikgaller@live.dk",
      replyTo: from,
      subject: subject,
      text: text,
    },
    (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          status: 500,
          info: "There was an error sending the message",
        });
      } else {
        res.status(200).json({ status: 200, info: info.accepted });
      }
    }
  );
}

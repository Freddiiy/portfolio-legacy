// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SiUber } from 'react-icons/si';
import nodemailer, { SendMailOptions } from "nodemailer";

export interface Mail {
  from: string,
  to: string,
  subject: string,
  text: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let {from, to, subject, text} = req.body;

    sendMail(from, to, subject, text).then(() => {
        res.status(200)
    }).catch(() => {
        res.status(500).json({
            status: 500,
            message: "Something went wrong with the mail",
        })
    })
}


let configOption = {
    host: "outlook.office365.com",
    port: 993,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
}

export async function sendMail(from: string, to: string, subject: string, text: string) {
    let transporter = nodemailer.createTransport(configOption)

    let info = await transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        text: text,
    })

    console.log(info)

    return [info.accepted, info.pending, info.rejected, info.response]
}
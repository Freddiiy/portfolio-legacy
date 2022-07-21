import nodemailer, { SendMailOptions } from "nodemailer";

let configOption = {
    host: "outlook.office365.com",
    port: 993,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
}

export async function sendMail(from: string, subject: string, text: string) {
    let transporter = nodemailer.createTransport(configOption)

    let info = await transporter.sendMail({
        from: from,
        to: process.env.MY_EMAIL,
        subject: subject,
        text: text,
    })

    console.log(info.accepted)
    console.log(info.rejected)

    return [info.accepted, info.pending, info.rejected, info.response]
}
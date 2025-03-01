import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const { email, emailTo, subject, content } = await req.json()
    if (!content) {
      return NextResponse.json({ message: "Thông tin không đầy đủ!" }, { status: 400 })
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: emailTo,
      bcc: "huyenpv@dansolutions.vn",
      subject: subject,
      html: content,
    }

    // Send the email
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Gửi câu trả lời thành công!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Đã xảy ra lỗi khi gửi câu trả lời!", error: error }, { status: 500 })
  }
}

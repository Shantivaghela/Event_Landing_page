const nodeMailer = require('nodemailer');
require("dotenv").config();


const transpoter = nodeMailer.createTransport({

    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.E_PASSWORD

    }
})

const sendMailer = async (req, res) => {
    const { name, email, number, company } = req.body;
    try {
        await transpoter.sendMail({
            from: process.env.MY_EMAIL,
            to: `${email},${process.env.MY_EMAIL}`,
            subject: "🎉 Inspire India 2025 Registration",
            html: `
            <h2>New Registration</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${number || 'N/A'}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p>Event: Inspire India 2025 | Dec 5-7 | Pragati Maidan, New Delhi</p>

        `});

        return res.status(200).json({ success: true });
    } catch (error) {
        // console.error('Mail error:', error);
        return res.status(500).json({ success: false, error: error });

    }
}

module.exports = sendMailer;
// utils/createTransporter.js
const nodemailer = require('nodemailer');

// Create a transporter function that accepts the sender email address
const createTransporter = (senderEmail, senderPassword) => {
    return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: senderEmail,
            pass: senderPassword
        }
    });
};

module.exports = createTransporter;

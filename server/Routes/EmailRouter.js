import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/sendOrderConfirmation', async (req, res) => {
  const { email, address, town, total } = req.body;

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.user, // your email address
      pass: process.env.pass,          // your email password or app-specific password
    },
  });

  // Set up email data
  const mailOptions = {
    from: 'josephkarimambugua@gmail.com',
    to: 'njerivictory52@gmail.com', // recipient email
    subject: 'Order Confirmation',
    text: `Your order has been placed successfully. 
    Details:
    - Email: ${email}
    - Address: ${address}
    - Town: ${town}
    - Total: ${total}`,
    html: `<h2>Your order has been placed successfully</h2>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Address:</strong> ${address}</p>
           <p><strong>Town:</strong> ${town}</p>
           <p><strong>Total:</strong> ${total}</p>`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Order confirmation email sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send order confirmation email.' });
  }
});

export default router;

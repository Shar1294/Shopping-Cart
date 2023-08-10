const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const paypal = require('paypal-rest-sdk');
const nodemailer = require('nodemailer');

const app = express();

// Replace with your PayPal client ID
paypal.configure({
  mode: 'sandbox', // sandbox for testing, 'live' for production
  client_id: 'https://www.paypal.com/sdk/js?client-id=ATRuWv5M6Qr150SKANCfDlcqAeneMxZCcc21oAwZIq-gANX_AbtPsds6JaklpHxtlLE9cFIt1GF5gwgY',
  client_secret: 'EFPpD9N2l3Oc8LraF5_kWS6hCnn-QZ3HIHf9uW-2B_COxGG5EGRFLSKEWiLh-s3_LPwSrcC1OHHKE_-m',
});

// Replace with your SendGrid API key or other email service credentials
const sendgridAPIKey = 'oVic3IbnDSIqlJ-3z';

app.use(cors());
app.use(bodyParser.json());

app.post('/api/invoice', (req, res) => {
  const { total, payerName } = req.body;

  // Create PayPal invoice
  const invoice = {
    merchant_info: {
      email: 'sharmelac1994@gmail.com', // Replace with the website owner's email address
    },
    billing_info: [
      {
        email: 'sb-jvw6726932151@personal.example.com', // Replace with the user's email address
      },
    ],
    items: [
      {
        name: '25mph Vest', // Replace with the product name
        quantity: 1,
        unit_price: total,
        currency: 'USD',
      },
    ],
  };

  paypal.invoice.create(invoice, (err, response) => {
    if (err) {
      console.error('PayPal invoice creation error:', err);
      return res.json({ success: false });
    }

    // Send the invoice to the user and website owner via email
    const emailContent = `
      Hello ${payerName},
      Thank you for your purchase. Please find the invoice attached.
      Kind regards,
      Your Website Team
    `;

    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: sendgridAPIKey,
      },
    });

    const mailOptions = {
      from: 'sharmelac1994@gmail.com', // Replace with your website email address
      to: 'shasha.18purni@gmail.com', // Replace with the user's and website owner's email addresses
      subject: 'Invoice for your purchase',
      text: emailContent,
      attachments: [
        {
          filename: 'invoice.pdf',
          content: response.invoice_pdf,
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending error:', error);
        return res.json({ success: false });
      }
      console.log('Email sent:', info.response);
      return res.json({ success: true });
    });
  });
});

const port = 5000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
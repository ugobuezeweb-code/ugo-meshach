const nodemailer = require('nodemailer');

// SMTP configuration
const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: 'ugobuezeweb@gmail.com', // Ensure this matches the Gmail account used for App Password
    pass: 'ytrsvtrbfcnvkitpn', // Replace with a new 16-character App Password (no spaces)
  },
};

console.log('SMTP configuration:', {
  host: smtpConfig.host,
  port: smtpConfig.port,
  secure: smtpConfig.secure,
  user: smtpConfig.auth.user,
  pass: smtpConfig.auth.pass ? '[REDACTED]' : undefined, // Avoid logging password
});

const transporter = nodemailer.createTransport(smtpConfig);

async function sendTestEmail() {
  try {
    // Verify SMTP connection
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: '"Ugochukwu Meshach" <ugobuezeweb@gmail.com>',
      to: 'ugobuezeweb@gmail.com',
      subject: 'Test Email from Nodemailer',
      text: 'This is a test email to verify SMTP settings.',
      html: '<p>This is a test email to verify <b>SMTP settings</b>.</p>',
    });
    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Error:', error);
    console.error('Error details:', {
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      command: error.command,
    });
    console.log('Please ensure the following:');
    console.log('- The Gmail account (ugobuezeweb@gmail.com) has 2FA enabled.');
    console.log('- The App Password is generated for "Mail" at https://myaccount.google.com/security.');
    console.log('- The App Password is 16 characters, no spaces, and entered correctly.');
    console.log('- Check for security alerts at https://myaccount.google.com/security.');
    console.log('- Allow login via https://accounts.google.com/DisplayUnlockCaptcha if blocked.');
  }
}

sendTestEmail();
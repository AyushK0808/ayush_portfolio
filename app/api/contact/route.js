import dbConnect from '../../../utils/dbConnect';  // Assuming you have a utility for DB connection
import Contact from '../../../models/Contact';      // Assuming you have a Contact model
import nodemailer from 'nodemailer';

// Handle POST requests
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
      });
    }

    // Connect to MongoDB
    await dbConnect();  

    // Create a new Contact document in MongoDB
    const newContact = await Contact.create({ name, email, message });

    // Send an email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use any other service like SendGrid, etc.
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: 'theofficialayush.kumar@gmail.com',
      subject: `Form Response from ${name}`,
      html: `
       <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #1a1a1a; border: 1px solid #6a0dad; border-radius: 8px; max-width: 600px; margin: auto;">
  <h2 style="text-align: center; color: #c084fc;">New Contact Form Submission</h2>
  <hr style="border: none; height: 1px; background-color: #6a0dad;">
  <div style="margin-bottom: 16px;">
    <strong style="display: block; color: #c084fc; margin-bottom: 8px;">Name:</strong>
    <span style="color: #e0e0e0;">${name}</span>
  </div>
  <div style="margin-bottom: 16px;">
    <strong style="display: block; color: #c084fc; margin-bottom: 8px;">Email:</strong>
    <span style="color: #e0e0e0;">${email}</span>
  </div>
  <div style="margin-bottom: 16px;">
    <strong style="display: block; color: #c084fc; margin-bottom: 8px;">Message:</strong>
    <p style="color: #e0e0e0; white-space: pre-line;">${message}</p>
  </div>
  <hr style="border: none; height: 1px; background-color: #6a0dad;">
  <p style="text-align: center; color: #777; font-size: 12px;">
    This email was generated automatically by your contact form.
  </p>
</div>

      `,
    };

    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(
      JSON.stringify({ success: true, data: newContact }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Server Error' }),
      {
        status: 500,
      }
    );
  }
}

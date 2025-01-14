import dbConnect from '../../../utils/dbConnect';  // Assuming you have a utility for DB connection
import Contact from '../../../models/Contact';      // Assuming you have a Contact model

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

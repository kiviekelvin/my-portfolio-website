import emailjs from '@emailjs/browser';

// EmailJS configuration - Updated with your credentials
const EMAILJS_SERVICE_ID = 'service_ue75e4z';
const EMAILJS_TEMPLATE_ID = 'template_lrakql8';
const EMAILJS_PUBLIC_KEY = 's9l8ZLq205xZvcyXU';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: 'Kelvin Ahante', // Your name
      to_email: 'kelvinkivie@gmail.com', // Your email
      reply_to: data.email,
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};

// Fallback function for demo purposes (when EmailJS is not configured)
export const sendEmailDemo = async (data: EmailData): Promise<void> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Log the form data (in production, this would be sent to your email)
  console.log('📧 Email would be sent with the following data:');
  console.log('To: kelvinkivie@gmail.com');
  console.log('From:', data.email);
  console.log('Name:', data.name);
  console.log('Subject:', data.subject);
  console.log('Message:', data.message);
  
  // Simulate success
  return Promise.resolve();
};
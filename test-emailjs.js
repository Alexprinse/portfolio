// Quick EmailJS test - temporary file
import emailjs from '@emailjs/browser';

const testEmailJS = async () => {
  try {
    const result = await emailjs.send(
      'service_ix7pdyd',
      'template_8x4ethm',
      {
        from_name: 'Test User',
        from_email: 'test@example.com',
        message: 'This is a test message',
        to_name: 'B. Shalem',
        to_email: 'princebadampudi@gmail.com',
      },
      'W3NTTHqXUaDSrUjZo'
    );
    
    console.log('✅ EmailJS test successful:', result);
    return true;
  } catch (error) {
    console.error('❌ EmailJS test failed:', error);
    return false;
  }
};

// Call this function from browser console to test
window.testEmailJS = testEmailJS;

export default testEmailJS;

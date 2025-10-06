import { config } from './config';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// EmailJS integration (client-side email sending)
export const sendEmailWithEmailJS = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Note: You'll need to install emailjs-com package
    // npm install @emailjs/browser
    
    // Uncomment and configure when you're ready to use EmailJS:
    /*
    const emailjs = await import('@emailjs/browser');
    
    const result = await emailjs.send(
      config.contact.emailjs.serviceId,
      config.contact.emailjs.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: config.personal.name,
      },
      config.contact.emailjs.publicKey
    );

    return {
      success: true,
      message: 'Email sent successfully via EmailJS',
    };
    */
    
    // Placeholder for now
    console.log('EmailJS would send:', formData);
    return {
      success: true,
      message: 'EmailJS is not configured yet',
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Failed to send email via EmailJS',
    };
  }
};

// Formspree integration
export const sendEmailWithFormspree = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const response = await fetch(config.contact.formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Email sent successfully via Formspree',
      };
    } else {
      throw new Error('Formspree request failed');
    }
  } catch (error) {
    console.error('Formspree error:', error);
    return {
      success: false,
      message: 'Failed to send email via Formspree',
    };
  }
};

// Netlify Forms integration (works automatically when deployed to Netlify)
export const sendEmailWithNetlify = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }).toString(),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Email sent successfully via Netlify Forms',
      };
    } else {
      throw new Error('Netlify Forms request failed');
    }
  } catch (error) {
    console.error('Netlify Forms error:', error);
    return {
      success: false,
      message: 'Failed to send email via Netlify Forms',
    };
  }
};

// Main email sending function that chooses the appropriate service
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  // If real submission is disabled, just log and return success
  if (!config.contact.enableRealSubmission) {
    console.log('Contact form submission (demo mode):', {
      ...formData,
      timestamp: new Date().toISOString(),
    });
    
    return {
      success: true,
      message: 'Demo mode: Form data logged to console',
    };
  }

  // Try different email services based on configuration
  if (config.contact.useNetlifyForms) {
    return await sendEmailWithNetlify(formData);
  }
  
  if (config.contact.formspreeEndpoint && config.contact.formspreeEndpoint !== "https://formspree.io/f/your-form-id") {
    return await sendEmailWithFormspree(formData);
  }
  
  if (config.contact.emailjs.serviceId && config.contact.emailjs.serviceId !== "your_service_id") {
    return await sendEmailWithEmailJS(formData);
  }

  // Fallback: just log the data
  console.log('No email service configured. Form data:', formData);
  return {
    success: true,
    message: 'No email service configured. Form data logged.',
  };
};

export default {
  sendContactEmail,
  sendEmailWithEmailJS,
  sendEmailWithFormspree,
  sendEmailWithNetlify,
};

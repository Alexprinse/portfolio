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
    console.log('EmailJS attempting to send with config:', {
      serviceId: config.contact.emailjs.serviceId,
      templateId: config.contact.emailjs.templateId,
      publicKey: config.contact.emailjs.publicKey.substring(0, 5) + '...',
    });

    const emailjs = await import('@emailjs/browser');
    
    const result = await emailjs.send(
      config.contact.emailjs.serviceId,
      config.contact.emailjs.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: config.personal.name,
        to_email: config.personal.email,
      },
      config.contact.emailjs.publicKey
    );

    console.log('EmailJS success:', result);
    return {
      success: true,
      message: 'Email sent successfully! Thank you for your message.',
    };
  } catch (error) {
    console.error('EmailJS detailed error:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to send email via EmailJS';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid service ID')) {
        errorMessage = 'EmailJS service ID is invalid. Please check your configuration.';
      } else if (error.message.includes('Invalid template ID')) {
        errorMessage = 'EmailJS template ID is invalid. Please check your configuration.';
      } else if (error.message.includes('Invalid public key')) {
        errorMessage = 'EmailJS public key is invalid. Please check your configuration.';
      } else if (error.message.includes('network')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else {
        errorMessage = `EmailJS error: ${error.message}`;
      }
    }
    
    return {
      success: false,
      message: errorMessage,
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

// FormSubmit integration (https://formsubmit.co)
export const sendEmailWithFormSubmit = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Construct the FormSubmit AJAX endpoint from the configured personal email
    const endpoint = `https://formsubmit.co/ajax/${config.personal.email}`;

    const response = await fetch(endpoint, {
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
        message: 'Message sent successfully via FormSubmit',
      };
    }

    const text = await response.text();
    console.error('FormSubmit response error:', response.status, text);
    return {
      success: false,
      message: `FormSubmit request failed with status ${response.status}`,
    };
  } catch (error) {
    console.error('FormSubmit error:', error);
    return {
      success: false,
      message: 'Failed to send message via FormSubmit',
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
  // Prefer FormSubmit (single endpoint) when real submissions are enabled
  if (config.contact.enableRealSubmission) {
    return await sendEmailWithFormSubmit(formData);
  }

  if (config.contact.useNetlifyForms) {
    return await sendEmailWithNetlify(formData);
  }

  if (config.contact.formspreeEndpoint && config.contact.formspreeEndpoint !== "https://formspree.io/f/your-form-id") {
    return await sendEmailWithFormspree(formData);
  }

  if (config.contact.emailjs && config.contact.emailjs.serviceId && config.contact.emailjs.serviceId !== "your_service_id") {
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
  sendEmailWithFormSubmit,
};

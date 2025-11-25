// Configuration file for the portfolio
export const config = {
  // Personal Information
  personal: {
    name: "B. Shalem",
    fullName: "Badampudi Shalem Bakth Singh",
    title: "AI & Robotics Developer",
    // Read contact email from Vite env variable if provided for security in repos
    email: import.meta.env.VITE_CONTACT_EMAIL || "princebadampudi@gmail.com",
    phone: "6302251158",
    location: "Andhra Pradesh, India",
    bio: "Final year BTech student exploring the intersection of artificial intelligence, robotics, and cutting-edge technology to build the future.",
  },

  // Social Links
  social: {
    github: "https://github.com/Alexprinse",
    linkedin: "https://www.linkedin.com/in/shalembakthsingh/",
    email: "mailto:princebadampudi@gmail.com",
  },

  // Contact Form Configuration
  contact: {
    // Set to true if you want to use a real email service
    enableRealSubmission: true,
    
    // Using FormSubmit (https://formsubmit.co) for form POSTs by default.
    // Fallback: Formspree endpoint (if you prefer Formspree instead)
    formspreeEndpoint: "https://formspree.io/f/your-form-id", // Replace with your Formspree form ID
    // Minimal placeholder for EmailJS settings (kept for backward-compatibility).
    // If you don't use EmailJS you can leave these empty.
    emailjs: {
      serviceId: "",
      templateId: "",
      publicKey: "",
    },
    
    // Alternative: Netlify Forms (works automatically if hosted on Netlify)
    useNetlifyForms: false, // Set to true only if deploying to Netlify and not using EmailJS
  },

  // Project Links
  projects: {
    autonomousNavigation: {
      github: "https://github.com/Alexprinse/autonomous-navigation",
      demo: "https://drive.google.com/file/d/1YHmMq3Uec06kKO0cx0jvXUHv6cO-dgKY/view?usp=sharing",
    },
    nlpModel: {
      github: "https://github.com/Alexprinse/nlp-sentiment-analysis", 
      demo: "https://alexprinse.github.io/nlp-demo",
    },
    computerVision: {
      github: "https://refaipro.streamlit.app/",
      demo: "https://refaipro.streamlit.app/",
    },
    reinforcementLearning: {
      github: "https://github.com/Alexprinse/rl-agent",
      demo: "https://campusvents.vercel.app/#/events",
    },
    logisticCobot: {
      github: "",
      demo: "/projects/logistic-cobot",
    },
  },

  // Analytics (optional)
  analytics: {
    googleAnalyticsId: "", // Add your GA4 measurement ID
  },
};

export default config;

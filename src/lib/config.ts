// Configuration file for the portfolio
export const config = {
  // Personal Information
  personal: {
    name: "B. Shalem",
    fullName: "Badampudi Shalem Bakth Singh",
    title: "AI & Robotics Developer",
    email: "princebadampudi@gmail.com",
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
    
    // EmailJS configuration (if using EmailJS)
    emailjs: {
      serviceId: "service_5ig206i", // Replace with your EmailJS service ID
      templateId: "template_0y18log", // Replace with your EmailJS template ID
      publicKey: "Lk9QQgePXyoPQksdI", // Replace with your EmailJS public key
    },
    
    // Alternative: Formspree endpoint
    formspreeEndpoint: "https://formspree.io/f/your-form-id", // Replace with your Formspree form ID
    
    // Alternative: Netlify Forms (works automatically if hosted on Netlify)
    useNetlifyForms: false, // Set to true only if deploying to Netlify and not using EmailJS
  },

  // Project Links
  projects: {
    autonomousNavigation: {
      github: "https://github.com/Alexprinse/autonomous-navigation",
      demo: "https://alexprinse.github.io/autonomous-navigation-demo",
    },
    nlpModel: {
      github: "https://github.com/Alexprinse/nlp-sentiment-analysis", 
      demo: "https://alexprinse.github.io/nlp-demo",
    },
    computerVision: {
      github: "https://github.com/Alexprinse/cv-object-detection",
      demo: "https://alexprinse.github.io/cv-demo",
    },
    reinforcementLearning: {
      github: "https://github.com/Alexprinse/rl-agent",
      demo: "https://alexprinse.github.io/rl-demo",
    },
  },

  // Analytics (optional)
  analytics: {
    googleAnalyticsId: "", // Add your GA4 measurement ID
  },
};

export default config;

# B. Shalem - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a professional design.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean design with smooth animations using Framer Motion
- **Dark/Light Theme**: Built-in theme switching capability
- **Contact Form**: Functional contact form with multiple email service integrations
- **Project Showcase**: Beautiful project cards with links to demos and source code
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Built with Vite for optimal performance

## 🚀 Quick Start

### 1. Installation

```bash
# Clone the repository (replace with your repo URL)
git clone https://github.com/Alexprinse/shalem-synth-space
cd shalem-synth-space

# Install dependencies
npm install
```

### 2. Customize Your Information

Edit the configuration file at `src/lib/config.ts`:

```typescript
export const config = {
  personal: {
    name: "Your Name",
    fullName: "Your Full Name", 
    title: "Your Professional Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Your Country",
    bio: "Your professional bio/description",
  },
  
  social: {
    github: "https://github.com/Alexprinse",
    linkedin: "https://www.linkedin.com/in/shalembakthsingh/", 
    email: "mailto:princebadampudi@gmail.com",
  },
  
  // Update project links and other configurations...
};
```

### 3. Set Up Contact Form (Optional)

Choose one of these options for your contact form:

#### Option A: EmailJS (Recommended for beginners)
1. Create an account at [EmailJS](https://emailjs.com)
2. Install the EmailJS package: `npm install @emailjs/browser`
3. Update the config with your EmailJS credentials:
```typescript
contact: {
  enableRealSubmission: true,
  emailjs: {
    serviceId: "your_service_id",
    templateId: "your_template_id", 
    publicKey: "your_public_key",
  },
}
```

#### Option B: Formspree
1. Create an account at [Formspree](https://formspree.io)
2. Update the config:
```typescript
contact: {
  enableRealSubmission: true,
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
}
```

#### Option C: Netlify Forms (if deploying to Netlify)
1. Update the config:
```typescript
contact: {
  enableRealSubmission: true,
  useNetlifyForms: true,
}
```

### 4. Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **Lucide React** - Icons

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3d200b0b-7599-49fa-9604-b61779fef1cf) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              B. Shalem
            </h3>
            <p className="text-muted-foreground">
              AI & Robotics Developer
            </p>
          </div>

          <div className="flex gap-6">
            <FooterLink href="https://github.com" icon={<Github />} label="GitHub" />
            <FooterLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <FooterLink href="mailto:contact@example.com" icon={<Mail />} label="Email" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React & TypeScript
          </p>
          <p className="mt-2">© {new Date().getFullYear()} B. Shalem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
    aria-label={label}
  >
    <div className="text-foreground/70 hover:text-primary transition-colors">
      {icon}
    </div>
  </a>
);

export default Footer;

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { config } from "@/lib/config";
import React from "react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          {/* Profile photo placeholder */}
          <motion.div
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-glow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-black">
              S
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {config.personal.name}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8"
          >
            <TypewriterText
              texts={[
                "AI & Robotics Developer",
                "Machine Learning Enthusiast",
                "Innovation Engineer",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            {config.personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-glow-primary transition-all duration-300 group"
              onClick={() => navigate('/contact')}
            >
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => navigate('/projects')}
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4"
          >
            <SocialLink icon={<Github />} href={config.social.github} label="GitHub" />
            <SocialLink icon={<Linkedin />} href={config.social.linkedin} label="LinkedIn" />
            <SocialLink icon={<Mail />} href={config.social.email} label="Email" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setIndex((index + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts]);

  return (
    <span className="inline-block min-h-[2rem]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <div className="text-foreground/70 group-hover:text-primary transition-colors">
      {icon}
    </div>
  </motion.a>
);

export default Hero;

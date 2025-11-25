import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Briefcase, 
  Bot, 
  Award, 
  Trophy, 
  Rocket, 
  GraduationCap, 
  Zap,
  Target
} from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience, certifications, and achievements in AI, robotics, and technology
          </p>
        </motion.div>

        {/* Internships Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Internships
            </span>
          </h3>
          <div className="space-y-6">
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold text-foreground">Machine Learning Internship</h4>
              </div>
              <p className="text-lg font-medium text-primary mb-2">IIIT Kottayam</p>
              <p className="text-muted-foreground leading-relaxed">
                Explored Explainable AI and fairness in ML. Implemented bias mitigation techniques and interpretability tools 
                like LIME, Saliency Maps, GRAD-CAM, LRP, IG, SmoothGradIG in project work.
              </p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Bot className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold text-foreground">Artificial Intelligence Internship</h4>
              </div>
              <p className="text-lg font-medium text-primary mb-2">Infosys Springboard</p>
              <p className="text-muted-foreground leading-relaxed">
                Worked on a Computer Vision project involving image processing and classification. Gained hands-on experience 
                with AI model development and deployment.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">SQL Certification</h4>
              <p className="text-muted-foreground">HackerRank</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">Artificial Intelligence Primer Intelligence</h4>
              <p className="text-muted-foreground">Infosys</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">Principles of Generative AI</h4>
              <p className="text-muted-foreground">Infosys</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-2">NXP AIM Robotics Competition</h4>
              <p className="text-muted-foreground">Participation Certificate</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Achievements
            </span>
          </h3>
          <div className="space-y-4">
          <motion.div 
            className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">Third prize in Grand Finale - NXP AIM Robotics Competition</h4>
            </div>
            <p className="text-muted-foreground">NXP Semiconductors • 2025</p>
          </motion.div>
          <motion.div 
            className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">Regional Finale Winner - NXP AIM Robotics Competition</h4>
            </div>
            <p className="text-muted-foreground">NXP Semiconductors • 2025</p>
          </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Rocket className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Advanced Stage Contributor - Adobe India Hackathon</h4>
              </div>
              <p className="text-muted-foreground">NLP-based PDF Intelligence Solution</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Top 1% - NPTEL Machine Learning</h4>
              </div>
              <p className="text-muted-foreground">National Programme on Technology Enhanced Learning</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Top 2% - NPTEL Microprocessors and Interfacing</h4>
              </div>
              <p className="text-muted-foreground">National Programme on Technology Enhanced Learning</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Bot className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Task 4 Qualifier - e-Yantra Robotics Competition</h4>
              </div>
              <p className="text-muted-foreground">IIT Bombay • Logistic Cobot Theme • 2024</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Stage-2 Advancement - NXP AIM Robotics Competition</h4>
              </div>
              <p className="text-muted-foreground">NXP Semiconductors • 2024</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;

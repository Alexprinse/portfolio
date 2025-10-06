import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Cpu, Lightbulb } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-24 px-4 relative overflow-hidden">
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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a final year BTech student passionate about pushing the boundaries of
              what's possible with AI and robotics. My journey in technology is driven by
              curiosity and a desire to create solutions that make a real impact.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With expertise spanning machine learning, computer vision, and autonomous systems,
              I thrive on transforming complex problems into elegant, innovative solutions.
              Currently focused on deep learning architectures and their applications in robotics.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding or experimenting with new technologies, you'll find me
              contributing to open-source projects and staying at the forefront of AI research.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6">
            <FeatureCard
              icon={<Code2 className="w-8 h-8" />}
              title="Clean Code"
              description="Writing maintainable, scalable, and efficient code that stands the test of time"
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8" />}
              title="AI Innovation"
              description="Exploring cutting-edge ML models and neural network architectures"
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Problem Solving"
              description="Transforming complex challenges into elegant technical solutions"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
    whileHover={{ scale: 1.02, boxShadow: "var(--glow-primary)" }}
  >
    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export default About;

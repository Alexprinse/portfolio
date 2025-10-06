import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Autonomous Navigation System",
      description:
        "Developed a real-time obstacle detection and path planning system using ROS and deep learning for autonomous mobile robots.",
      tags: ["Python", "ROS", "Computer Vision", "PyTorch"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Natural Language Processing Model",
      description:
        "Built a transformer-based NLP model for sentiment analysis and text classification with 95% accuracy on custom dataset.",
      tags: ["TensorFlow", "NLP", "BERT", "Python"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Computer Vision Pipeline",
      description:
        "Implemented object detection and tracking system using YOLO and OpenCV for real-time video analysis applications.",
      tags: ["OpenCV", "YOLO", "Python", "Docker"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Reinforcement Learning Agent",
      description:
        "Created an RL agent using Q-learning and policy gradients to solve complex decision-making tasks in simulated environments.",
      tags: ["Python", "Gym", "RL", "Neural Networks"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, robotics, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} inView={inView} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  inView,
}: {
  project: {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
  };
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <motion.div
      className="group relative h-full p-8 rounded-2xl bg-card border border-primary/20 overflow-hidden"
      whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
      transition={{ duration: 0.3 }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary group/btn"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary group/btn"
            asChild
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent blur-2xl group-hover:opacity-70 opacity-0 transition-opacity duration-300" />
    </motion.div>
  </motion.div>
);

export default Projects;

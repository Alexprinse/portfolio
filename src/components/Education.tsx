import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electronics and Communication Engineering",
      institution: "Rajiv Gandhi University of Knowledge Technologies",
      location: "Andhra Pradesh, India",
      period: "2022 - 2026",
      grade: "CGPA: 8.1/10",
      highlights: [
        "Specialized in Artificial Intelligence & Robotics",
        "Machine Learning and Deep Learning coursework",
        "Research in Explainable AI",
      ],
    },
    {
      degree: "Higher Secondary Education",
      field: "Science Stream (PCM)",
      institution: "Rajiv Gandhi University of Knowledge Technologies",
      location: "Andhra Pradesh, India",
      period: "2020 - 2022",
      grade: "Percentage: 86%",
      highlights: [
        "Outstanding performance in Mathematics",
        "Good grades in Science subjects",
      ],
    },
    {
      degree: "Secondary School Education",
      field: "General",
      institution: "Narayana E-Techno School",
      location: "Andhra Pradesh, India",
      period: "2020 passout",
      grade: "Percentage: 97%",
      highlights: [
        "Good in Academics",
        "Leadership"
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
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
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} inView={inView} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const EducationCard = ({
  education,
  index,
  inView,
}: {
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    period: string;
    grade: string;
    highlights: string[];
  };
  index: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <motion.div
      className="relative p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{education.degree}</h3>
            </div>
            <p className="text-lg text-primary/90 font-medium mb-2">{education.field}</p>
            <p className="text-foreground/80 mb-1">{education.institution}</p>
            <p className="text-muted-foreground text-sm">{education.location}</p>
          </div>

          <div className="mt-4 md:mt-0 md:text-right space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
              <Calendar className="w-4 h-4" />
              <span>{education.period}</span>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold md:justify-end">
              <Award className="w-4 h-4" />
              <span>{education.grade}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {education.highlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
              className="flex items-start gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-foreground/70">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default Education;

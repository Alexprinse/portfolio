import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 82 },
        { name: "SQL", level: 78 },
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Artificial Intelligence", level: 88 },
        { name: "Deep Learning", level: 85 },
        { name: "NLP", level: 80 },
      ],
    },
    {
      category: "Frameworks & Tools",
      skills: [
        { name: "React", level: 85 },
        { name: "PySpark", level: 75 },
        { name: "PowerBI", level: 80 },
        { name: "ROS", level: 78 },
        { name: "Gazebo", level: 75 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication Skills", level: 88 },
        { name: "Time Management", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />

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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills and proficiencies acquired through projects and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-primary/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    inView={inView}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const SkillBar = ({
  skill,
  inView,
  delay,
}: {
  skill: { name: string; level: number };
  inView: boolean;
  delay: number;
}) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-foreground font-medium">{skill.name}</span>
      <span className="text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-primary rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default Skills;

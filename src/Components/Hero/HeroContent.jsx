import { motion } from "framer-motion";
import Social from "./Social";
const HeroContent = ({ resume }) => {
  const TopSkills = [
    "Python",
    "JavaScript",
    "React",
    "Django",
    "MySQL",
    "Docker",
    "Azure",
    "Java",
  ];
  return (
    <motion.section whileInView="visible" initial="hidden" className="w-full sm:w-[52%]">
      <div className="text-left">
        <motion.div
          variants={{
            hidden: { x: -20, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                bounce: 0.2,
              },
            },
          }}
        >
          <p className="mb-3 inline-flex rounded-full border border-teal-200/30 bg-teal-200/10 px-3 py-1 text-sm font-semibold text-teal-100">
            Full-stack developer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Tarun <span className="text-teal-200">Chawla</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-8 text-slate-300">
            I build practical web apps with React, Python, Django, and cloud
            tools, with a focus on clean interfaces and useful product
            experiences.
          </p>
        </motion.div>
        <div
          id="skills"
          className="my-6 flex max-w-2xl flex-wrap gap-3 text-sm font-semibold"
        >
          {TopSkills.map((skill, index) => (
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.25,
                    delay: 0.08 * index,
                  },
                },
              }}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-slate-100 shadow-sm"
              key={index}
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <div className="mb-5 grid max-w-xl grid-cols-3 gap-3 text-sm text-slate-300">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <span className="block text-xl font-bold text-white">6+</span>
            Projects
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <span className="block text-xl font-bold text-white">30+</span>
            Students helped
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <span className="block text-xl font-bold text-white">React</span>
            Primary UI stack
          </div>
        </div>
        <Social resume={resume} />
      </div>
    </motion.section>
  );
};

export default HeroContent;

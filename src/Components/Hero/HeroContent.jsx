import { motion } from "framer-motion";
import Social from "./Social";
const HeroContent = () => {
  const TopSkills = [
    "Python",
    "JavaScript",
    "Data Structures",
    "Algorithms",
    "Java",
    "Django",
    "DRF",
    "MySQL",
  ];
  return (
    <motion.section whileInView="visible" initial="hidden">
      <div className="flex-1 md:flex-none text-left">
        <motion.div
          variants={{
            hidden: { x: 0, opacity: 0, scale: 0 },
            visible: {
              x: 0,
              opacity: 100,
              scale: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                bounce: 0.2,
              },
            },
          }}
        >
          <h1 className="text-lg sm:text-xl mb-2">Hello, I am</h1>
          <h1 className="text-4xl sm:text-3xl md:text-5xl">Tarun Chawla</h1>
        </motion.div>
        <div
          id="skills"
          className="my-4 text-black font-semibold  flex flex-wrap gap-2 sm:w-2/3"
        >
          {TopSkills.map((skill, index) => (
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0, x: 400 / (index + 1) },
                visible: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.2 * index,
                  },
                },
              }}
              className="p-2 bg-gradient-to-r from-green-300 to-purple-400 rounded-lg"
              key={index}
            >
              {skill}
            </motion.span>
          ))}
        </div>
        <Social />
      </div>
    </motion.section>
  );
};

export default HeroContent;

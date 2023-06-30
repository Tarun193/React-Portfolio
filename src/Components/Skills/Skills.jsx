import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: "./src/assets/images/python.svg",
    },
    {
      name: "JavaScript",
      icon: "./src/assets/images/javascript.svg",
    },
    {
      name: "Java",
      icon: "./src/assets/images/java.svg",
    },
    {
      name: "PHP",
      icon: "./src/assets/images/php.svg",
    },
    {
      name: "React",
      icon: "./src/assets/images/react.svg",
    },
    {
      name: "Redux",
      icon: "./src/assets/images/redux.svg",
    },
    {
      name: "Django",
      icon: "./src/assets/images/django.svg",
    },
    {
      name: "Azure",
      icon: "./src/assets/images/azure.svg",
    },
    {
      name: "MySQL",
      icon: "./src/assets/images/mysql.svg",
    },
    {
      name: "Tailwind",
      icon: "./src/assets/images/tailwindcss.svg",
    },
    {
      name: "Git/Github",
      icon: "./src/assets/images/github.svg",
    },
  ];
  return (
    <section className="max-w-7xl m-auto my-4 p-4">
      <h2 className="text-2xl font-bold text-center">Skills</h2>
      <section className="flex justify-center">
        <motion.div className="my-4 flex w-full m-auto gap-6 flex-wrap">
          {skills.map((skill, index) => (
            <motion.div
              whileInView="visible"
              initial="hidden"
              key={index}
              variants={{
                hidden: { translateX: -20, translateY: -20, opacity: 0 },
                visible: {
                  translateY: 0,
                  translateX: 0,
                  opacity: 1,
                },
              }}
              transition={{ delay: 0.1 * index, duration: 0.2 }}
              className="flex items-center gap-3 px-4 py-2 rounded-lg shadow shadow-teal-100 border border-teal-100 w-full xs:w-[45%] sm:w-[30%] md:w-[22%]"
            >
              <img src={skill.icon} width={50} alt="" />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
};

export default Skills;

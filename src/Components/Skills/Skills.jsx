import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../../firebase";

const Skills = ({ skillRef }) => {
  useEffect(() => {
    const db = getDatabase(app);
    const dataRefrence = ref(db, "/Skills");
    onValue(dataRefrence, (snapshot) => {
      setSkills(snapshot.val());
    });
  }, []);

  const [skills, setSkills] = useState([]);
  return (
    <section ref={skillRef} className="max-w-7xl m-auto my-4 p-4">
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
              transition={{ delay: 0.05 * index, duration: 0.2 }}
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

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
    <section ref={skillRef} className="max-w-7xl m-auto px-4 py-16">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">
          Toolkit
        </p>
        <h2 className="mt-2 text-3xl font-bold">Skills</h2>
      </div>
      <section className="flex justify-center">
        <motion.div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills?.map((skill, index) => (
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
              className="flex min-h-[74px] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 shadow-sm transition hover:border-teal-200/60 hover:bg-teal-200/5"
            >
              <img
                src={skill.icon}
                width={50}
                height={50}
                alt=""
                className="h-12 w-12 object-contain"
              />
              <p className="font-bold text-slate-100">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
};

export default Skills;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import App from "../../../firebase";
import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const Experience = () => {
  const [experience, setExperience] = useState([]);

  // Fetching data from friebase
  useEffect(() => {
    const db = getDatabase(App);
    const dataRefrence = ref(db, "/Experience");
    onValue(dataRefrence, (snapshot) => {
      setExperience(snapshot.val());
    });
  }, []);

  return (
    <section className="max-w-7xl m-auto my-4 p-4">
      <h1 className="text-2xl font-bold text-center">Work Experience</h1>
      <section className="mb-4 mt-8">
        {experience.map((exp, index) => (
          <article className="flex py-4 flex-col sm:flex-row gap-4" key={index}>
            <div className="space-y-2  flex-1">
              <h1 className="text-2xl font-bold">
                {exp?.position} at{" "}
                <a
                  href={exp?.companyLink}
                  target="_blank"
                  className="text-teal-200 hover:cursor-pointer hover:text-teal-100"
                >
                  {exp?.company}
                </a>
              </h1>
              <div className="text-lg font-semibold text-teal-200">
                <span>{exp?.startDate}</span> &#8208;{" "}
                <span>{exp?.endDate}</span>
              </div>
              <div className="text-black gap-2 flex flex-row flex-wrap text-sm sm:text-md pt-2 font-semibold">
                {exp?.skills?.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-2 text-md bg-gradient-to-r from-green-300 to-purple-400 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 * index }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 py-3 pl-2 sm:pl-8 border-t-teal-50 border-t sm:border-t-0 sm:border-teal-50 sm:border-l">
              <ul className="list-disc ml-2 space-y-2 font-medium text-sm sm:text-md md:text-lg tracking-wide">
                {exp?.highlights?.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Experience;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import App from "../../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { getExternalLink, handleExternalLink } from "../../utils/externalLinks";

const Experience = ({ expRef }) => {
  const [experience, setExperience] = useState([]);

  // Fetching data from friebase
  useEffect(() => {
    const db = getDatabase(App);
    const dataRefrence = ref(db, "/Experience");
    onValue(dataRefrence, (snapshot) => {
      const sortedByOrderExperience = snapshot
        .val()
        .sort((e1, e2) => e1.order - e2.order);
      setExperience(sortedByOrderExperience);
    });
  }, []);

  return (
    <section ref={expRef} className="max-w-7xl m-auto px-4 py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">
          Background
        </p>
        <h2 className="mt-2 text-3xl font-bold">Work Experience</h2>
      </div>
      <section className="space-y-5">
        {experience?.map((exp, index) => {
          const companyLink = getExternalLink(exp?.companyLink);

          return (
            <article
              className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[0.85fr_1.15fr] md:p-6"
              key={index}
            >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold leading-tight">
                {exp?.position} at{" "}
                {companyLink ? (
                  <a
                    href={companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) =>
                      handleExternalLink(event, exp?.companyLink)
                    }
                    className="text-teal-200 hover:cursor-pointer hover:text-teal-100"
                  >
                    {exp?.company}
                  </a>
                ) : (
                  <span className="text-teal-200">{exp?.company}</span>
                )}
              </h3>
              <div className="text-lg font-semibold text-teal-200">
                <span>{exp?.startDate}</span> &#8208;{" "}
                <span>{exp?.endDate}</span>
              </div>
              <div className="flex flex-row flex-wrap gap-2 pt-1 text-sm font-semibold">
                {exp?.skills?.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-slate-100"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.06 * index }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <ul className="ml-4 list-disc space-y-3 text-base leading-8 text-slate-200">
                {exp?.highlights?.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Experience;

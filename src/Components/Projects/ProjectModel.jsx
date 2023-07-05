import { AnimatePresence, motion } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { BiLinkAlt } from "react-icons/bi";

const ProjectModel = ({ project, modelOpen, setModelOpen, index }) => {
  return (
    <AnimatePresence>
      {!(modelOpen === null || modelOpen !== index) && (
        <motion.section
          onClick={() => setModelOpen(null)}
          className="bg-black/50 fixed top-0 left-0 bottom-0 right-0 grid place-content-center"
        >
          <motion.section
            layout
            initial={{
              scale: 0,
              y: 20,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              y: 20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              type: "tween",
            }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col xl:flex-row  gap-12 rounded-xl relative no-scrollbar z-50 w-[95%] sm:w-5/6 m-auto p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-600 max-h-[500px] sm:max-h-[600px] overflow-y-scroll"
          >
            <button type="buttton" onClick={() => setModelOpen(null)}>
              <MdCancel size={26} className="absolute top-0 right-0" />
            </button>
            <div className="flex-1 min-w-[250px]">
              <img
                src={project?.image}
                width={1900}
                height={900}
                alt="project 1 image"
              />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="font-bold text-2xl text-teal-200">
                {project?.title}
              </h3>
              <p className="text-lg">{project?.description}</p>
              <hr className="w-full h-[0.1rem] bg-slate-50" />
              <ul className="list-disc ml-4 space-y-2">
                {project?.Highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              <div className="text-black my-2 flex gap-2 flex-wrap font-semibold">
                {project?.tech.map((technology, index) => (
                  <motion.div
                    key={index}
                    className="p-2 text-md bg-gradient-to-r from-green-300 to-purple-400 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
                  >
                    {technology}
                  </motion.div>
                ))}
              </div>
              <div className="my-4">
                <h3 className="text-xl font-semibold mb-2">Links</h3>
                <div className="flex justify-start gap-4 w-full pb-4">
                  {!project?.links?.GitHub ? null : (
                    <motion.a
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
                      href={project?.links?.GitHub}
                      target="_blank"
                    >
                      <span>
                        <VscGithub size={35} />
                      </span>
                    </motion.a>
                  )}
                  {!project?.links?.Live ? null : (
                    <motion.a
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
                      href={project?.links?.Live}
                      target="_blank"
                    >
                      <span>
                        <BiLinkAlt size={35} />
                      </span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ProjectModel;

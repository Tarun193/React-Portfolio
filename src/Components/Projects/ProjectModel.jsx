import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { BiLinkAlt } from "react-icons/bi";
import { getProjectLink, handleExternalProjectLink } from "./projectLinks";

const ProjectModel = ({ project, modelOpen, setModelOpen, index }) => {
  const isOpen = modelOpen === index;
  const liveLink = getProjectLink(project?.links?.Live);
  const codeLink = getProjectLink(project?.links?.GitHub);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeModel = () => {
    setModelOpen(null);
    document.body.style.overflow = "auto";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          onClick={closeModel}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-4"
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
            className="relative z-50 my-3 flex h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-black/50 sm:my-6 sm:h-[calc(100dvh-3rem)]"
          >
            <div className="z-20 flex flex-none justify-end border-b border-white/10 bg-slate-950/95 p-3">
              <button
                type="button"
                aria-label="Close project details"
                className="rounded-full bg-white/10 p-2 text-slate-200 transition hover:bg-teal-200 hover:text-slate-950"
                onClick={closeModel}
              >
                <MdCancel size={26} />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto xl:flex-row">
              <div className="min-h-[180px] flex-none overflow-hidden bg-slate-900 sm:min-h-[260px] xl:flex-1 xl:rounded-bl-lg">
                <img
                  src={project?.image}
                  width={1900}
                  height={900}
                  alt="project 1 image"
                  className="h-full max-h-[42vh] w-full object-cover xl:max-h-none"
                />
              </div>
              <div className="flex-1 space-y-4 p-4 sm:p-6 xl:pr-10">
                <h3 className="font-bold text-3xl text-teal-100">
                  {project?.title}
                </h3>
                <p className="text-lg leading-8 text-slate-300">
                  {project?.description}
                </p>
                <hr className="w-full border-white/10" />
                <ul className="ml-4 list-disc space-y-2 leading-7 text-slate-200">
                  {project?.Highlights?.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <div className="my-2 flex flex-wrap gap-2 font-semibold">
                  {project?.tech?.map((technology, index) => (
                    <motion.div
                      key={index}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-100"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
                    >
                      {technology}
                    </motion.div>
                  ))}
                </div>
                <div className="my-4">
                  <h3 className="mb-3 text-xl font-semibold">Links</h3>
                  <div className="flex w-full flex-col gap-3 pb-4 sm:flex-row">
                    {!codeLink ? null : (
                      <motion.a
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project?.title} code repository`}
                        onClick={(event) =>
                          handleExternalProjectLink(event, project?.links?.GitHub)
                        }
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 font-bold text-slate-100 transition hover:border-teal-200 hover:text-teal-100 sm:w-auto"
                      >
                        <VscGithub size={24} />
                        Code
                      </motion.a>
                    )}
                    {!liveLink ? null : (
                      <motion.a
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project?.title} live site`}
                        onClick={(event) =>
                          handleExternalProjectLink(event, project?.links?.Live)
                        }
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 font-bold text-slate-100 transition hover:border-teal-200 hover:text-teal-100 sm:w-auto"
                      >
                        <BiLinkAlt size={25} />
                        Live Site
                      </motion.a>
                    )}
                  </div>
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

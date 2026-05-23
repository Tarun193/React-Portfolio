import { motion, spring } from "framer-motion";
import { BiLinkAlt } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { getProjectLink, handleExternalProjectLink } from "./projectLinks";

const ProjectCard = ({ project, setModelOpen, index }) => {
  const liveLink = getProjectLink(project?.links?.Live);
  const codeLink = getProjectLink(project?.links?.GitHub);

  return (
    <motion.article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-sm transition hover:-translate-y-1 hover:border-teal-200/70 hover:shadow-lg hover:shadow-teal-950/30">
      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900">
        <img
          src={project?.image}
          width={1900}
          height={900}
          alt="project image"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h3 className="font-bold text-2xl leading-tight text-teal-100">
            {project?.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-300">
            {project?.description}
          </p>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <motion.button
            whileHover={{
              backgroundColor: "rgb(153,246,228)",
              color: "#020617",
              scale: 1.03,
              transition: {
                duration: 0.25,
                type: spring,
              },
            }}
            whileTap={{
              scale: 0.97,
              transition: {
                duration: 0.2,
                type: spring,
              },
            }}
            className="rounded-md border border-teal-200/70 px-3 py-2 font-bold text-teal-100"
            onClick={() => {
              setModelOpen(index);
            }}
          >
            Details
          </motion.button>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project?.title} live site`}
              onClick={(event) =>
                handleExternalProjectLink(event, project?.links?.Live)
              }
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-3 py-2 font-bold text-slate-200 transition hover:border-teal-200 hover:text-teal-100"
            >
              <BiLinkAlt />
              Live
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project?.title} code repository`}
              onClick={(event) =>
                handleExternalProjectLink(event, project?.links?.GitHub)
              }
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-3 py-2 font-bold text-slate-200 transition hover:border-teal-200 hover:text-teal-100"
            >
              <VscGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

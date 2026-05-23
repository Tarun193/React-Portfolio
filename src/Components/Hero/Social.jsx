import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { getExternalLink, handleExternalLink } from "../../utils/externalLinks";

const Social = ({ resume }) => {
  const resumeLink = getExternalLink(resume);
  const githubLink = "https://github.com/Tarun193";
  const linkedInLink = "https://www.linkedin.com/in/tarun-chawla-4986291ab/";

  return (
    <motion.div
      id="Social"
      className="my-6 flex flex-wrap gap-3 items-center"
      whileInView="visible"
      initial="hidden"
      variants={{
        hidden: { x: -14, opacity: 0 },
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
      <a
        href="#projects"
        className="inline-flex items-center gap-2 rounded-md bg-teal-200 px-4 py-3 font-bold text-slate-950 transition hover:bg-teal-100"
      >
        View projects
        <FiArrowDown />
      </a>
      <a
        className="inline-flex items-center gap-2 rounded-md border border-teal-200/70 px-4 py-3 font-bold text-teal-100 transition hover:bg-teal-200 hover:text-slate-950"
        target="_blank"
        rel="noopener noreferrer"
        href={resumeLink}
        onClick={(event) => handleExternalLink(event, resume)}
      >
        <FiDownload />
        Resume
      </a>
      <div className="flex gap-3">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          onClick={(event) => handleExternalLink(event, githubLink)}
          className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/5 text-white transition hover:border-teal-200 hover:text-teal-100"
        >
          <VscGithub size={26} />
        </a>
        <a
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          onClick={(event) => handleExternalLink(event, linkedInLink)}
          className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/5 text-white transition hover:border-teal-200 hover:text-teal-100"
        >
          <BsLinkedin size={24} />
        </a>
      </div>
    </motion.div>
  );
};

export default Social;

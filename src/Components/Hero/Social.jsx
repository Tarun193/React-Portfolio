import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
const Social = () => {
  return (
    <motion.div
      id="Social"
      className="my-4 flex gap-4 items-center"
      whileInView="visible"
      initial="hidden"
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
      <div className="flex gap-4">
        <a href="https://github.com/Tarun193" target="_blank">
          <span>
            <VscGithub size={35} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/tarun-chawla-4986291ab/"
          target="_blank"
        >
          <span>
            <BsLinkedin size={35} />
          </span>
        </a>
      </div>
      <div>
        <button
          type="button"
          className="p-2 text-teal-200 border
          border-teal-200"
        >
          <a download={true} href="./src/assets/resume.pdf">
            Download Resume
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default Social;

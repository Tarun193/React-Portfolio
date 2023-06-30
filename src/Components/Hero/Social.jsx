import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
const Social = () => {
  return (
    <motion.div
      id="Social"
      className="my-4 flex gap-4"
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
    </motion.div>
  );
};

export default Social;

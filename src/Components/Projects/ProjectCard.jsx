import { motion, spring } from "framer-motion";
const ProjectCard = ({ project, setModelOpen, index }) => {
  return (
    <motion.article className="space-y-3 border border-teal-300 p-3 rounded-xl shadow-sm shadow-teal-50 hover:cursor-pointer">
      <div className="w-full overflow-hidden">
        <img
          src={project?.image}
          width={1900}
          height={900}
          alt="project image"
          className="w-full"
        />
      </div>
      <h3 className="font-bold text-2xl text-teal-200">{project?.title}</h3>
      <p className="text-lg min-h-[9rem]">{project?.description}</p>
      <motion.button
        whileHover={{
          backgroundColor: "rgb(153,246,228)",
          color: "#000",
          scale: 1.05,
          transition: {
            duration: 0.4,
            type: spring,
          },
        }}
        whileTap={{
          backgroundColor: "rgb(153,246,228)",
          color: "#000",
          scale: 0.9,
          transition: {
            duration: 0.2,
            type: spring,
          },
        }}
        className="p-2 text-teal-200 border
          border-teal-200"
        onClick={() => {
          setModelOpen(index);
          // Stoppind scrolling when modal is open
          document.body.style.overflow = "hidden";
        }}
      >
        More Info
      </motion.button>
    </motion.article>
  );
};

export default ProjectCard;

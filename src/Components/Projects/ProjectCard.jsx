import { motion, spring } from "framer-motion";
const ProjectCard = ({ project, setModelOpen, index }) => {
  return (
    <article className="space-y-3 border border-teal-300 p-3 rounded-xl shadow-sm shadow-teal-50 hover:cursor-pointer">
      <div>
        <img src={project?.image} alt="project image" />
      </div>
      <h3 className="font-bold text-2xl text-teal-200">{project?.title}</h3>
      <p className="text-lg min-h-[9rem]">{project?.description}</p>
      <motion.button
        whileHover={{
          backgroundColor: "rgb(153,246,228)",
          color: "black",
          scale: 1.05,
          transition: {
            duration: 0.4,
            type: spring,
          },
        }}
        className="p-2 text-teal-200 border
          border-teal-200"
        onClick={() => setModelOpen(index)}
      >
        More Info
      </motion.button>
    </article>
  );
};

export default ProjectCard;

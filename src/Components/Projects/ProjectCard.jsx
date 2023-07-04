import { motion } from "framer-motion";
const ProjectCard = ({ project, setModelOpen, index }) => {
  return (
    <motion.article
      className="w-full sm:w-[30%] space-y-3 border border-teal-300 p-2 rounded-xl shadow-md shadow-teal-100 hover:cursor-pointer"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={() => setModelOpen(index)}
    >
      <div>
        <img src={project?.image} alt="project 1 image" />
      </div>
      <h3 className="font-bold text-2xl text-teal-200">{project?.title}</h3>
      <p className="text-lg">{project?.description}</p>
      {/* <button
        className="p-2 text-teal-200 border
          border-teal-200"
      >
        More Info
      </button> */}
    </motion.article>
  );
};

export default ProjectCard;

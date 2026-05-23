import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModel from "./ProjectModel";
import { getDatabase, ref, onValue } from "firebase/database";
import App from "../../../firebase";
const Projects = ({ projectRef }) => {
  const [modelOpen, setModelOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const db = getDatabase(App);
    const dataRefrence = ref(db, "/Projects");
    onValue(dataRefrence, (snapshot) => {
      const sortedByOrderProjects = snapshot
        .val()
        .sort((p1, p2) => p1.order - p2.order);
      setProjects(sortedByOrderProjects);
    });
  }, []);
  return (
    <section
      id="projects"
      ref={projectRef}
      className="max-w-7xl m-auto px-4 py-16"
    >
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">
          Selected work
        </p>
        <h2 className="mt-2 text-3xl font-bold">Projects</h2>
        <p className="mt-3 text-slate-300">
          A mix of full-stack apps, learning tools, and product experiments.
        </p>
      </div>
      <section className="m-auto grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project, index) => (
          <div key={index} className="min-w-0">
            <ProjectCard
              index={index}
              setModelOpen={setModelOpen}
              project={project}
            />
            <ProjectModel
              modelOpen={modelOpen}
              setModelOpen={setModelOpen}
              index={index}
              project={project}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;

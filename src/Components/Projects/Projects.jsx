import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModel from "./ProjectModel";
import { getDatabase, ref, onValue } from "firebase/database";
import App from "../../../firebase";
const Projects = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const db = getDatabase(App);
    const dataRefrence = ref(db, "/Projects");
    const listner = onValue(dataRefrence, (snapshot) => {
      setProjects(snapshot.val());
    });
  }, []);
  console.log(projects);
  return (
    <section className="max-w-7xl m-auto my-4 p-4">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <section className="flex my-4">
        {projects.map((project, index) => (
          <div key={index}>
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

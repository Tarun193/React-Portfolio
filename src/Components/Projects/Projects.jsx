import { VscGithub } from "react-icons/vsc";
import { BiLinkAlt } from "react-icons/bi";

const Projects = () => {
  return (
    <section className="max-w-7xl m-auto my-4 p-4">
      <h2 className="text-2xl font-bold text-center">Projects</h2>
      <section className="flex my-4">
        <article className="w-full sm:w-[30%] space-y-3 border border-teal-300 p-2 rounded-xl shadow-md shadow-teal-100">
          <div>
            <img
              src="./src/assets/images/theceniphilehub.png"
              alt="project 1 image"
            />
          </div>
          <h3 className="font-bold text-2xl text-teal-200">
            The Cinephile Hub
          </h3>
          <p className="text-lg">
            A movie search app made using React and Redux. It uses the TMDB API,
            to display the movies and TV shows details.
          </p>
          <div className="text-black my-2 flex gap-2 flex-wrap font-semibold">
            <div className="p-2 text-md bg-gradient-to-r from-green-300 to-purple-400 rounded-lg">
              react
            </div>
            <div className="p-2 text-md bg-gradient-to-r from-green-300 to-purple-400 rounded-lg">
              JavaScript
            </div>
            <div className="p-2 text-md bg-gradient-to-r from-green-300 to-purple-400 rounded-lg">
              Redux
            </div>
            <div className="p-2 text-md bg-gradient-to-r from-green-300 to-purple-400 rounded-lg">
              Tailwind CSS
            </div>
          </div>
          <div className="flex my-4 justify-start gap-4 w-full ">
            <a
              href="https://github.com/Tarun193/The-Cinephile-Hub"
              target="_blank"
            >
              <span>
                <VscGithub size={35} />
              </span>
            </a>
            <a href="https://thecinephilehub.netlify.app/" target="_blank">
              <span>
                <BiLinkAlt size={35} />
              </span>
            </a>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Projects;

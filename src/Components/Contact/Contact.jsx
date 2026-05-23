import { motion, spring } from "framer-motion";
import { handleExternalLink } from "../../utils/externalLinks";

const Contact = ({ contactRef }) => {
  const githubLink = "https://github.com/Tarun193/";
  const linkedInLink = "https://www.linkedin.com/in/tarun-chawla-4986291ab/";
  const emailLink = "mailto:tarunchawla.7463@gmail.com";

  return (
    <section
      ref={contactRef}
      id="contact"
      className="max-w-7xl m-auto px-4 py-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-bold">Let&apos;s build something useful.</h2>
        <p className="mt-3 text-slate-300">
          Open to developer roles, collaboration, and project conversations.
        </p>
      </div>
      <motion.section
        initial={{ scale: 0, x: 20 }}
        whileInView={{
          scale: 1,
          x: 0,
          transition: {
            duration: 0.3,
            type: spring,
            bounce: 0.3,
          },
        }}
        className="mt-8 flex flex-wrap gap-4 justify-center"
      >
        <motion.a
          whileHover={{
            backgroundColor: "rgb(153,246,228)",
            color: "#000",
            scale: 1.1,
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
          className="rounded-md border border-teal-200/70 px-4 py-3 font-bold text-teal-100"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => handleExternalLink(event, githubLink)}
        >
          GitHub
        </motion.a>
        <motion.a
          whileHover={{
            backgroundColor: "rgb(153,246,228)",
            color: "#000",
            scale: 1.1,
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
          className="rounded-md border border-teal-200/70 px-4 py-3 font-bold text-teal-100"
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => handleExternalLink(event, linkedInLink)}
        >
          LinkedIn
        </motion.a>

        <motion.a
          whileHover={{
            backgroundColor: "rgb(153,246,228)",
            color: "#000",
            scale: 1.1,
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
          className="rounded-md border border-teal-200/70 px-4 py-3 font-bold text-teal-100"
          href={emailLink}
          onClick={(event) => handleExternalLink(event, emailLink)}
        >
          Email
        </motion.a>
      </motion.section>
    </section>
  );
};

export default Contact;

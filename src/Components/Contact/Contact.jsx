import { motion, spring } from "framer-motion";

const Contact = ({ contactRef }) => {
  return (
    <section
      ref={contactRef}
      id="contact"
      className="max-w-7xl m-auto mt-4 mb-8 p-4"
    >
      <h1 className="text-xl sm:text-2xl font-bold text-center">
        Don't be a stranger! 👋
      </h1>
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
        className="mt-8 flex gap-4 justify-center"
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
          className="p-2 text-teal-200 border
          border-teal-200"
          href="https://github.com/Tarun193/"
          target="_blank"
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
          className="p-2 text-teal-200 border
          border-teal-200"
          href="https://www.linkedin.com/in/tarun-chawla-hex7463/"
          target="_blank"
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
          className="p-2 text-teal-200 border
          border-teal-200"
          href="mailto:tarunchawla.7463@gmail.com"
        >
          Email
        </motion.a>
      </motion.section>
    </section>
  );
};

export default Contact;

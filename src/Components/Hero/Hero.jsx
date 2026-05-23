import Lottie from "lottie-react";
import ProgrammerAnimation from "../../assets/Animations/Programmer.json";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
const Hero = ({ resume }) => {
  return (
    <div className="border-b border-white/10">
      <motion.section
        id="Hero"
        className="max-w-7xl min-h-[calc(100vh-96px)] m-auto flex flex-col text-left sm:flex-row items-center justify-between px-4 py-10 sm:py-16 gap-10 overflow-hidden"
        whileInView="visible"
        initial="hidden"
      >
        <HeroContent resume={resume} />
        <motion.div
          variants={{
            hidden: { x: 500, opacity: 0 },
            visible: { x: 0, opacity: 100 },
          }}
          transition={{ duration: 0.5, delay: 0 }}
          className="w-full sm:w-[46%] max-w-[520px] overflow-hidden"
        >
          <Lottie animationData={ProgrammerAnimation}></Lottie>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;

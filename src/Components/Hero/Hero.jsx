import Lottie from "lottie-react";
import ProgrammerAnimation from "../../assets/Animations/Programmer.json";
import { motion, useAnimationControls, useInView } from "framer-motion";
import HeroContent from "./HeroContent";
const Hero = ({ resume }) => {
  return (
    <div>
      <motion.section
        id="Hero"
        className="max-w-7xl min-h-[85vh] m-auto flex flex-col-reverse text-center sm:text-left sm:flex-row items-center justify-between my-4 p-4 gap-8 sm:gap-0 overflow-hidden"
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
          className="overflow-hidden"
        >
          <Lottie animationData={ProgrammerAnimation}></Lottie>
        </motion.div>
      </motion.section>
      <hr className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 h-1 max-w-7xl mx-auto rounded-r-xl opacity-20 my-4" />
    </div>
  );
};

export default Hero;

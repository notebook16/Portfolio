import React from "react";
import Tilt from "react-parallax-tilt";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { webTechnologies, mlTechnologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
      {/* Web Development Section */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card sm:w-full md:w-1/2"
      >
        

        <h2 className={`${styles.heroSubText} text-center text-[#ffff]`}>web Development</h2>

       
         

        <Tilt
          options={{
            max: 15,
            scale: 1,
            speed: 100,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[300px] flex flex-wrap justify-evenly items-center"
        >
          
          {webTechnologies.map((technology) => (
            <div className="w-24 h-24" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </Tilt>
      </motion.div>

      {/* Machine Learning Section */}
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 0.75)}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card sm:w-full md:w-1/2"
      >
         <h2 className={`${styles.heroSubText} text-center text-[#ffff]`}>Machine Learning</h2>
        <Tilt
          options={{
            max: 15,
            scale: 1,
            speed: 100,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[300px] flex flex-wrap justify-evenly items-center"
        >
          {mlTechnologies.map((technology) => (
            <div className="w-24 h-24" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </Tilt>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

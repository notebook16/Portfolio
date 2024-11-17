import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      key={name} // Ensure each card is uniquely identified
      variants={fadeIn("up", "spring", index * 0.5, 0.75)} // Add motion variants
      initial={{ opacity: 0, y: 50 }} // Define initial animation state
      animate={{ opacity: 1, y: 0 }} // Define animation on state change
      exit={{ opacity: 0, y: -50 }} // Define exit animation
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to showing all projects

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  console.log(filteredProjects);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px]
      max-w-31 leading-[30px]"
        >
          I have developed full-stack web applications using the MERN stack,
          creating scalable backends and seamless user interfaces. In machine
          learning, I have built models for real-world problems, focusing on
          data preprocessing and model evaluation with libraries like
          scikit-learn and TensorFlow. For frontend development, I specialize in
          creating interactive, responsive UIs using React, ensuring smooth
          performance and a great user experience across devices.
        </motion.p>
      </div>

      <div className="navi">
        {/* Navigation buttons for Web and ML sections */}
        <div className="flex space-x-10 mb-8 mt-10 sm:mt-10 justify-center">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`border-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${
              selectedCategory === "all"
                ? "bg-purple-600 text-white"
                : "border-white hover:bg-purple-600 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("web-development")}
            className={`border-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${
              selectedCategory === "web-development"
                ? "bg-purple-600 text-white"
                : "border-white hover:bg-purple-600 hover:text-white"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setSelectedCategory("machine-learning")}
            className={`border-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${
              selectedCategory === "machine-learning"
                ? "bg-purple-600 text-white"
                : "border-white hover:bg-purple-600 hover:text-white"
            }`}
          >
            ML
          </button>
        </div>

        {/* Project cards filtered by category */}
        <div className="sm:mt-10 flex flex-wrap gap-7">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

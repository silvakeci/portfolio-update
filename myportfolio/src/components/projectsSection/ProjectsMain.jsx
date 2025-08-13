import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Jogos Santacasa",
    align: "right",
    image: "../../images/web-1.png",
    link: "https://www.jogossantacasa.pt/",
  },
  {
    name: "Placard",
    align: "left",
    image: "../../images/web2.png",
    link: "https://placard.jogossantacasa.pt/PlacardWeb/",
  },
  {
    name: "Jogos Santacasa App",
    align: "right",
    image: "../../images/web3.png",
    link: "https://apps.apple.com/pt/app/jogos-santa-casa/id1053989140",
  },
  {
    name: "Bank of Luck",
    align: "left",
    image: "../../images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
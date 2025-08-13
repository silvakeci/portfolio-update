import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
   {
    job: "Full-Stack Developer (Internship)",
    company: "Elite Academy",
    date: "04/2021 -06/2021",
    responsibilities: [
      "C# programming language with the .NET Framework.",
      "MySQL Database.",
      "Git version control.",
      "React.js for developing interactive front-end applications."
    ],
  },
  {
    job: "Back-End Developer",
    company: "Intesa Sanapolo Bank Albania",
    date: "11/2021 - 02/2022",
    responsibilities: [
      "Developed Spring Boot backend services in Java.",
      "Managed MySQL databases.",
      "Built React.js front-end apps.",
      "Used Git for version control.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Jogos Santacasa",
    date: "02/2022 - Present",
    responsibilities: [
      "Developed React.js & React Native apps.",
      "Wrote JavaScript/TypeScript code.",
      "Styled UIs with Tailwind, MUI, HTML, CSS.",
      "Handled state (Redux/Context) & API calls (Axios).",
    ],
  },
 
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
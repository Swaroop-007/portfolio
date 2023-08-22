import { FaCss3, FaHtml5, FaNodeJs, FaReact,FaGithub,FaLinux } from "react-icons/fa";
import {SiCsharp,
    SiMicrosoftazure,SiDynamics365,SiDocker,SiDotnet,SiExpress,SiJavascript,SiMongoose,SiPython,
    SiMicrosoftsqlserver
} from "react-icons/si"
const Skills = () => {
  const skills = [
    { icon: <SiMicrosoftazure />, name: "Azure" },
    { icon: <FaCss3 />, name: "Css" },
    { icon: <SiCsharp />, name: "C#" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiDynamics365 />, name: "Dynamics 365" },
    { icon: <SiDotnet/>, name: ".Net" },
    { icon: <SiExpress />, name: "Express Js" },
    { icon: <FaGithub />, name: "Git" },
    { icon: <FaHtml5 />, name: "Html" },
    { icon: <SiJavascript />, name: "Javascript" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiMongoose />, name: "Mongoose" },
    { icon: <FaNodeJs />, name: "Node Js" },
    { icon: <SiPython />, name: "Python" },
    { icon: <FaReact />, name: "React Js" },
    { icon: <SiMicrosoftsqlserver />, name: "MS Sql" },
  ];

  return (
    <section
      name="skills"
      className="py-10  h-screen bg-[#ede8e871]  text-black-100 text-center"
    >
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3 className="pt-16 text-black-300 border-b-4 border-gray-600">Skills</h3>
      </div>
      <ul className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {skills?.map((skill, i) => (
          <li key={i}>
            <div className="text-5xl flex justify-center">{skill.icon}</div>
            <div className="text-2xl">{skill.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
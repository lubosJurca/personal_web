import Image from "next/image";

// logos
import angularLogo from "@/public/angularLogo.png";
import reactLogo from "@/public/logos--react.png";
import typescriptLogo from "@/public/logos--typescript-icon.png";
import javascriptLogo from "@/public/skill-icons--javascript.png";
import expressLogo from "@/public/expressLogo.png";
import tailwindLogo from "@/public/tailwindLogo.png";
import restapiLogo from "@/public/restapiLogo.png";
import postgreLogo from "@/public/postgresql-icon.svg";
import dotnetLogo from "@/public/dotnet-logo.png"

const TechStack = () => {
  const techstack = [
    {
      name: "Angular",
      icon: angularLogo,
    },
    {
      name: "React",
      icon: reactLogo,
    },
    {
      name: ".NET",
      icon: dotnetLogo,
    },
        {
      name: "Rest API",
      icon: restapiLogo,
    },
    {
      name: "Typescript",
      icon: typescriptLogo,
    },
    {
      name: "JavaScript",
      icon: javascriptLogo,
    },
    {
      name: "Express.js",
      icon: expressLogo,
    },
    {
      name: "Tailwind CSS",
      icon: tailwindLogo,
    },
    {
      name: "PostgreSQL",
      icon: postgreLogo,
    }
  ];

  return (
    <section className="flex flex-col   ">
      <h2 className="text-2xl text-center font-semibold mb-4">TechStack</h2>
      <div className="flex flex-wrap items-center justify-center">
        {techstack.map((tech) => (
          <div
            key={tech.name}
            className=" p-4 rounded-md flex flex-col items-center"
          >
            <Image alt={tech.name} src={tech.icon} className="w-16 h-16 mb-2" />
            <figcaption>{tech.name}</figcaption>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechStack;

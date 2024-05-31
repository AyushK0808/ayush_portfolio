import Image from "next/image";
import { Navbar } from "./components/ui/navbar";
import { HeroHighlight, Highlight } from "./components/ui/hero";
import { TypewriterEffectSmooth } from "./components/ui/typewriter";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import SectionHeading from "./components/ui/heading";
import { LayoutGrid } from "./components/ui/layout-grid";

const navItems = [
  { name: "Home", link: "/",  }, 
  { name: "About", link: "/about",  },
  { name: "Services", link: "/services",  },
  { name: "Contact", link: "/contact",  },
];

const typewriterWords = [
  { text: "Machine Learning & Web Development" },
];

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "Framer", "Bootstrap", "Tailwind CSS", "ReactJS"],
  backend: ["NextJS", "MongoDB", "mySQL", "Postgres", "Django", "Express JS", "Flask", "Node JS", "Go", "Rust", "Docker", "Postman API", "Prisma"],
  machineLearning: ["TensorFlow", "Keras", "scikitlearn", "OpenCV", "numpy", "pandas", "pytorch"],
  programmingLanguages: ["C", "C++", "Java", "Python", "R"],
  others: ["Canva", "Figma", "Flutter", "React Native", "Arduino", "Linux"],
};

const skillColors = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Framer: "#0055FF",
  Bootstrap: "#7952B3",
  "Tailwind CSS": "#38B2AC",
  ReactJS: "#61DAFB",
  NextJS: "#000000",
  MongoDB: "#47A248",
  mySQL: "#4479A1",
  Postgres: "#336791",
  Django: "#092E20",
  "Express JS": "#000000",
  Flask: "#000000",
  "Node JS": "#339933",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Docker: "#2496ED",
  "Postman API": "#FF6C37",
  Prisma: "#0C344B",
  TensorFlow: "#FF6F00",
  Keras: "#D00000",
  scikitlearn: "#F7931E",
  OpenCV: "#5C3EE8",
  numpy: "#013243",
  pandas: "#150458",
  pytorch: "#EE4C2C",
  C: "#A8B9CC",
  "C++": "#00599C",
  Java: "#007396",
  Python: "#3776AB",
  R: "#276DC3",
  Canva: "#00C4CC",
  Figma: "#F24E1E",
  Flutter: "#02569B",
  "React Native": "#61DAFB",
  Arduino: "#00979D",
  Linux: "#FCC624",
};

const createSkillButtons = (skillsArray) => {
  return skillsArray.map((skill) => {
    const backgroundColor = skillColors[skill] || "#3182ce"; // Default color if not found in mapping
    return (
      <span
        key={skill}
        className="skill-button"
        style={{ backgroundColor }}
      >
        {skill}
      </span>
    );
  });
};

const items = [
  
  {
    title: "Backend Development",
    description: createSkillButtons(skills.backend),
    header: "",
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Frontend Development",
    description: createSkillButtons(skills.frontend),
    header: " ",
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Machine Learning",
    description: createSkillButtons(skills.machineLearning),
    header: "",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Programming Languages",
    description: createSkillButtons(skills.programmingLanguages),
    header: "",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Others",
    description: createSkillButtons(skills.others),
    header: "",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

const cards = [
  {
    id: 1,
    content: <p>This is the content for card 1.</p>,
    className: "bg-red-500",
    thumbnail: "/white.png",
  },
  {
    id: 2,
    content: <p>This is the content for card 2.</p>,
    className: "bg-green-500",
    thumbnail: "/white.png",
  },
  {
    id: 3,
    content: <p>This is the content for card 3.</p>,
    className: "bg-blue-500",
    thumbnail: "/white.png",
  },
  // Add more cards as needed
];

export default function Home() {
  return (
    <div>
      <Navbar navItems={navItems} className="" />
      <HeroHighlight containerClassName="custom-hero-container" className="custom-hero-class">
        <h1 className="text-6xl font-bold text-center text-black dark:text-white">
          Hello There 
        </h1>
        <br/>
        <p className="text-2xl text-center text-gray-700 dark:text-gray-300">
          I am <Highlight>Ayush Kumar</Highlight> 
        </p>
        <TypewriterEffectSmooth
          words={typewriterWords}
          className="mb-8 bg-transparent text-center"
          cursorClassName="bg-blue-600"
        />
      </HeroHighlight>

      <SectionHeading title="My Skills" />
      <BentoGrid className='max-w-5xl mx-auto md:auto-rows-[25rem]'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
      <LayoutGrid cards={cards} />
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";

type CardContent = {
  title: string;
  description: string;
  link: string;
  link2:string;
  imgsrc: string;
  buttonText: string;
  buttonText2: string;
};

const cardContents: CardContent[] = [
  {
    title: "ISDC 2024 Winning Team Project",
    description: "Assisted in making the software for the drone team that won ISDC 2024. Worked on the object detection via images taken by the onboard the drone using YOLO object detection model. Also worked on a path planning algorithm(A* search algorithm) which gave a path which avoided allobstacles in the image while at the same time passing all the waypoints",
    imgsrc:"/obj_dec.png",
    link: "",
    buttonText: "",
    link2: "",
    buttonText2: "",
  },
  {
    title: "VITMUN 2025 Website",
    description: "Designed, developed, and deployed the VITMUN 2025 website, serving 1,000+ users. Built with Next.js for a seamless and responsive experience, featuring event details, delegate registration, and real-time updates. Containerized with Docker and deployed on a VM for scalability and reliability.",
    imgsrc: "/vitmun.png",
    link: "https://vitmun-25.vercel.app/",
    buttonText: "Explore →",
    link2: "",
    buttonText2: "",
  },
  {
    title: "Component Service Predictor",
    description: "Developed an LSTM model with 82% accuracy for predicting equipment failures, enabling proactive maintenance and reducing downtime. Built a ReactJS web interface for seamless interaction, integrated automated reports and service reminders to streamline maintenance, and created a chatbot for quick issue reporting, cutting response times and improving resource utilization by 75%.",
    imgsrc: "/comp_serv.png",
    link: "https://component-sevice-predictor.vercel.app/",
    buttonText: "Website Link →",
    link2: "https://github.com/AyushK0808/Component_Sevice_Predictor",
    buttonText2: "Github Link →",
  },
  {
    title: "TuneCraft",
    description: "Made a model which gave song lyrics similar to how anartist would write. Used Genius API to prepare a dataset of the songs of the artist and trained it using LSTM to generate the lyrics of the song.",
    imgsrc: "/tunecraft.png",
    link: "https://fishtank-vinnovateit.vercel.app/",
    buttonText: "Check it out →",
    link2: "https://github.com/AyushK0808/fishtank-vinnovateit",
    buttonText2: "GitHub Link →",
  },
  {
    title: "Schedule Allocation and Planning System(SAPS)",
    description: "A Python application developed for the Ladies Hostel of VIT Vellore to manage the scheduling of wardens based on shifts and off days. Used tkinter for frontend and also implemented a mailer to send the schedules to the Chief Warden on a monthly basis.",
    imgsrc: "/saps_pic.jpg",
    link: "",
    buttonText: "",
    link2: "",
    buttonText2: "",
  },
  {
    title: "QuillSync",
    description: "The self-hostable notes and research assistant helps organize notes and source references privately. It uses Llama 3.2 with RAG for structuring notes and SearXNG for meta-search. Users can collaborate in workspaces, making it ideal for research. Fully self-hostable with no third-party dependencies, it ensures data control and easy integration. Requires Docker, Python 3.10+, and Node.js.",
    imgsrc: "/white.png",
    link: "https://github.com/AyushK0808/QuillSync",
    buttonText: "Explore →",
    link2: "",
    buttonText2: "",
  },
  {
    title: "Schedule Generator for Women coming back to work",
    description: "Worked in thedevelopment of an app which helped women get back to work by generating a set of personalized tasks using Google's Gemini API. Worked on the frontend using NextJS and integrating the Gemini API on to the site",
    imgsrc: "/maafia.png",
    link: "https://github.com/AyushK0808/MAA-FIA",
    buttonText: "Explore →",
    link2: "",
    buttonText2: "",
  },
  
  
  
  {
    title: "AI Character Chatbot",
    description: "A Chat application where the user can interact with their favorite characters or people as if they were talking to them. Uses NextJS for the framework and MongoDB for the database. Uses GPT to generate AI conversations. ",
    imgsrc: "/white.png",
    link: "",
    buttonText: "",
    link2: "",
    buttonText2: "",
  },
  

  // Add more card contents as needed
];

const Card = ({ content }: { content: CardContent }) => {
  return (
    <CardContainer className="inter-var py-2 md:py-4"> {/* Reduced vertical padding */}
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[25rem] h-[32rem] rounded-xl p-4 border m-auto">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {content.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-[1rem] md:mt-2 text-neutral-300 overflow-hidden text-ellipsis"
          style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 8 }}
        >
          {content.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={content.imgsrc}
            height="1000"
            width="1000"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href={content.link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            {content.buttonText}
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href={content.link2}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            {content.buttonText2}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4"> {/* Reduced gap */}
      {cardContents.map((content, index) => (
        <Card key={index} content={content} />
      ))}
    </div>
  );
};

export default CardList;

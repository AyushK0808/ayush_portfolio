import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";

type CardContent = {
  title: string;
  description: string;
  link: string;
  imgsrc: string;
  buttonText: string;
};

const cardContents: CardContent[] = [
  {
    title: "ISDC 2024 Winning Team Project",
    description: "Assisted in making the software for the drone team that won ISDC 2024. Worked on the object detection via images taken by the onboard the drone using YOLO object detection model. Also worked on a path planning algorithm(A* search algorithm) which gave a path which avoided allobstacles in the image while at the same time passing all the waypoints",
    imgsrc:"/obj_dec.png",
    link: "https://github.com/TeamArdra/isdc-2024",
    buttonText: "Check it Out ->",
  },
  {
    title: "TuneCraft",
    description: "Made a model which gave song lyrics similar to how anartist would write. Used Genius API to prepare a dataset of the songs of the artist and trained it using LSTM to generate the lyrics of the song.",
    imgsrc: "/tunecraft.png",
    link: "https://fishtank-vinnovateit.vercel.app/",
    buttonText: "Check it out →",
  },
  {
    title: "Schedule Generator for Women coming back to work",
    description: "Worked in thedevelopment of an app which helped women get back to work by generating a set of personalized tasks using Google's Gemini API. Worked on the frontend using NextJS and integrating the Gemini API on to the site",
    imgsrc: "/maafia.png",
    link: "https://github.com/AyushK0808/MAA-FIA",
    buttonText: "Explore →",
  },
  // Add more card contents as needed
];

const Card = ({ content }: { content: CardContent }) => {
  return (
    <CardContainer className="inter-var py-10">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[25rem] h-[32rem] rounded-xl p-6 border m-auto">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {content.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300 overflow-hidden text-ellipsis"
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
      </CardBody>
    </CardContainer>
  );
};

const CardList = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {cardContents.map((content, index) => (
        <Card key={index} content={content} />
      ))}
    </div>
  );
};

export default CardList;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";

type CardContent = {
  title: string;
  description: string;
  link: string;
  buttonText: string;
};

const cardContents: CardContent[] = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    link: "https://twitter.com/mannupaaji",
    buttonText: "Try now →",
  },
  {
    title: "Discover the power of Next.js",
    description: "Next.js gives you the best developer experience with all the features you need for production.",
    link: "https://nextjs.org",
    buttonText: "Learn more →",
  },
  {
    title: "Tailwind CSS for Styling",
    description: "Rapidly build modern websites without ever leaving your HTML.",
    link: "https://tailwindcss.com",
    buttonText: "Explore →",
  },
  // Add more card contents as needed
];

const Card = ({ content }: { content: CardContent }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border m-auto">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {content.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {content.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/white.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={content.link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {content.buttonText}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
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
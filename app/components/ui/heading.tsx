"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  title: string;
  className?: string;
  underlineClassName?: string;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className,
  underlineClassName,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative w-fit mx-auto my-6">
      <h2 className={cn("text-3xl md:text-4xl font-bold text-center", className)}>
        {title}
      </h2>
      <motion.div
        className={cn(
          "absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-purple-700",
          underlineClassName
        )}
        initial={{ width: 0 }}
        animate={{ width: isInView ? "100%" : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
};

// Usage example
// import { SectionHeading } from './components/ui/SectionHeading';

// function HomePage() {
//   return (
//     <div>
//       <SectionHeading title="My Section Title" />
//     </div>
//   );
// }

export default SectionHeading;

import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-1 justify-between flex flex-col space-y-4 relative overflow-hidden bg-transparent",
        // Thinner gradient border
        "before:absolute before:-inset-[1px] before:rounded-[13px] before:z-0",
        "before:bg-gradient-to-r before:from-purple-400 before:to-purple-700",
        "before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        "before:animate-gradient-pulse before:content-['']",
        className
      )}
    >
      {/* Content container */}
      <div className="relative z-10 h-full bg-black rounded-[12px] p-4 flex flex-col justify-between">
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-xs text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
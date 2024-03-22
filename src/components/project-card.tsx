import React from "react";
import { cn } from "@lib";
import { AspectRatio } from "@tredici";

type ProjectCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  url: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  title,
  description,
  url
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className={cn(
        "lg:w-[250px] w-full flex flex-col gap-2",
        "text-center",
        "cursor-pointer"
      )}
    >
      <AspectRatio ratio={720 / 400} className="shadow">
        <img
          className={cn(
            "w-full h-full",
            "border border-[--gray-7]",
            "rounded-lg"
          )}
          src={imgSrc}
        />
      </AspectRatio>
      <h3 className={cn("font-semibold", "text-xl")}>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export { ProjectCard };

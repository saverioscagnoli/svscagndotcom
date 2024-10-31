import { useEffect } from "react";
import { ProjectCard } from "@components/project-card";
import { cn } from "@lib";

const ProjectsPage = () => {
  useEffect(() => {
    window.document.title = "Saverio Scagnoli - Projects";
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="md:w-[600px] w-full px-6 -mt-[200px] flex flex-col items-center">
        <h1 className={cn("mt-4", "text-2xl", "font-bold", "self-start")}>
          Works
        </h1>

        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", "mt-8")}>
          <ProjectCard
            imgSrc="/13.png"
            title="Tredici"
            description="A collection of reusable and accessible components."
            url="https://tredici-www.vercel.app"
          />

          <ProjectCard
            imgSrc="/spill-the-beans.svg"
            title="Spill The Beans"
            description="Free and open source password manager for Windows."
            url="https://github.com/saverioscagnoli/spill-the-beans"
            className="border border-[--gray-7]"
          />

          <ProjectCard
            imgSrc="/wltst.png"
            title="Wltst?"
            description="Discord music bot for listening to music from YouTube."
            url="https://discord.com/oauth2/authorize?client_id=1105214512963014757&permissions=3459328&scope=bot+applications.commands"
          />

          <ProjectCard
            imgSrc="/bomberman.jpg"
            title="JBomberman"
            description="Super Bomberman clone, written in Java. (University project)"
            url="https://github.com/saverioscagnoli/bomberman"
          />

          <ProjectCard
            imgSrc="/danbooru.png"
            title="booru downloader"
            description="Bulk downloader from booru websites."
            url="https://booru-downloader.vercel.app"
            ratio={1}
          />
        </div>
      </div>
    </div>
  );
};

export { ProjectsPage };

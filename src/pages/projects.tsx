import { ProjectCard } from "@components/project-card";
import { cn } from "@lib";

const ProjectsPage = () => {
  return (
    <div className={cn("flex flex-col")}>
      <h1 className={cn("mt-4", "text-2xl", "font-bold")}>Works</h1>

      <div className={cn("grid sm:grid-cols-1 md:grid-cols-2 gap-8", "mt-4")}>
        <ProjectCard
          imgSrc="/13.ico"
          title="Tredici"
          description="A collection of reusable and accessible components."
          url="https://tredici-www.vercel.app"
        />

        <ProjectCard
          imgSrc="/spill-the-beans.svg"
          title="Spill The Beans"
          description="Free and open source password manager for Windows."
          url="https://github.com/saverioscagnoli/spill-the-beans"
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
      </div>
    </div>
  );
};

export { ProjectsPage };

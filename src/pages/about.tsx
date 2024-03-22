import React, { ReactNode, useEffect } from "react";
import { Button } from "@tredici";
import { cn } from "@lib";
import {
  ChevronRightIcon,
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

type SocialMediaButtonProps = {
  icon: ReactNode;
  username: string;
  url: string;
};

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon,
  username,
  url
}) => {
  return (
    <a href={url} target="_blank">
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={icon}
        className="h-fit py-2"
      >
        @{username}
      </Button>
    </a>
  );
};

const AboutPage = () => {
  let [bday, now] = [new Date(2002, 9, 29), new Date()];
  let age = now.getFullYear() - bday.getFullYear();
  let month = now.getMonth() - bday.getMonth();

  if (month < 0 || (month === 0 && now.getDate() < bday.getDate())) {
    age--;
  }

  useEffect(() => {
    window.document.title = "Saverio Scagnoli - About";
  }, []);

  return (
    <div
      className={cn(
        "md:w-[600px] w-[90%] h-full",
        "md:px-0 sm:px-12 px-4",
        "-mt-[200px]"
      )}
    >
      <div
        className={cn(
          "text-center",
          "bg-[--gray-a7]",
          "rounded-lg",
          "py-3",
          "transition-bg",
          "backdrop-blur"
        )}
      >
        Hello, I'm an indie app developer based in Rome!
      </div>

      <div
        className={cn("flex flex-col md:flex-row md:justify-between", "mt-6")}
      >
        <div>
          <h1 className="font-bold text-4xl">Saverio Scagnoli</h1>
          <p className="text-lg">Fullstack developer</p>
        </div>
        <div className="flex items-center w-full md:w-auto mt-6 md:mt-0">
          <span className="w-24 h-24 rounded-full mx-auto md:mx-0">
            <img
              className="w-full h-full object-cover rounded-full border-2 border-[--slate-12] transition-[border-color]"
              src="/me.jpg"
            />
          </span>
        </div>
      </div>

      <h3
        className={cn(
          "font-bold",
          "text-2xl",
          "decoration-4 decoration-[--slate-7]",
          "underline underline-offset-4"
        )}
      >
        Me
      </h3>
      <p className="mt-2">
        I am a {age} years old full-stack developer. I like developing all sorts
        of apps to solve day-to-day problems and fuel my passions. <br /> I am
        currently studying Computer Science at 'Sapienza' University of Rome.
      </p>

      <span className={cn("w-full", "flex justify-center", "mt-6")}>
        <Link to="/projects">
          <Button rightIcon={<ChevronRightIcon />}>Portfolio</Button>
        </Link>
      </span>

      <h3
        className={cn(
          "mt-8",
          "font-bold",
          "text-2xl",
          "decoration-4 decoration-[--slate-7]",
          "underline underline-offset-4"
        )}
      >
        Bio
      </h3>

      <div className={cn("flex flex-col gap-2", "mt-2")}>
        <div className="flex gap-4">
          <p className="font-semibold flex-shrink-0">2002</p>
          <p>Born in Rome (Roma), Italy.</p>
        </div>
        <div className="flex gap-4">
          <p className="font-semibold flex-shrink-0">2021</p>
          <p>Graduated from High School.</p>
        </div>
        <div className="flex gap-4">
          <p className="font-semibold flex-shrink-0">2021 - 2022</p>
          <p>
            Studied at AIV (Accademia Italiana Videogiochi) - (Italian Academy
            of Videogames)
          </p>
        </div>
        <div className="flex gap-4">
          <p className="font-semibold flex-shrink-0">2022 - now</p>
          <p>
            Started studying for a bachelor's degree in Computer Science
            (informatica) at 'Sapienza' University of Rome.
          </p>
        </div>
      </div>

      <h3
        className={cn(
          "mt-8",
          "font-bold",
          "text-2xl",
          "decoration-4 decoration-[--slate-7]",
          "underline underline-offset-4"
        )}
      >
        I ♥
      </h3>
      <p className="mt-2">
        Coding, Books (stories in general), Movies, Comics & Mangas.
      </p>

      <h3
        className={cn(
          "mt-8",
          "font-bold",
          "text-2xl",
          "decoration-4 decoration-[--slate-7]",
          "underline underline-offset-4"
        )}
      >
        Social Media
      </h3>
      <div className={cn("flex flex-col gap-2", "mt-2")}>
        <SocialMediaButton
          icon={<GitHubLogoIcon />}
          url="https://github.com/saverioscagnoli"
          username="saverioscagnoli"
        />
        <SocialMediaButton
          icon={<InstagramLogoIcon />}
          url="https://www.instagram.com/saverioscagnoli/"
          username="saverioscagnoli"
        />
        <SocialMediaButton
          icon={<DiscordLogoIcon />}
          url="https://discord.com/users/430368553787719692"
          username="_saverio"
        />
      </div>
    </div>
  );
};

export { AboutPage };

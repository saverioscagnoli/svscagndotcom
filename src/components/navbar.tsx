import React from "react";
import { capitalize, cn } from "@lib";
import { Link, useLocation } from "react-router-dom";
import { Button, IconButton } from "./tredici";
import { useTheme } from "@hooks";
import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

const labels = ["projects", "about", "contact"];
const landingPage = "projects";

type LinkElementProps = {
  label: string;
};

const LinkElement: React.FC<LinkElementProps> = ({ label }) => {
  const { pathname } = useLocation();
  const active =
    pathname === `/${label}` || (pathname === "/" && label === landingPage);

  return (
    <li
      className={cn(
        "transition-bg",
        "px-3 py-1",
        "rounded",
        active &&
          "font-semibold bg-[--plum-9] hover:bg-[--plum-10] text-[--slate-1]"
      )}
    >
      <Link to={`/${label}`}>{capitalize(label)}</Link>
    </li>
  );
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "w-full h-16",
        "fixed",
        "xl:px-96 lg:px-32 px-6",
        "flex justify-between items-center",
        "backdrop-blur",
        "z-50"
      )}
    >
      <div className={cn("flex items-center gap-6")}>
        <Link to="/" className={cn("text-2xl font-bold")}>
          Saverio Scagnoli
        </Link>

        <ul className={cn("md:!flex !hidden", "gap-2")}>
          {labels.map(label => (
            <LinkElement key={label} label={label} />
          ))}
        </ul>
      </div>
      <div className={cn("flex items-center gap-4")}>
        <Link
          className="sm:block hidden"
          to="https://github.com/saverioscagnoli/portfolio"
          target="_blank"
        >
          <Button colorScheme="b/w" rightIcon={<GitHubLogoIcon />}>
            Source
          </Button>
        </Link>
        <IconButton
          colorScheme={isDark ? "amber" : "plum"}
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export { Navbar };

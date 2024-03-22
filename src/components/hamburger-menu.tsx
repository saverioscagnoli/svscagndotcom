import React from "react";
import { DropdownMenu, IconButton } from "@tredici";
import {
  CubeIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  PersonIcon
} from "@radix-ui/react-icons";
import { cn } from "@lib";
import { useNavigate } from "react-router-dom";

type HambugerMenuProps = {
  className?: string;
};

const HambugerMenu: React.FC<HambugerMenuProps> = ({ className }) => {
  const nav = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton
          variant="secondary"
          colorScheme="b/w"
          icon={<HamburgerMenuIcon />}
          className={className}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={cn("z-50")}>
        <DropdownMenu.Item leftIcon={<PersonIcon />} onClick={() => nav("/")}>
          About
        </DropdownMenu.Item>
        <DropdownMenu.Item
          leftIcon={<CubeIcon />}
          onClick={() => nav("/projects")}
        >
          Projects
        </DropdownMenu.Item>

        <a href="https://github.com/saverioscagnoli/portfolio" target="_blank">
          <DropdownMenu.Item
            leftIcon={<GitHubLogoIcon />}
            onClick={() => window.open()}
          >
            Source
          </DropdownMenu.Item>
        </a>
        <DropdownMenu.Arrow />
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

export { HambugerMenu };

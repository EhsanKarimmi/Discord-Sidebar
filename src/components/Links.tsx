import { SiDiscord } from "react-icons/si";
import { BiGame } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { IconType } from "react-icons";
import { ReactElement } from "react";

export const discordLinks: { name: string; icon: ReactElement<IconType> }[] = [
    { name: "Home", icon: <SiDiscord /> },
    { name: "Game Server", icon: <BiGame /> },
    { name: "Add Server", icon: <IoAdd /> },
    { name: "Explore", icon: <MdExplore /> },
];

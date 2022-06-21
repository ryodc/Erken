import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
  {
    title: "Feed",
    icon: <HomeIcon />,
    path: "/Feed",
    cName: "nav-text",
  },
  {
    title: "Gelikte vacatures",
    icon: <StarIcon />,
    path: "/Vacature",
    cName: "nav-text",
  },
  {
    title: "Chat",
    icon: <ChatBubbleIcon />,
    path: "/Chat",
    cName: "nav-text",
  },
  {
    title: "Profile",
    icon: <PersonIcon />,
    path: "/Profile",
    cName: "nav-text",
  },
];



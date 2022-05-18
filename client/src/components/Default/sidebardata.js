import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';

export const SidebarData = [
  {
    title: "Feed",
    icon: <HomeIcon />,
    path: "/",
    cName: 'nav-text'
  },
  {
    title: "Vacature",
    icon: <SearchIcon />,
    path: "/Vacature",
    cName: 'nav-text'
  },
  {
    title: "Chat",
    icon: <ChatBubbleIcon />,
    path: "/Chat",
    cName: 'nav-text'
  },
  {
    title: "Profile",
    icon: <PersonIcon />,
    path: "/Profile",
    cName: 'nav-text'
  }

];
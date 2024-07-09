import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

interface Link {
  id: number;
  url: string;
  text: string;
}

interface SocialLink {
  id: number;
  url: string;
  icon: React.ComponentType;
}

export const internalLinks: Link[] = [
  {
    id: 1,
    url: "#about",
    text: "About",
  },
  {
    id: 2,
    url: "#loan-programs",
    text: "Loan Programs",
  },
  {
    id: 3,
    url: "/new-builds",
    text: "New Builds",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    url: "https://www.instagram.com",
    icon: AiFillInstagram,
  },
  {
    id: 2,
    url: "https://www.facebook.com",
    icon: FaFacebook,
  },
  {
    id: 3,
    url: "https://www.youtube.com",
    icon: AiFillYoutube,
  },
];

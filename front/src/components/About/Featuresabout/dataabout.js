import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import {MdOutlineFlight} from "react-icons/md"
import {FaHotel} from "react-icons/fa"
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureAboutList = [
  {
    id: 1,
    icon: <MdOutlineFlight color="#10b5ca" size={22} />,
    heading: "Designed for you",
    text: "Crafted for you. Enjoy personalized travel, unique destinations, and dedicated 24/7 service, creating unforgettable memories.",
  },
  {
    id: 2,
    icon: <FaHotel color="#10b5ca" size={22} />,
    heading: "Keep Your History",
    text: "Preserve your travel memories. Our platform lets you revisit your past journeys and the unique experiences they brought.",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#10b5ca" size={22} />,
    heading: "Stay Connected",
    text: "Stay in touch, no matter where your travels take you. Our platform ensures you're always connected, keeping you informed and safe.",
  },
  {
    id: 4,
    icon: <FaGg color="#10b5ca" size={22} />,
    heading: "Take control",
    text: "Seize the reins of your travel journey. Our platform gives you the control to customize and manage your adventures as you desire.",
  },
];
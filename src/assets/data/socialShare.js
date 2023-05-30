import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";

import openseaIcon from "assets/images/icon/opensea.svg";
import mediumIcon from "assets/images/icon/med.svg";

const data = [
  {
    thumb: openseaIcon,
    url: "https://opensea.io/collection/butanedao",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/Butane_Network",
  },
  {
    icon: <FaLinkedinIn />,
    url: "#",
  },
  {
    icon: <FaFacebook />,
    url: "#",
  },
  {
    icon: <FaInstagram />,
    url: "#",
  },
  {
    icon: <FaTelegramPlane />,
    url: "https://t.me/butanechain",
  },
  {
    thumb: mediumIcon,
    url: "https://medium.com/@butanegas101",
  },
  {
    icon: <FaEnvelope />,
    url: "team@butane.tech",
  },
  {
    icon: <FaCopy />,
    url: "#",
  },
];

export default data;

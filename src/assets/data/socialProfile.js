import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
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
    url: "https://t.me/butanechain",
  },
  {
    icon: <FaFacebook />,
    url: "https://t.me/butanechain",
  },
  {
    icon: <FaInstagram />,
    url: "https://t.me/butanechain",
  },
  {
    icon: <FaTelegramPlane />,
    url: "https://t.me/butanechain",
  },
  {
    thumb: mediumIcon,
    url: "https://medium.com/@butanegas101",
  },
];

export default data;

import Link from "next/link";
import { useModal } from "utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "assets/images/logo.png";

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper className="bithu_header" id="navbar">
        <div className="container">
          {/* Main Menu Start */}
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src={logo.src} alt="bithu nft logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_list">
                <ul>
                  <li>
                    <Link href="#home">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#roadmap">
                      <a>Roadmap</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#team">
                      <a>Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li className="submenu">
                    <Link href="# ">
                      <a>Pages +</a>
                    </Link>
                    <div className="sub_menu_sect">
                      <ul className="sub_menu_list">
                        <li>
                          <Link href="/">
                            <a>Home One</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-two">
                            <a>Home Two</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-three">
                            <a>Home Three</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-four">
                            <a>Home Four</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-five">
                            <a>Home Five</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/mint-1">
                            <a>Minting Page 1</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/mint-2">
                            <a>Minting Page 2</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>About Us </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/collections">
                            <a>Collections</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/roadmap">
                            <a>Roadmap</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/faq">
                            <a>FAQs</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coming-soon">
                            <a>Coming Soon</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blogs">
                            <a>Latest Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/post">
                            <a>Blog Details</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a>Contact</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bithu_menu_btns">
                <button className="menu_btn" onClick={() => handleMobileMenu()}>
                  <MdNotes />
                </button>
                <Button sm variant="outline" className="join_btn">
                  <FaDiscord /> Join
                </Button>
                <ConnectButton
                  label="Connect"
                  chainStatus="none"//icon,name,none
                  showBalance={false}//true,false
                  accountStatus="address"//avatar,address,
                />
              </div>
            </div>
          </div>
          {/* <!-- Main Menu END --> */}
        </div>
      </NavWrapper>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </>
  );
};

export default Header;

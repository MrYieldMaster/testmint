import { useState, useEffect } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Slider, SliderItem } from "common/slider/Slider";
import { useModal } from "utils/ModalContext";
import GlobalStyles from "assets/styles/GlobalStyles";
import Layout from "common/layout";
import Header from "section/header/v2";
import Banner from "section/banner/v5";
import About from "section/about/v5";
import RoadMap from "section/roadMap/v5";
import FAQ from "section/faq/v5";
import Team from "section/team/v5";
import Mint from "section/mint/v1";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";
import StyleWrapper from "./StyleWrapper";

const HomeSlider = () => {
  const [isCollapse, setCollapse] = useState(true);
  const { visibility, walletModalvisibility, metamaskModal } = useModal();
  const menuData = [
    "01. Home",
    "02. About",
    "03. Roadmap",
    "04. Team",
    "05. FAQ",
    "06. Mint",
  ];

  const settings = {
    swipe: false,
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <span>{menuData[i]}</span>,
  };

  const handleCollapse = () => {
    setCollapse(!isCollapse);
  };

  useEffect(() => {
    const listItems = document.querySelectorAll(".slick-dots li");
    for (let i = 0; i <= listItems.length - 1; i++) {
      listItems[i].addEventListener("click", (e) => { 
        setCollapse(!isCollapse);
      });
    }
  }, [isCollapse]);

  return (
    <>
      <Layout>
        <GlobalStyles />
        {metamaskModal && <MetamaskModal />}
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />
        <StyleWrapper>
          <Slider
            {...settings}
            className={`${isCollapse ? "slider_collapse" : ""}`}
          >
            <SliderItem>
              <Banner />
            </SliderItem>
            <SliderItem>
              <About />
            </SliderItem>
            <SliderItem>
              <RoadMap />
            </SliderItem>
            <SliderItem>
              <Team />
            </SliderItem>
            <SliderItem>
              <FAQ />
            </SliderItem>
            <SliderItem>
              <Mint />
            </SliderItem>
          </Slider>

          <div className="collapse_icon">
            <span onClick={() => handleCollapse()}>
              {isCollapse ? <BsChevronUp /> : <BsChevronDown />}
            </span>
          </div>
        </StyleWrapper>
      </Layout>
    </>
  );
};

export default HomeSlider;

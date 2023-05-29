import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import Banner from "section/banner/v3";
import CharacterSlider from "section/characterSlider/v3";
import About from "section/about/v3";
import HowToMint from "section/howToMint/v2";
import RoadMap from "section/roadMap/v3";
import Team from "section/team/v3";
import FAQ from "section/faq/v3";
import NewsLetter from "section/newsLetter";
import CTA from "section/cta/v2";
import Footer from "section/footer/v3";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function HomeV3() {
  const {
    visibility,
    metamaskModal,
    walletModalvisibility,
    isPopup,
    popupHandle,
  } = useModal();

  return (
    <Layout>
      {metamaskModal && <MetamaskModal />}
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <Banner />
      <CharacterSlider />
      <About />
      <HowToMint />
      <RoadMap />
      <Team />
      <FAQ />
      <NewsLetter />
      <CTA />
      <Footer />
    </Layout>
  );
}

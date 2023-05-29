import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import Banner from "section/banner/v4";
import CoinInfoSlider from "section/coinInfoSlider";
import About from "section/about/v4";
import Features from "section/features/v1";
import Portfolio from "section/portfolio";
import RoadMap from "section/roadMap/v4";
import Team from "section/team/v4";
import FAQ from "section/faq/v4";
import Footer from "section/footer/v4";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";

export default function HomeV4() {
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
      <CoinInfoSlider />
      <About />
      <Features />
      <Portfolio />
      <RoadMap />
      <Team />
      <FAQ />
      <Footer />
    </Layout>
  );
}

import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import Banner from "section/banner/v2";
import CharacterSlider from "section/characterSlider/v2";
import About from "section/about/v2";
import RoadMap from "section/roadMap/v2";
import Team from "section/team/v2";
import FAQ from "section/faq/v2";
import Partner from "section/partner";
import Footer from "section/footer/v2";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function HomeV2() {
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
      <RoadMap />
      <FAQ />
      <Partner />
      <Footer />
    </Layout>
  );
}
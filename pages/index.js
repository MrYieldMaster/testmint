import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1";
import Banner from "section/banner/v1";
import Counter from "section/counter/v1";
import CharacterSlider from "section/characterSlider/v1";
import HowToMint from "section/howToMint/v1";
import About from "section/about/v1";
import RoadMap from "section/roadMap/v1";
import Team from "section/team/v1";
import FAQ from "section/faq/v1";
import Footer from "section/footer/v1";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function Home() {
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
      <Counter />
      <CharacterSlider />
      <HowToMint />
      <About />
      <RoadMap />
      <Team />
      <FAQ />
      <Footer />
    </Layout>
  );
}

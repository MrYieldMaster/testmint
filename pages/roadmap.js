import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import PageHeader from "common/pageHeader/v3";
import RoadMap from "section/roadMap/v6";
import CTA from "section/cta/v2";
import Footer from "section/footer/v3";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function Roadmap() {
  const { walletModalvisibility, metamaskModal, isPopup, popupHandle } =
    useModal();

  return (
    <Layout>
      {metamaskModal && <MetamaskModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <PageHeader />
      <RoadMap />
      <CTA />
      <Footer />
    </Layout>
  );
}

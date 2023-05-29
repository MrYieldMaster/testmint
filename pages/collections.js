import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import PageHeader from "common/pageHeader/v4";
import Collection from "section/collection";
import CTA from "section/cta/v2";
import Footer from "section/footer/v3";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function Collections() {
  const { walletModalvisibility, metamaskModal, isPopup, popupHandle } =
    useModal();

  return (
    <Layout>
      {metamaskModal && <MetamaskModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <PageHeader />
      <Collection />
      <CTA />
      <Footer />
    </Layout>
  );
}

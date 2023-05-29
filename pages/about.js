import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import PageHeader from "common/pageHeader/v2";
import About from "section/about/v6";
import HowToMint from "section/howToMint/v3";
import Counter from "section/counter/v2";
import Team from "section/team/v6";
import CTA from "section/cta/v2";
import Footer from "section/footer/v3";
import WalletModal from "common/modal/walletModal/WalletModal";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";

export default function AboutPage() {
  const { metamaskModal, walletModalvisibility, isPopup, popupHandle } =
    useModal();

  return (
    <Layout>
      {metamaskModal && <MetamaskModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <PageHeader />
      <About />
      <HowToMint />
      <Counter />
      <Team />
      <CTA />
      <Footer />
    </Layout>
  );
}

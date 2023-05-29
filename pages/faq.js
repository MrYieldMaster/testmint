import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1";
import PageHeader from "common/pageHeader/v6";
import FAQ from "section/faq/v6";
import CTA from "section/cta/v2";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function FaqPage() {
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
      <PageHeader />
      <FAQ />
      <CTA />
    </Layout>
  );
}

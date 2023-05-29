import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v1/Header";
import PageHeader from "common/pageHeader/v1";
import BlogList from "section/blog/blogList/BlogList";
import CTA from "section/cta/v2";
import Footer from "section/footer/v3";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function Blogs() {
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
      <BlogList />
      <CTA />
      <Footer />
    </Layout>
  );
}

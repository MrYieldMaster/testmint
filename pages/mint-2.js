import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v2";
import Mint from "section/mint/v3";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function MintPageV2() {
  const { visibility, metamaskModal, walletModalvisibility } = useModal();

  return (
    <Layout>
      {metamaskModal && <MetamaskModal />}
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />
      <Mint />
    </Layout>
  );
}

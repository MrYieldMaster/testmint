import { useModal } from "utils/ModalContext";
import Layout from "common/layout";
import Header from "section/header/v2";
import MetamaskModal from "common/modal/metamaskModal/MetamaskModal";
import Mint from "section/mint/v2";
import MintNowModal from "common/modal/mintNowModal";
import WalletModal from "common/modal/walletModal/WalletModal";

export default function MintPageV1() {
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

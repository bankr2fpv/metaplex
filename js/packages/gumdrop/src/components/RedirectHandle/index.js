import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { find } from 'lodash';
import { notify } from "@oyster/common";

const urls = require("./redirect.json");

export const RedirectHandle = () => {

  const { publicKey } = useWallet();
  const [msg, setMsg] = React.useState()

  React.useEffect(() => {
    if (publicKey) {
      const url = find(urls, { handle: publicKey.toBase58() })?.url;

      if (url) {
        window.location.href = url;
      }

      setMsg('Wallet address not correct');

      notify({
        message: 'Wallet address not correct',
      });
    } else {
      setMsg('Please connect your wellet');
    }
  }, [publicKey]);

  return <React.Fragment>
    { msg }
  </React.Fragment>
}

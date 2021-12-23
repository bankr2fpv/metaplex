import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { find } from 'lodash';

const urls = require("./redirect.json");

export const RedirectHandle = () => {
  const { publicKey } = useWallet();

  if (publicKey) {
    const url = find(urls, { handle: publicKey.toBase58() }).url;
    window.location.href = url;
  }

  return <React.Fragment>
    { publicKey ? publicKey.toBase58() : 'Please connect your wellet' }
  </React.Fragment>
}

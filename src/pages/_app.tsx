import { AppProps } from "next/app";
import Modal from "react-modal";

import { BoardContextProvider } from "../contexts/BoardContext";

import "../styles/global.scss";

Modal.setAppElement("#__next");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BoardContextProvider>
      <Component {...pageProps} />
    </BoardContextProvider>
  );
}

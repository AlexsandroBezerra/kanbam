import { AppProps } from "next/app";

import { BoardContextProvider } from "../contexts/BoardContext";

import "../styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BoardContextProvider>
      <Component {...pageProps} />
    </BoardContextProvider>
  );
}

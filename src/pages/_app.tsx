import Modal from "react-modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AppProps } from "next/app";

import { BoardContextProvider } from "../contexts/BoardContext";

import "../styles/global.scss";

Modal.setAppElement("#__next");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BoardContextProvider>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </BoardContextProvider>
  );
}

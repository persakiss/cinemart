import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import "./App.scss";
import Header from "./components/Header";

import ReactPageScroller from 'react-page-scroller';
import FirstPage from "./components/FirstPage";


export default function App() {
  return (
    <>
      <ParallaxProvider>
        <FirstPage/>
      </ParallaxProvider>
    </>
  );
}

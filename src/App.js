import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import "./App.scss";
import Header from "./components/Header";

import bg1 from "./assets/img/header/background.png";
import fg1 from "./assets/img/header/foreground.png";
import lady from "./assets/img/header/lady.png";

export default function App() {
  return (
    <>
      <Header />
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: bg1, speed: 3 },
            { image: fg1, speed: 4,  },
            { image: lady, speed: 5, translateY: [5, 0] },
          ]}
          className="aspect-[2/1] header-top "
        >
          <div className="">
            <h1 className="text-white">Hello World!</h1>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

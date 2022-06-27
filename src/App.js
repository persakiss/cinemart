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
            { image: bg1, speed: -10 },
            {
              speed: -5,
              children: (
                <div className="header-text">
                  <h1 className="text-white pt-4 header-text ml-4">cinemart</h1>
                  <h2 className="text-white ml-4">action through cinema</h2>
                </div>
              ),
            },
            { image: fg1, speed: 5  },
          ]}
          className="aspect-[2/1] header-top "
        >
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

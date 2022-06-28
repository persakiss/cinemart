import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import "./App.scss";
import Header from "./components/Header";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";

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
            { translateX: [ 19, 0 ], translateY: [18, 40],
              speed: -5,
              children: (
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <MDBTypography
                        tag="div"
                        className="display-1 pb-3 mb-3 text-white header-text"
                      >
                        cinemart
                      </MDBTypography>
                      <MDBTypography
                        tag="div"
                        className="display-6 pb-3 mb-3 text-white sub-text"
                      >
                        action through theater
                      </MDBTypography>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              ),
            },
            { image: fg1, speed: 5 },
          ]}
          className="aspect-[2/1] header-top "
        ></ParallaxBanner>
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

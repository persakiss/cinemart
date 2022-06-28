import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import bg1 from "../assets/img/header/background.png";
import fg1 from "../assets/img/header/foreground.png";
import "../assets/scss/_custom-styles.scss";

function FirstPage() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          { image: bg1, speed: -10 },
          {
            translateX: [-40, 10],
            translateY: [18, 40],
            speed: -10,
            children: (
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    {/* XL+ */}
                    <div class="d-none d-xl-block d-xl-none">
                      <MDBTypography
                        tag="div"
                        className="display-1 pb-3 mb-3 text-white header-text-xl"
                      >
                        cinemart
                      </MDBTypography>
                      <MDBTypography
                        tag="div"
                        className="display-6 pb-3 mb-3 text-white sub-text-xl"
                      >
                        action through theater
                      </MDBTypography>
                    </div>
                    {/* LG */}
                    <div class="d-none d-lg-block d-xl-none">
                      <MDBTypography
                        tag="div"
                        className="display-1 pb-3 mb-3 text-white header-text-lg"
                      >
                        cinemart
                      </MDBTypography>
                      <MDBTypography
                        tag="div"
                        className="display-6 pb-3 mb-3 text-white sub-text-lg"
                      >
                        action through theater
                      </MDBTypography>
                    </div>
                    {/* MD */}
                    <div class="d-none d-md-block d-lg-none">
                      <MDBTypography
                        tag="div"
                        className="display-1 pb-3 mb-3 text-white header-text-md"
                      >
                        cinemart
                      </MDBTypography>
                      <MDBTypography
                        tag="div"
                        className="display-6 pb-3 mb-3 text-white sub-text-md"
                      >
                        action through theater
                      </MDBTypography>
                    </div>
                    {/* SM */}
                    <div class="d-none d-sm-block d-md-none">
                      <MDBTypography
                        tag="div"
                        className="display-1 pb-3 mb-3 text-white header-text-sm"
                      >
                        cinemart
                      </MDBTypography>
                      <MDBTypography
                        tag="div"
                        className="display-6 pb-3 mb-3 text-white sub-text-sm"
                      >
                        action through theater
                      </MDBTypography>
                    </div>
                    {/* XS */}
                    <div class="d-block d-sm-none">
                      <MDBTypography
                        tag="div"
                        className="display-1 pb-3 mb-3 text-white header-text-xs"
                      >
                        cinemart
                      </MDBTypography>
                      <MDBTypography
                        tag="div"
                        className="display-6 pb-3 mb-3 text-white sub-text-xs "
                      >
                        action through theater
                      </MDBTypography>
                    </div>
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
  );
}

export default FirstPage;

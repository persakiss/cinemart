import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";
import { ParallaxBanner } from 'react-scroll-parallax';
import bg1 from "../assets/img/header/background.png";
import fg1 from "../assets/img/header/foreground.png";
import '../assets/scss/_custom-styles.scss'

function FirstPage() {
  return (
    
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
                {/* Large+ */}
                <div class="d-none d-xl-block d-xl-none">
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
                </div>
                <div class="d-none d-sm-block d-md-none">
                <MDBTypography
                  tag="div"
                  className="display-1 pb-3 mb-3 text-white header-text"
                >
                  cinemart
                </MDBTypography>
                <MDBTypography
                  tag="div"
                  className="display-6 pb-3 mb-3 text-white sub-text "
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
  )
}

export default FirstPage
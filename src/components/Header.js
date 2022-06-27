import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

export default function Header() {
  return (
    <header>
      <MDBNavbar
        expand="lg"
        dark
        bgColor="dark"
        sticky
        className="shadow-5-strong"
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">cinemart</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="#" className="d-none">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      {/* <div
        className='p-5 text-center bg-image img-fluid customHeader'
        style={{ backgroundImage: `linear-gradient(to bottom, transparent 0%, #000000bd 80%, #000000 95%), url(${header})` , backgroundSize: 'cover'}}
      >


        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <div className='d-flex justify-content-left align-items-left h-100 leftward'>
            <div className='text-white'>
              <h1 className='mb-3'>cinemart</h1>
              <h4 className='mb-3'>action through theater</h4>
              <a className='btn btn-outline-light btn-lg d-none' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}

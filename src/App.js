import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
import "./App.scss";
import FirstPage from "./components/FirstPage";
import $ from "jquery";
import "./assets/js/jquery.pagepiling";
import "./assets/css/jquery.pagepiling.css";
import "./index.scss";

export default function App() {
  useEffect(() => {
    $(document).ready(function () {
      $("#pagepiling").pagepiling({
        navigation: {
          textColor: "#fff",
          bulletsColor: "#fff",
          position: "right",
          tooltips: ["Home", "About", "Features", "Contact"],
        },
      });
    });
  });

  return (
    <>
    <ParallaxProvider>
      <div id="pagepiling">
        <div class="section">
            <FirstPage />
        </div>
        <div class="section sec2">
          <h1>About</h1>
        </div>
        <div class="section sec3">
          <h1>Features</h1>
        </div>
        <div class="section sec4">
          <h1>Contact</h1>
        </div>
      </div>

      </ParallaxProvider>
    </>
  );
}

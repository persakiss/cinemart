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
          tooltips: ["Water", "Air", "Fire", "Soil", "Sky"],
        },
      });
    });
  });

  return (
    <>
      <div id="pagepiling">
        <div class="section">
          <ParallaxProvider>
            <FirstPage />
          </ParallaxProvider>
        </div>
        <div class="section sec2">
          <h1>Air</h1>
        </div>
        <div class="section sec3">
          <h1>Fire</h1>
        </div>
        <div class="section sec4">
          <h1>Soil</h1>
        </div>
        <div class="section sec5">
          <h1>Sky</h1>
        </div>
      </div>
    </>
  );
}

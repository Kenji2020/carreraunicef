import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState, Component, useEffect } from "react";
import "./App.css";
import {Dropdown } from "react-bootstrap";
import "animate.css/animate.min.css";
import preguntas from "./assets/FAQS.svg";
import Acordion from "./Acordion";
import pdf from "./assets/Bases_y_condiciones.pdf";
import slide4 from "./assets/slide4.png";
import franja from "./assets/Franja.png";
import comprarAquiBatman from "./assets/Batman (4).png";
import video from "./assets/video2.mp4";
import comprarAquiSuperman from "./assets/Superman.png";
import logos from "./assets/Logos.png";
import slider2dos from "./assets/slide1 (2).png";
import slide1dos from "./assets/slide1.png";
function App() {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const on_click3 = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-La-Liga-de-la-Justicia";
  };

  return (
    <>
      <div>
        <img className="w-full" src={slide1dos} />
      </div>
      <video autoPlay muted loop playsInline className="w-full">
        <source src={video} className="w-full" type="video/mp4" />
      </video>
      <div>
        <img className="w-full" src={slider2dos} />
      </div>
      <div>
        <img className="w-full" src={franja} />
      </div>
      {/*put 2 images side by side */}
      <div className="container text-center my-5">
        <div className="d-md-flex">
          <div className="col-xs-12 col-md-6">
            <img
              src={comprarAquiSuperman}
              style={{ width: "100%" }}
              onClick={() => {
                on_click3();
              }}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <img
              src={comprarAquiBatman}
              style={{ width: "100%", marginTop: "1rem" }}
            />
          </div>
        </div>
      </div>
      <div>
        <img className="w-full" src={slide4} />
      </div>
      <div className="row fondoNegro">
        <div className="col-md-12">
          <img src={preguntas} />
        </div>
        <div>
          <div className="text">
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  +
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Acordion />
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="w-full" src={logos} />
      </div>
    </>
  );
}

export default App;

import React, { useRef } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import "./App.css";
import "animate.css/animate.min.css";
import Texto from "./Texto";
import heroesrun from "./assets/Logos_HeroesRun-04.png";
import frase from "./assets/Frase.png";
import concept11 from "./assets/concept11.png";
import Concept4 from "./assets/Concept4.png";
import ss from "./assets/SS.png";
import concept6 from "./assets/Concept6.png";
import botonweb2 from "./assets/botonweb2.png";
import botonweb from "./assets/botonweb.png";
import legal from "./assets/LEGAL.png";
import uniceffrase2 from "./assets/unicef-frase-2.svg";
import calendario from "./assets/calendario.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

function App() {
  const ref1 = useRef(null);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContainer>
      <div className="row intro mb-5">
        <div className="container-fluid p-x-0 ">
          <nav className="navbar navbar-expand-md navbar-light bg-light border-3 border-bottom border-primary ">
            <div className="container-fluid ">
              <a onClick={() => handleClick(ref1)} className="navbar-brand">
                <img src={heroesrun} className="w-25 " />
              </a>
              <button type="button" className="navbar-toggler ">
                <span
                  className="navbar-toggler-icon"
                  data-bs-toggle="collapse"
                  data-bs-target="#Menu"
                ></span>
              </button>
              <div id="Menu" className="collapse navbar-collapse ">
                <ul className="navbar-nav ms-3">
                  <li className="nav-item">
                    <a href="/Vipanel" className="nav-link">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/Productos" className="nav-link">
                      Productos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contacto" className="nav-link">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* fin nav */}
        {/*       animation={batch(StickyIn(), FadeIn(), ZoomIn())} */}
        <div className="col-xs-12 col-sm-5 col-md-5">
          <img src={heroesrun} className="w-full display-block" alt="" />
        </div>
        <div className="col-xs-12 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 blue-bg">
          <img src={frase} className="w-full display-block" alt="" />
        </div>
        {/* main images */}

        <div className="row center-xs p-x-0 mb-5">
          <div className="col-xs-12 col-sm-6 col-md-3 p-x-0">
            <img src={concept11} className="w-full display-block" alt="" />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 p-x-0">
            <img src={Concept4} className="w-full display-block" alt="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 p-x-0">
            <img src={ss} className="w-full display-block" alt="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 p-x-0">
            <img src={concept6} className="w-full display-block" alt="" />
          </div>
        </div>

        <div className="container text-center my-5  ">
          <div className="row">
            <div className="col-md-12">
              <img src={uniceffrase2} />
            </div>
            {/*mucho texto */}
            <AnimationOnScroll animateIn="animate__bounceIn"><h4 className="mt-3">Entre diciembre de 2022 y febrero de 2023, por primera vez en Chile, las ciudades de Santiago, La Serena, Villarrica y Viña del Mar recibirán a miles de superhéroes sin capa que participarán de la corrida “UNICEF Heroes Run” con distancias de 2 y 5 km, en una iniciativa de UNICEF que busca sensibilizar, y promover los derechos de la infancia.

Deportistas, aficionados, familias, niños y niñas de todo el país podrán ser parte de esta actividad solidaria que servirá para recaudar fondos y seguir financiando los proyectos que UNICEF implementa en Chile y en el mundo.

Se trata de cuatro corridas, en cuatro ciudades de Chile, inspiradas en distintos personajes de la “Liga de la Justicia” de DC Comics los que correrán para defender los derechos de todos los niños, niñas y adolescentes.
Es así, como la primera corrida será presentada por la <b>Mujer Maravilla (Wonder Woman), la que se realizará el próximo 11 de diciembre en Santiago,</b> en el Ciudad Empresaria, Huechuraba a las 8:30 hrs, en circuitos de 2k y 5k.

El <b>22 de enero del 2023 nos trasladamos a Villarrica, para la corrida que será presentada por Batman. Mientras que el 5 de febrero de 2023 en El Faro de La Serena,</b> estará será el turno del hombre de acero <b>Superman</b> y para finalizar el <b>19 de febrero,</b> 2023 en el <b>Sporting de Viña del Mar,</b> con la corrida que reunirá a todos los superhéroes de DC en la <b>Liga de la Justicia.</b> Comprando tu inscripción en Ticketplus estarás apoyando el trabajo continuo de UNICEF en favor de los derechos de los niños, niñas y adolescentes, que permitirá seguir respondiendo a las necesidades de la infancia en Chile y el mundo. Conoce aquí todo lo que hemos hecho en el 2021.

Cada inscripción permite a UNICEF llevar programas de protección, salud, educación y respuesta a las emergencias globales para niños, niñas y adolescentes.</h4></AnimationOnScroll>
            {/* fin mucho texto */}
          </div>
        </div>

        {/* background negro */}
        <div className="container text-center fondoNegro mt-5">
          <div className="row">
            <div className="col-md-12">
              <img src={calendario} />
            </div>
          </div>
        </div>

        {/* footer  */}
        <div className="container row-md-6 col-xl-12 d-flex justify-content-center">
          <div>
            <div className="col text-center">
              <img
                src={botonweb2}
                className="botones"
                onClick={console.log()}
                alt=""
              />
            </div>
            <div className="col text-center ml-3" ref={ref1}>
              <img
                src={botonweb}
                className="botones display-block bases"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollContainer>
  );
}

export default App;

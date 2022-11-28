import React, { useRef, useState } from "react";
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
import { Accordion, Card } from "react-bootstrap";
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
import imagenFondoNegro1 from "./assets/imagenFondoNegro1.svg";
import imagenFondoNegro2 from "./assets/imagenFondoNegro2.svg";
import imagenFondoNegro3 from "./assets/imagenFondoNegro3.svg";
import imagenFondoNegro4 from "./assets/imagenFondoNegro4.svg";
import unicef_kit from "./assets/unicef_kit.svg";
import polera_batman from "./assets/polera_batman.jpg";
import polera_liga from "./assets/polera_liga.jpg";
import polera_superman from "./assets/polera_superman.jpg";
import polera_wonderwoman from "./assets/polera_wonderwoman.jpg";
import preguntas from "./assets/faqs.svg";
import Acordion from "./Acordion";
import {BrowserView, MobileView} from 'react-device-detect';
import heroes from "./assets/heroesrun.png";
import logo_unicef from "./assets/logo_unicef.png";
function App() {
  const ref1 = useRef(null);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const on_click = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-wonder-woman";
  };
  const on_click2 = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-batman";
  };
  const on_click3 = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-superman";
  };
  const on_click4 = () => {
    window.location.href =
      "https://ticketplus.cl/events/unicef-heroes-run-La-Liga-de-la-Justicia";
  };

  return (
    <>
      <ScrollContainer>
        <BrowserView>
          <div className="row intro">
            {/* fin nav */}
            {/*       animation={batch(StickyIn(), FadeIn(), ZoomIn())} */}
            <div className="col-xs-12 col-sm-5 col-md-5 container">
              <img src={heroesrun} className="w-full display-block" alt="" />
            </div>
            <div className="col-xs-12 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 blue-bg mt-3">
              <img
                src={frase}
                className="w-full display-block "
                style={{ width: "300px", heigth: "100%" }}
                alt=""
              />
            </div>
            {/* main images */}

            <div className="row center-xs p-x-0 mb-5 ">
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
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <h4 className="mt-3 container">
                    Entre diciembre de 2022 y febrero de 2023, por primera vez
                    en Chile, las ciudades de Santiago, La Serena, Villarrica y
                    Viña del Mar recibirán a miles de superhéroes sin capa que
                    participarán de la corrida “UNICEF Heroes Run” con
                    distancias de 2 y 5 km, en una iniciativa de UNICEF que
                    busca sensibilizar, y promover los derechos de la infancia.
                    Deportistas, aficionados, familias, niños y niñas de todo el
                    país podrán ser parte de esta actividad solidaria que
                    servirá para recaudar fondos y seguir financiando los
                    proyectos que UNICEF implementa en Chile y en el mundo. Se
                    trata de cuatro corridas, en cuatro ciudades de Chile,
                    inspiradas en distintos personajes de la “Liga de la
                    Justicia” de DC Comics los que correrán para defender los
                    derechos de todos los niños, niñas y adolescentes. Es así,
                    como la primera corrida será presentada por la{" "}
                    <b>
                      Mujer Maravilla (Wonder Woman), la que se realizará el
                      próximo 11 de diciembre en Santiago,
                    </b>{" "}
                    en el Ciudad Empresaria, Huechuraba a las 8:30 hrs, en
                    circuitos de 2k y 5k. El{" "}
                    <b>
                      22 de enero del 2023 nos trasladamos a Villarrica, para la
                      corrida que será presentada por Batman. Mientras que el 5
                      de febrero de 2023 en El Faro de La Serena,
                    </b>{" "}
                    estará será el turno del hombre de acero <b>Superman</b> y
                    para finalizar el <b>19 de febrero,</b> 2023 en el{" "}
                    <b>Sporting de Viña del Mar,</b> con la corrida que reunirá
                    a todos los superhéroes de DC en la{" "}
                    <b>Liga de la Justicia.</b> Comprando tu inscripción en
                    Ticketplus estarás apoyando el trabajo continuo de UNICEF en
                    favor de los derechos de los niños, niñas y adolescentes,
                    que permitirá seguir respondiendo a las necesidades de la
                    infancia en Chile y el mundo. Conoce aquí todo lo que hemos
                    hecho en el 2021. Cada inscripción permite a UNICEF llevar
                    programas de protección, salud, educación y respuesta a las
                    emergencias globales para niños, niñas y adolescentes.
                  </h4>
                </AnimationOnScroll>
                {/* fin mucho texto */}
              </div>
            </div>

            {/* background negro */}
            <div
              className="container text-center fondoNegro mt-5"
              style={{ backgroundImage: "black" }}
            >
              <div className="row">
                <div className="col-md-12">
                  <img src={calendario} />
                </div>
              </div>

              <div className="container text-center">
                <div className="row my-4">
                  <div className="col-md-6 pop">
                    <img
                      src={imagenFondoNegro1}
                      style={{ width: "80%", marginTop: "20px" }}
                      onClick={() => {
                        on_click();
                      }}
                    />
                  </div>
                  <div className="col-md-6 pop ">
                    <img
                      src={imagenFondoNegro2}
                      style={{ width: "80%", marginTop: "20px" }}
                      onClick={() => {
                        on_click2();
                      }}
                    />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-md-6 pop">
                    <img
                      src={imagenFondoNegro3}
                      style={{ width: "80%", marginTop: "20px" }}
                      onClick={() => {
                        on_click3();
                      }}
                    />
                  </div>
                  <div className="col-md-6 pop">
                    <img
                      src={imagenFondoNegro4}
                      style={{ width: "80%", marginTop: "20px" }}
                      onClick={() => {
                        on_click4();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 container">
              <img src={unicef_kit} style={{ width: "70%" }} />
            </div>
            {/* make a 4 images */}
            <div className="container text-center my-5">
              <div className="d-md-flex ">
                <div className="col-xs-12 col-md-6">
                  <img src={polera_wonderwoman} style={{ width: "100%" }} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={polera_batman} style={{ width: "100%" }} />
                </div>
              </div>

              <div className="d-md-flex my-3">
                <div className="col-xs-12 col-md-6">
                  <img src={polera_superman} style={{ width: "100%" }} />
                </div>

                <div className="col-xs-12   col-md-6">
                  <img src={polera_liga} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            {/* footer  */}

            {/*Faqs section*/}

            <div className="row fondoNegro">
              <div className="col-md-12">
                <img src={preguntas} />
                <Acordion />
              </div>
            </div>
            {/*make accordion*/}
          </div>
        </BrowserView>
        <MobileView>
        <div className="row intro">
            {/* fin nav */}
            {/*       animation={batch(StickyIn(), FadeIn(), ZoomIn())} */}
            <div className="col-xs-12 col-sm-5 col-md-5 container">
            <img src={logo_unicef} style={{height:'100px'}} alt="" />
              <img src={heroes} style={{height:'100px', marginLeft:'10%'}} alt="" />
            </div>
            <div className="col-xs-12 col-sm-4 col-sm-offset-3 col-md-4 col-md-offset-3 blue-bg mt-3">
              <img
                src={frase}
                className="w-full display-block "
                style={{ width: "300px", heigth: "100%" }}
                alt=""
              />
            </div>
            {/* main images */}

            <div className="row center-xs p-x-0 mb-5 ">
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
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <h4 className="mt-3 container">
                    Entre diciembre de 2022 y febrero de 2023, por primera vez
                    en Chile, las ciudades de Santiago, La Serena, Villarrica y
                    Viña del Mar recibirán a miles de superhéroes sin capa que
                    participarán de la corrida “UNICEF Heroes Run” con
                    distancias de 2 y 5 km, en una iniciativa de UNICEF que
                    busca sensibilizar, y promover los derechos de la infancia.
                    Deportistas, aficionados, familias, niños y niñas de todo el
                    país podrán ser parte de esta actividad solidaria que
                    servirá para recaudar fondos y seguir financiando los
                    proyectos que UNICEF implementa en Chile y en el mundo. Se
                    trata de cuatro corridas, en cuatro ciudades de Chile,
                    inspiradas en distintos personajes de la “Liga de la
                    Justicia” de DC Comics los que correrán para defender los
                    derechos de todos los niños, niñas y adolescentes. Es así,
                    como la primera corrida será presentada por la{" "}
                    <b>
                      Mujer Maravilla (Wonder Woman), la que se realizará el
                      próximo 11 de diciembre en Santiago,
                    </b>{" "}
                    en el Ciudad Empresaria, Huechuraba a las 8:30 hrs, en
                    circuitos de 2k y 5k. El{" "}
                    <b>
                      22 de enero del 2023 nos trasladamos a Villarrica, para la
                      corrida que será presentada por Batman. Mientras que el 5
                      de febrero de 2023 en El Faro de La Serena,
                    </b>{" "}
                    estará será el turno del hombre de acero <b>Superman</b> y
                    para finalizar el <b>19 de febrero,</b> 2023 en el{" "}
                    <b>Sporting de Viña del Mar,</b> con la corrida que reunirá
                    a todos los superhéroes de DC en la{" "}
                    <b>Liga de la Justicia.</b> Comprando tu inscripción en
                    Ticketplus estarás apoyando el trabajo continuo de UNICEF en
                    favor de los derechos de los niños, niñas y adolescentes,
                    que permitirá seguir respondiendo a las necesidades de la
                    infancia en Chile y el mundo. Conoce aquí todo lo que hemos
                    hecho en el 2021. Cada inscripción permite a UNICEF llevar
                    programas de protección, salud, educación y respuesta a las
                    emergencias globales para niños, niñas y adolescentes.
                  </h4>
                </AnimationOnScroll>
                {/* fin mucho texto */}
              </div>
            </div>

            {/* background negro */}
            <div
              className="container text-center fondoNegro mt-5"
              style={{ backgroundImage: "black" }}
            >
              <div className="row">
                <div className="col-md-12">
                  <img src={calendario} />
                </div>
              </div>

              <div className="container text-center">
                <div className="row my-4">
                  <div className="col-md-6 pop">
                    <img
                      src={imagenFondoNegro1}
                      style={{ width: "80%", marginTop: "20px" }}
                      onClick={() => {
                        on_click();
                      }}
                    />
                  </div>
                  <div className="col-md-6 pop ">
                    <img
                      src={imagenFondoNegro2}
                      style={{ width: "80%", marginTop: "20px" }}
                      onClick={() => {
                        on_click2();
                      }}
                    />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-md-6 pop">
                    <img
                      src={imagenFondoNegro3}
                      style={{ width: "80%", marginTop: "20px" }}
                      onClick={() => {
                        on_click3();
                      }}
                    />
                  </div>
                  <div className="col-md-6 pop">
                    <img
                      src={imagenFondoNegro4}
                      style={{ width: "80%", marginTop: "20px" }}
                      onClick={() => {
                        on_click4();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 container">
              <img src={unicef_kit} style={{ width: "70%" }} />
            </div>
            {/* make a 4 images */}
            <div className="container text-center my-5">
              <div className="d-md-flex ">
                <div className="col-xs-12 col-md-6">
                  <img src={polera_wonderwoman} style={{ width: "100%" }} />
                </div>
                <div className="col-xs-12 col-md-6">
                  <img src={polera_batman} style={{ width: "100%" }} />
                </div>
              </div>

              <div className="d-md-flex my-3">
                <div className="col-xs-12 col-md-6">
                  <img src={polera_superman} style={{ width: "100%" }} />
                </div>

                <div className="col-xs-12   col-md-6">
                  <img src={polera_liga} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            {/* footer  */}

            {/*Faqs section*/}

            <div className="row fondoNegro">
              <div className="col-md-12">
                <img src={preguntas} />
                <Acordion />
              </div>
            </div>
            </div>
        </MobileView>
      </ScrollContainer>
    </>
  );
}

export default App;

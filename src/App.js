import React, { useRef } from "react";
import { Animator,ScrollContainer, ScrollPage
  ,Sticky, batch, StickyIn, FadeIn, ZoomIn,
   Fade,ZoomInScroolOut } from "react-scroll-motion" 
import "./App.css";
import Texto from "./Texto"
import heroesrun from "./assets/Logos_HeroesRun-04.png";
import frase from "./assets/Frase.png"
import concept11 from "./assets/concept11.png";
import Concept4 from "./assets/Concept4.png";
import ss from "./assets/SS.png";
import concept6 from "./assets/Concept6.png";
import botonweb2 from "./assets/botonweb2.png";
import botonweb from "./assets/botonweb.png";
import legal from "./assets/LEGAL.png";
import uniceffrase2 from "./assets/unicef-frase-2.svg"
import calendario from "./assets/calendario.svg"


function App() {
  const ref1 = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }


  return (
    


      <div className="row intro mb-5">

<div className="container-fluid p-x-0 ">

      <nav className="navbar navbar-expand-md navbar-light bg-light border-3 border-bottom border-primary ">
        <div className="container-fluid ">
            <a onClick={()=> handleClick(ref1)} className="navbar-brand"><img src={heroesrun} className="w-25 "/></a>
            <button type="button" className="navbar-toggler ">
                <span className="navbar-toggler-icon" data-bs-toggle="collapse"
                data-bs-target="#Menu"
                ></span>
            </button>
            <div id="Menu" className="collapse navbar-collapse ">
                <ul className="navbar-nav ms-3">
                     <li className="nav-item"><a href="/Vipanel" className="nav-link">Inicio</a></li>
                     <li className="nav-item"><a href="/Productos" className="nav-link">Productos</a></li>
                     <li className="nav-item"><a href="/contacto" className="nav-link">Contacto</a></li>
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






        {/*mucho texto */}
      <div className="container text-center my-5  ">
        <div className="row">
          <div className="col-md-12">
              <img src={uniceffrase2} />
          </div>


          <div className="col-md-12 ">
            <Texto/>
          </div>

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

  );
}

export default App;

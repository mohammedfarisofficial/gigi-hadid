import React , { useEffect } from 'react';
import "../styles/component/overlay.scss";
import gsap from "gsap";

function Overlay() {
    useEffect(() => {

        const tl = gsap.timeline();
    
        tl.to(".overlay-left",1.5,{
          height:0,
          ease:"expo.inOut"
        })
        .to(".overlay-right",1.5,{
          height: 0,
          delay:-.5,
          ease: "expo.inOut"
        })
        .from(".hero-title-section",1,{
          x:-60,
          opacity:0,
          ease:"power3.inOut"
        })
        .to(".overlay",{
           css:{ display: "none"}
          })
        .from(".hero-image-section img",1.5,{
          width:0,
          scale:1.2,
          ease: "expo.inOut"
        })
    
      }, [])
    return (
        <div className="overlay">
          <div className="overlay-left"></div>
          <div className="overlay-right"></div>
        </div>
    )
}

export default Overlay

import React ,{ useEffect ,useRef} from 'react';
import "../styles/component/homepagecard.scss";
import { homepageData } from "../assets/index";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function Homepagecard() {

    const paraRef = useRef(null);
    
    const para = homepageData[0];
    const images = homepageData[1];

    // animation 

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: paraRef.current,
            trigger: " bottom center"
        });
        tl.from(".homepagecard-images-section img",1.8,{
            width: 0,
            scale:1.3,
            ease:"expo.InOut"
        })
        .from(".homepagecard-paragraph-section p",1.2,{
            x:-20,
            opacity: 0,
            ease: "expo.InOut"
        })
        
        
      }, []);

    return (
        <div className="homepagecard">
            <div className="homepagecard-paragraph-section">
                <p ref={paraRef}>{para.paragraphOne}</p>
                <p>{para.paragraphTwo}</p>
                 </div>
            <div className="homepagecard-images-section">
                <img src={images.imageOne} alt="image1"/>
                <img src={images.imageTwo} alt="image2"/>
            </div>
        </div>
    )
}

export default Homepagecard

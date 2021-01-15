import "../styles/component/zaynlanding.scss";
import { personsImages } from "../assets/index";

function Zaynlanding() {

    const zayn = personsImages[5];
    return (
        <div className="zayn-landing">
            <div className="zayn-landing-top">
                <div className="zayn-landing-title">
                    <div><h2>{zayn.about.name}</h2></div>
                    <div><p>{zayn.about.desc}</p></div>
                </div>
                <div className="zayn-landing-photo">
                    <img src={zayn.about.mainImg} alt="zayn malik"/>
                </div>
            </div>
            <div className="zayn-landing-bottom">
                <div className="zayn-landing-images-section">
                    {
                        zayn.image.map((img,key)=>(
                            <div className="zayn-images"><img src={img} key={key} alt="zayn malik"/></div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Zaynlanding

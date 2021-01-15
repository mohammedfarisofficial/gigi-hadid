import "../styles/component/personlanding.scss";


function PerosnLanding({image , name ,desc}) {

    return (
        <div className="person-landing">
            <div className="person-landing-title-section">
                <div className="person-landing-mian-title">
                    <h3>{name}</h3>
                </div>
                <div className="person-landing-sub-title">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="person-landing-images-section">
                <div className="person-landing-images">
                    {
                        image.map((img,key)=>(
                            <div className="image-container">
                                <img src={img} key={key} alt="bella"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PerosnLanding

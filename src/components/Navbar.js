import React , { useState}  from 'react';
import { NavLink } from "react-router-dom";
import "../styles/component/navbar.scss";
import gsap from "gsap";

function Navbar({ logoName , black , home}) {
    const [ nav , setNav ] = useState(false);

    const tl = gsap.timeline({ defaults : { duration: .5, ease: "expo.inOut"}});

    if ( nav === true){
        tl.to(".navbar-links-section", 1 , {
            height : "20rem",
            ease : "expo.inOut"
        })
        .to(".navbar-logo-title",{
            color: "white",
            ease: "power4.inOut",
            scale: .9
        },"-=.5")
        .to(".navbar-links",1,{
            opacity: 1,
            marginTop: "6rem",
            height: "100%",
            ease: "expo.inOut"
        })
        .to(".burger:nth-child(1) , .burger:nth-child(2) ",{
            backgroundColor: "white",
            ease: "power3.inOut",
            top:"50%",
            width:"1.3rem",
            height: "3px"
        },"-=.7")
        .to(".burger:nth-child(1)",{
            rotate:"45deg"
        },"-=.7")
        .to(".burger:nth-child(2)",{
            rotate:"-45deg"
        },"-=.7")

    }else {
        tl.to(".navbar-links",{
            opacity: 0,
            pointerEvents: "none",
            ease: "expo.inOut"
        })
        .to(".navbar-links-section",1,{
            height : "0",
            ease : "expo.inOut"
        })
        .to(".navbar-logo-title", 1 ,{
            color: "black",
            ease: "power3.inOut",
            scale: 1
        },"-=.7")
        .to(".burger:nth-child(1) , .burger:nth-child(2) ",{
            backgroundColor: "white",
            ease: "power3.inOut",
            top:"50%",
            rotate:0,
            width: "2rem",
            height: "5px"
        },"-=.7")
        .to(".burger:nth-child(1)",{
            top: "40%"
        },"-=.7")
        .to(".burger:nth-child(2)",{
            top: "55%"
        },"-=.7")
        if(home === true){
            tl.to(".burger",{
                backgroundColor: "white"
            })
        }else{
            tl.to(".burger",{
                backgroundColor: "black"
            })
        }
        
    }
    const toggleHanburger = () => {
        setNav(!nav)
    }
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <h2 className={ home ? "navbar-logo-title" : "navbar-logo-title other"}>{logoName}.</h2>
                </NavLink>
            </div>
            <div className="navbar-hanburger">
                <div onClick={toggleHanburger} className="burger-lines">
                    <span className={ black ? "burger black" : "burger"} ></span>
                    <span className={ black ? "burger black" : "burger"} ></span>
                </div>
            </div>
            <div className="navbar-links-section">
                <div className="navbar-links">
                    <div className="navbar-links-container">
                        <h5>partner</h5>
                        <ul>
                            <NavLink to="/zayn" style={{ textDecoration: 'none' }}>
                                <li>zayn malik</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="navbar-links-container">
                    <h5>siblings</h5>
                        <ul>
                            <NavLink to="/bella" style={{ textDecoration: 'none' }}>
                                <li>bella hadid</li>
                            </NavLink>
                            <NavLink to="/alana" style={{ textDecoration: 'none' }}>
                                <li>alana hadid</li>
                            </NavLink>
                            <NavLink to="/anwar" style={{ textDecoration: 'none' }}>
                                <li>anwar hadid</li>
                            </NavLink>
                            <NavLink to="/marielle" style={{ textDecoration: 'none' }}>
                            <li>marielle hadid</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="navbar-links-container">
                    <h5>gallery</h5>
                        <ul>
                            <li>model</li>
                        </ul>
                    </div>
                    <div className="navbar-links-container">
                    <h5>social media</h5>
                        <ul>
                            <li>instagram</li>
                            <li>twitter</li>
                            <li>facebook</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;

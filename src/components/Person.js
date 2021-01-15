import React from 'react';
import Navbar from "./Navbar";
import PerosnLanding from './PerosnLanding';
import Footer from "../components/Footer"

function Person({image , name ,desc}) {
    return (
        <div>
            <Navbar logoName="hadid" black={true}/>
            <PerosnLanding name={name} desc={desc} image={image}/>
            <Footer />
        </div>
    )
}

export default Person

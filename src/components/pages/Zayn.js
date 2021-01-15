import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Zaynlanding from '../Zaynlanding'

function Zayn() {
    return (
        <>
            <Navbar logoName="zayn malik" black={true} home={false} />
            <Zaynlanding />
            <Footer />
        </>
    )
}

export default Zayn

import landingImage from "./gigi-landing/image1.jpg";
import homepageImage1 from "./gigi more/home-page/image1.jpg";
import homepageImage2 from "./gigi more/home-page/image2.jpg";

// bella images

import bellaImage1 from "./bella-hadid/image1.jpg";
import bellaImage2 from "./bella-hadid/image2.jpg";
import bellaImage3 from "./bella-hadid/image3.jpg";

// alana images

import alanaImage1 from "./alana hadid/image1.jpg";
import alanaImage2 from "./alana hadid/image2.jpg";
import alanaImage3 from "./alana hadid/image3.jpg";

// anwar images

import anwarImage1 from "./anwar hadid/image1.jpg";
import anwarImage2 from "./anwar hadid/image2.png";
import anwarImage3 from "./anwar hadid/image3.jpg";

// marielle images 

import marielleImage1 from "./marielle-hadid/image1.jpg";
import marielleImage2 from "./marielle-hadid/image2.jpg";
import marielleImage3 from "./marielle-hadid/image3.jpg";

// mohammed images 

import mohammedImage1 from "./mohammed-hadid/image1.jpg";
import mohammedImage2 from "./mohammed-hadid/image2.jpeg";
import mohammedImage3 from "./mohammed-hadid/image3.jpg";

// zayn images 

import zaynImage1 from "./zayn-malik/image1.jpg";
import zaynImage2 from "./zayn-malik/image2.jpg";
import zaynImage3 from "./zayn-malik/image3.png";
import zaynImage4 from "./zayn-malik/image4.jpg";





// home page data



export const landingData = {
        title: "Jelena Noura Hadid",
        subtitle: "Jelena Noura Hadid, also known as Gigi Hadid, is an American fashion model who is signed to IMG Models since 2013.",
        landingImage
    }
export const homepageData = [
    {
        paragraphOne : "In November 2014, Hadid made her debut in the Top 50 Models ranking at Models.com. In 2016, she was named International Model of the Year by the British Fashion Council",
        paragraphTwo : "In November 2014, Hadid made her debut in the Top 50 Models ranking at Models.com. In 2016, she was named International Model of the Year by the British Fashion Council"
    },
    {
        imageTwo : homepageImage1,
        imageOne : homepageImage2
    }
]



// persons data

export const personsImages = [
    {   
        about:{
            name: "bella hadid",
            desc:'Isabella Khair Hadid is an American model. In 2016, she was voted "Model of the Year" by industry professionals for Models.com.'

        },
        image:[ 
            bellaImage1,
            bellaImage2,
            bellaImage3
        ]
    },
    {
        about:{
            name: "alana hadid",
            desc: "is the younger of the two and works as a fashion designer in New York. She's collaborated with Lou & Grey in the past and created fun emoji-laden tees for the Current Moji brand."
        },
        image:[
            alanaImage1,
            alanaImage2,
            alanaImage3
        ]
    },
    {
        about:{
            name: "anwar hadid",
            desc:'BROTHER OF GIGI AND BELLA, IS NOW OFFICIALLY MODELING. All kinds of Girls Clothes & Women Fashion , Europe fashion, Other Countries .'
        },
        image: [
            anwarImage1,
            anwarImage2,
            anwarImage3
        ]
    },
    {
        about:{
            name: "marielle hadid",
            desc:"is Mohammed Hadid's first-born child he had with Mary Butler, with whom his marriage ended in 1992, after which in 1994 the Palestinian businessman met Dutch model Yolanda van der Heik, with whom he became father to Gigi, Bella, and Anwar Hadid."
        },
        image:[
            marielleImage1,
            marielleImage2,
            marielleImage3
        ]
    },
    {
        about:{
            name: "mohammed hadid",
            desc:'Mohamed Anwar Hadid is a Jordanian-American real estate developer of Palestinian origin. He is known for building luxury hotels and mansions, mainly in the Bel Air neighborhood of the city of Los Angeles and Beverly Hills in Los Angeles County, California.'
        },
        image:[
            mohammedImage1,
            mohammedImage2,
            mohammedImage3
        ]
    },
    {
        about:{
            name: "zayn malik",
            desc:'Zain Javadd Malik, known mononymously as Zayn, is an English singer and songwriter. Born and raised in Bradford, Malik auditioned as a solo contestant for the British music competition The X Factor in 2010.',
            mainImg: zaynImage1
        },
        image:[
            zaynImage2,
            zaynImage3,
            zaynImage4
        ]
    }

]
import { useState } from "react";
import "./Carousel.css";

function Carousel(){

    const images=["/Images/walter.jpg",  "/Images/Carl-Lightman.jpg", "/Images/Charlie Eppes.jpg", "/Images/elliot.jpeg", "/Images/brock.jpg" ];
    const [index,setIndex] =useState(0);

function handlePrev(){
    setIndex(prev=>(prev-1+images.length)%(images.length));
}
function handleNext(){
    setIndex(prev=>(prev+1)%images.length);
}

return(
    <>
    <div className="carousel">
        <h1 className="carousel-heading">Carousel</h1>
        <img src={images[index]}/>
        <div className="buttons">
         <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
        </div>
        <div className="dots">
            {images.map((dot,i)=>(
                <span 
                    key={i}
                    className={i===index ? "dot active" : "dot"}
                    onClick={()=>setIndex(i)} 
                    ></span>
            )

            )}
        </div>
        

    </div>
    </>
)
    

}
export default Carousel;

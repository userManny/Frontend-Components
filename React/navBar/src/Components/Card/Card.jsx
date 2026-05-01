// this will only show how single card look like in UI so we will loop over cards array in App.jsx(parent) and pass each card details(src,title,description) into this component



import "./Card.css";

function Card({src,title,description}){  //  also  function Card({props}){
                                         //   <img src={props.src}/>              }

    return(
        <>
            <div className="card">
               <img src={src} />
               <h2 >{title}</h2>
               <p>{description}</p>

            </div>
        </>
    )



}

export default Card;
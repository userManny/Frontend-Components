
import Navbar from "./Components/Navbar/Navbar";  
import Card from "./Components/Card/Card";   
import Carousel from "./Components/Carousel/Carousel";

function App() {


  const cardsData =[
        {img:"/Images/walter.jpg",
        title:"Walter O Brian",
        description:"Walter O brian From scorpion has an IQ of 197 fourth highest in the world"
        },
        {
          img:"/Images/Carl-Lightman.jpg",
          title:"Dr. Carl Lightman",
          description:"Dr Carl Lightman from Lie to me is a Microexpression and body language expert along with Gillian Foster detect lie."
        },
        {
          img:"/Images/Charlie Eppes.jpg",
          title:"Dr. Charles Eppes",
          description:"Charlie Eppes from Numb3rs help his brother Don Eppes to solve cases for FBI using Mathematics"
        },
        {
          img:"/Images/elliot.jpeg",
          title:"Elliot Alderson",
          description:"Elliot Alderson from Mr Robot works as cybersecurity engineer at Alsafe by day and a vigilante hacker ar night."

        },
        {img:"/Images/brock.jpg",
          title:"Brock Lesnar",
          description:"Brock Lesnar from Suplex City is a NCAA, UFC, WWE champion and he is the only one to do that."
        }
  ];


 

  return (
    <>
    <Navbar/>
<div className="cards-container">   
{cardsData.map((card,index)=>{
   return  <Card key={index} src={card.img} title={card.title} description={card.description} />
}
        
      )}
</div>

<Carousel />
    </> 
  );
}

export default App;

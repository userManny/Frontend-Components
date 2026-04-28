const crawselData = [
    {img:"Images/walter.jpg"},
    {img:"Images/Carl-Lightman.jpg"},
    {img:"Images/Charlie Eppes.jpg"},
    {img:"Images/brock.jpg"}
]


let currIndex=0;

function crawsel(){
    const track=document.querySelector(".crawsel-track");
    const dotContainer=document.querySelector(".dot-container");

    track.innerHTML="";  // to ensure OLD DOM removed, old event listeners removed and Freash UI with new event listener every time 
    dotContainer.innerHTML="";

    const slide=document.createElement("div");
    slide.classList.add("slide");

    slide.innerHTML=`
    <img src="${crawselData[currIndex].img}" >   `;
    // to access img property of currIndex  of crawselData to use image address

    track.appendChild(slide);   // to add slide element inside track element

 // dots

  crawselData.forEach((item,index)=>{
         const dot=document.createElement("span");
         dot.classList.add("dots");

         if(index==currIndex){
            dot.classList.add("active");
         }
         dot.addEventListener('click',()=>{
            currIndex=index;
            crawsel();
         });
         dotContainer.appendChild(dot);
  });
  
}


document.querySelector(".next").addEventListener("click",()=>{
    currIndex=(currIndex+1)%crawselData.length;
    crawsel();
});

document.querySelector(".prev").addEventListener("click",()=>{
    currIndex=(currIndex-1+crawselData.length)%crawselData.length;
    crawsel();
});

crawsel();


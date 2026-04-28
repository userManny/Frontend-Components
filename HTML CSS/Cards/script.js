const cardsData =[
    {
        img:"Images/walter.jpg",
        title:"Walter O Brian",
        description:"Walter O brian From SCorpion has 197 Iq fourth highest in the world"
    },
      {
        img:"Images/Carl-Lightman.jpg",
        title:"Dr. Carl Lightman",
        description:"Dr Carl Lightman From Lie to Me alon with Gillian foster, eli loki, Riya Tores detect body language and lies."
    },
      {
        img:"Images/Charlie Eppes.jpg",
        title:"Charlie Eppes",
        description:"Carles Eppes From Numb3rs helps Don Eppes(FBI) to solve cases using Mathematics"
    },
      {
        img:"Images/brock.jpg",
        title:"Brock Lesnar(Beast)",
        description:"Brock Lesnar has won NCAA, WWE, UFC Chamipionship. His Autobiography book is Deathcluth."
    }
];


const container = document.querySelector(".cards-container"); // return first matching elemnet and not all elements 

cardsData.forEach((item)=>{
    const card=document.createElement("div");  // create div> </div>
    card.classList.add("card");                // <div class="card"> </div>


    card.innerHTML=`
    <img src="${item.img}">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    `;

    container.appendChild(card);  // takes created card and add it inside .card-container
})

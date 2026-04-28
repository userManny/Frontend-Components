# Frontend Practise Component


# What I Built
Component is useful for Interview Questions in which we have recreate layout of a images, text box or both using.

# Concepts Used 
- grid is better for 2D Layout
- flex is for single direction (row or col) e.g. Navbar, Cards in a row, Align items.
- Here, grid items are added left to right in the order of HTML with each row can have max 2  items.
- images need object-fit:cover  maintain aspect ration do not strech without it image strech , used for Cards in a row, Layout e.g (professional look )
.img{
    width:100%;
    height:100%;
    object-fit:cover; 
}

-width is already equal due to 1fr 1fr height is also equal, can also give height to only one , as rows take the height of the tallest item while other items stretch to match.

grid
- .container-Class{
    display:grid;   // container becomes grid container  and its items grid items 
    grid-template-coloumns: 1fr, 1fr; // create 2 equal width coloumns 
    gap:20px;   //To create space b/w grid items i.e space between items in a row or coloumn
}
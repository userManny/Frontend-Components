# Important nodes in React
1. If UI needs to re-render when data changes → use state otherwise normally define like js. for eg displaying cards => define card as normally as array of objects with image properties if use interaction can add or delele card then use state.
2. function ComponentName({src,title,description}){ <img src={src}/> }
}   
   // Also function ComponnetName({props}){  <h1>{props.title}</h1> }
      
<ComponnetName scr="img.jpg    title="ImageName" description="about Image" />


name.jsx   jsx is javascript inside html 
{} mens enter js mode
/*  * / normal js comments

so comments in name.jsx(react) are {/* this is comment */}

folder navigation in react 
./ means start from here(look in same folder as present file)
../ look in folder 1 level up 
for e.g in Card.jsx  => import "./Card.css"  as both are in same folder    import "./Component/Card/Card

useEffect(() => {
  // runs on mount

  return () => {
    // runs on unmount
  };
}, []);

# IN a rect component 
function Users() {
  // 👈 This part = normal JavaScript
  return (
    // 👈 This part = JSX (HTML-like)  first {} enter js mode then use js tools
  );
}
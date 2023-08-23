import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("div",{class:"Title"},
// [React.createElement("h1",{},"Welcome to Namaste React"),
// React.createElement("h2",{},"Welcome to jsx "),
// React.createElement("h3",{},"Welcome to episode3"),
// ]);


const root=ReactDOM.createRoot(document.getElementById("root"));

// const jsxheading=(
//     <div className="title">
//     <h1>Welcome to Namaste React</h1>
//     <h2>Welcome to jsx </h2>
//     <h3> Welcome to episode3</h3>
//     </div>
// );

//functional component and component composition

const Head=()=>(
    <div>
        <h1>Component composition</h1>
    </div>

);
const footer=<h1>footer</h1>;
const Heading=()=>(
  <div className="title">
   <h1>Welcome to Namaste React</h1>
   <Head/>
   {footer} 
   <h2>Welcome to jsx </h2>
   <h3> Welcome to episode3</h3>
   </div>
);
root.render(<Heading/>);




// create h1 tag using createElement method that is offering by React
// first argument is to what element we need to create, second one is to give attributes to that element
// tag, attributes, children
// at the end of the day it is javascript object which inturns turns into html tags while it is rendering by root.render by the ReactDOM
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!!")

// root is the place where we render everything inside the react.
// rendering thing is done by reactDOM
// getting the div with id root
const root = ReactDOM.createRoot(document.getElementById("root"))

// converts the javascript object to h1 tag and put it on the dom.
// root.render(heading)

// for creating a structure like this
// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//     </div>
// </div>

// if you want to give two elements as the siblings we have to pass them as an array
const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement("h1", {}, "I'm a h1 tag"), React.createElement("h1", {}, "I'm a h1 tag")]
    )
)

console.log(parent)

root.render(parent)
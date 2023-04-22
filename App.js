// const heading = React.createElement("h1",
//     { id: "heading1" },
//     "hello world by REACT"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

{/* <div>
    <div>
        <h1></h1>
    </div>
</div> */}

// const parent = React.createElement(
//     "div",
//     { id: "parent" },[
//         React.createElement(
//             "div",
//             { id: "child" },
//             [
//                 React.createElement("h1", {}, "i am h1 tag"),
//                 React.createElement("h2", {}, "i am h2 tag")    
//             ]
//         )
//     ]
   
// )
const parent=React.createElement("div", {id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am a h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am a h2 tag")
    ])

])
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
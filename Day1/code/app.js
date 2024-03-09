const h1 = React.createElement("h1",{id:"wow"},"heading1");
const h2 = React.createElement("h1",{},"heading2");
const contain = React.createElement("div",{},[h1,h2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(contain);
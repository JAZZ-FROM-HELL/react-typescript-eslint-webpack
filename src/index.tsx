import React from "react";
import ReactDOM from "react-dom";

const hello = "Hello React!";

const App = () => (
    <div>
        <h1>My React and TypeScript App! {new Date().toLocaleDateString()}</h1>
        <p>{hello}</p>
    </div>
);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);


import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css"
import TemplateList from "./components/TemplateList";


var parentOrigin;

window.addEventListener('message', function greetingHandler(event) {
  if (event.data === 'greeting' ) {
    window.removeEventListener('message', greetingHandler, false);
    parentOrigin = event.origin;
    ReactDOM.render(Index(parentOrigin), document.getElementById("index"));
  }
}, false);


const Index = (parentOrigin) => {
  return <div>
    <TemplateList parentOrigin={parentOrigin}></TemplateList>
  </div>;
};


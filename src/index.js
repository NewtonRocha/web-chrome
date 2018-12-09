import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css"
import TemplateList from "./components/TemplateList";


var parentOrigin;

window.addEventListener('message', function greetingHandler(event) {
  // This iframe only allows a gmail page to talk to it. Note that other pages
  // on the internet could create an iframe with a url to this page and work for
  // people with this extension installed, so this check is still important.
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


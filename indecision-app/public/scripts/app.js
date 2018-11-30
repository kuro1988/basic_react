"use strict";

console.log("Hello!!!");

// JSX

var template = React.createElement(
  "p",
  null,
  "Welcome! This is JSX"
);
var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);

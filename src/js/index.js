//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

setInterval(function() {
    console.log (num1++, num2, num3, num4, num5, num6); 
    if (num1 === 10) {
         num1 = 0;
         num2++; 
    }
        if (num2 === 10) {
            num2 = 0;
            num3++;
        } 
            if (num3 === 10) {
                num3 = 0;
                num4++;
            } 
                if (num4 === 10) {
                    num4 = 0;
                    num5++;
                } 
                if (num5 === 10) {
                    num5 = 0;
                    num6++;
                } 
                if (num6 === 10) {
                    num6 = 0;
                    num1++;
                } 
                   

    //render your react application
    ReactDOM.render(<Home digito1={num1} digito2={num2} digito3={num3} digito4={num4} digito5={num5} digito6={num6}/>, document.querySelector("#app"));
}, 1000);


//1. pasar un props <Componente props="valr"/>
//2. recibir un props donde se declara el componente


// ReactDOM.render(<Home digito1={num1} digito2={num2} digito3={num3} digito4={num4} digito5={num5} digito6={num6}/>, document.querySelector("#app"));
// }, 1000);


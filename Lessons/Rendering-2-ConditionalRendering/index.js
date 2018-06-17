import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


//Here we learn how to use if statement to get certain things to rendering
//We also learn how to use one line renders
//Just change true to false.

function Feature(props){
    //Single line if statement
    //return <h1>This feature is {props.active? "On":"Off"}</h1>

    //To prevent certain props form rendering
    //if(props.active == false){
      //return null
    //}
    //return<h1>This feature is active </h1>

    //One line way to do the above prevent rendering is by the double ampersand
    return props.active && <h1>This feature is active</h1>

}

ReactDOM.render(<Feature active = {true}/>, document.getElementById('root'));
registerServiceWorker();

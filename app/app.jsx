var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('./components/Main.jsx');

ReactDOM.render(
    <Main/>
    ,
    document.getElementById('content')
);


//TODO Add description string 'Loading', when load images from server
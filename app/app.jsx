var React = require('react');
var ReactDOM = require('react-dom');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!sass-loader!applicationStyles');
$(document).foundation();

var Main = require('Main');
var NewMain = require('NewMain');

ReactDOM.render(
//    <Main/>
    <NewMain/>
    ,
    document.getElementById('content')
);

// TODO Add description string 'Loading', when load images from server
// TODO Enhance visual style with Foundation
// TODO Add tests for backend part
// TODO Add tests for frontend part
// TODO Not work mobile version
// TODO Add magnifying on image

import React from 'react';
import ReactDOM from 'react-dom';
import MoviesDisplay from './moviesDisplay.jsx';
require("./style.scss");

document.addEventListener('DOMContentLoaded', function() {



    class App extends React.Component {
        render() {
            return <MoviesDisplay/>

        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});

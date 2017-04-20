import React from 'react';
import ReactDOM from 'react-dom';
require("./style.scss");

document.addEventListener('DOMContentLoaded', function() {

    class MovieSearch extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                firstTitleinput: "",
                secondTitleinput: "",
                url1: "",
                url2: "http://www.omdbapi.com/?t=fracture",
                title1: "",
                title2: "",
                year1: "",
                year2: "",
                runtime1: "",
                runtime2: "",
                director1: "",
                director2: "",
                actorsList1: "",
                actorsList2: "",
                language1: "",
                language2: "",
                countryList1: "",
                countryList2: "",
                poster1: "",
                poster2: "",
                imdbRating1: "",
                imdbRating2: "",
                boxOffice1: "",
                boxOffice2: "",
                production1: "",
                production2: "",
                website1: "",
                website2: ""
            };
        }

        componentDidMount() {}

        _handleFirstTitleChange = (event) => {
            this.setState({firstTitleinput: event.target.value});
        };
        _handleSecondTitleChange = (event) => {
            this.setState({secondTitleinput: event.target.value});
        };
        _handleBtnClick = (event) => {
            const firstTitleToSearch = "http://www.omdbapi.com/?t=" + this.state.firstTitleinput.split(' ').join('+');


            const secondTitleToToSearch = "http://www.omdbapi.com/?t=" + this.state.secondTitleinput.split(' ').join('+');

            this._fetchSearch(firstTitleToSearch, secondTitleToToSearch)

        };

        _fetchSearch = (movie1, movie2) => {
            fetch(movie1).then((res) => res.json()).then((data) => {

                this.setState({title1: data.Title, year1: data.Year, runtime1: data.Runtime, actorsList1: data.Actors,
                poster1: data.Poster})

                fetch(movie2).then((res) => res.json()).then((data) => {
                    this.setState({title2: data.Title, year2: data.Year, runtime2: data.Runtime, actorsList2: data.Actors,  poster2: data.Poster})
                })
            })
        }

        render() {

            return <div>
                <input type="text" value={this.state.firstTitleinput} onChange={this._handleFirstTitleChange} className="inputSearch"/>

                <div>
                <img src={this.state.poster1} alt={this.state.title1} title={this.state.title1} className="scale-down-left"/>

                Title: {this.state.title1}
                    {this.state.year1}
                    {this.state.runtime1}
                    {this.state.actorsList1}

                </div>
                <br/>
                <input type="text" value={this.state.secondTitleinput} onChange={this._handleSecondTitleChange}
                className="inputSearch"/>

                <div>
<img src={this.state.poster2} alt={this.state.title2} title={this.state.title2}/>
                Title: {this.state.title2}
                    {this.state.year2}
                    {this.state.runtime2}
                    {this.state.actorsList2}

                </div>

                <div>
                    <button onClick={this._handleBtnClick}>check movies</button>
                </div>

            </div>

        }
    }

    class App extends React.Component {
        render() {
            return <MovieSearch/>

        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});

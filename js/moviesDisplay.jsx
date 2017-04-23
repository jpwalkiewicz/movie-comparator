
import React from 'react';
import ContentInCommon from './contentInCommon.jsx';
import IndependentMovieInfo from './independentMovieInfo.jsx';

class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstTitleinput: "",
            secondTitleinput: "",
            url1: "",
            url2: "",
            errorLoading1: "",
            errorLoading2: "",
            title1: "",
            title2: "",
            year1: "",
            year2: "",
            yearInCommon: false,
            runtime1: "",
            runtime2: "",
            director1: "",
            director2: "",
            directorInCommon: false,
            actorsList1: "",
            actorsList2: "",
            actorsListInCommon: false,
            plot1: "",
            plot2: "",
            language1: "",
            language2: "",
            languageListInComon: false,
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
        const firstTitleToSearch = "http://www.omdbapi.com/?t=" + this.state.firstTitleinput.split(' ').join('+') + "&plot=full";

        const secondTitleToSearch = "http://www.omdbapi.com/?t=" + this.state.secondTitleinput.split(' ').join('+') + "&plot=full";

        this._fetchSearch(firstTitleToSearch, secondTitleToSearch)

    };

    _fetchSearch = (movie1, movie2) => {
        fetch(movie1).then((res) => res.json()).then((data) => {

            if (data.Response != "False") {
                this.setState({
                    errorLoading1: "",
                    title1: data.Title,
                    year1: data.Year,
                    runtime1: parseInt(data.Runtime, 10),
                    actorsList1: data.Actors,
                    poster1: data.Poster,
                    director1: data.Director,
                    language1: data.Language,
                    plot1: data.Plot
               })
            } else {
                this.setState({errorLoading1: false})
            }

            fetch(movie2).then((res) => res.json()).then((data) => {
                if (data.Response != "False") {

                    this.setState({
                        errorLoading2: "",
                        title2: data.Title,
                        year2: data.Year,
                        runtime2: parseInt(data.Runtime, 10),
                        actorsList2: data.Actors,
                        poster2: data.Poster,
                        director2: data.Director,
                        language2: data.Language,
                        plot2: data.Plot
                    })
                } else {
                    this.setState({errorLoading2: false})
                }
            }).then(e => {
                this._actorsInCommon()
                this._languageInCommon()
                this._yearInCommon()
            })
        })
    }

    _actorsInCommon = () => {
        const actors1 = this.state.actorsList1.split(', ');
        const actors2 = this.state.actorsList2.split(', ');
        const commonActorsArr = []
        for (var i = 0; i < actors1.length; i++) {
            for (var j = 0; j < actors2.length; j++) {
                if (actors1[i] == actors2[j]) {
                    commonActorsArr.push(actors1[i]);
                }
            }

        }
        let incomon;
        if (commonActorsArr.length >= 0) {
             incomon = commonActorsArr.join(", ");
        } else {
             incomon = false
        }

        this.setState({actorsListInCommon: incomon})

    }

    _languageInCommon = () => {
        const language1 = this.state.language1.split(', ');
        const language2 = this.state.language2.split(', ');
        const commonLanguageArr = []


        for (var i = 0; i < language1.length; i++) {
            for (var j = 0; j < language2.length; j++) {
                if (language1[i] == language2[j]) {
                    commonLanguageArr.push(language1[i]);
                }
            }

        } let incomon;
         if (commonLanguageArr.length >= 0) {
              incomon = commonLanguageArr.join(", ");
         } else {
              incomon = false
         }

         this.setState({languageListInComon: incomon})
    }


    _yearInCommon = () => {
         if (this.state.year1 == this.state.year2) {
              this.setState({yearInCommon: this.state.year1})
         } else {
              this.setState({yearInCommon: false})
         }
    }

    render() {

        return <div>
        <div className="searchDiv">
            <input type="text" value={this.state.firstTitleinput} onChange={this._handleFirstTitleChange} className="inputSearch"/>
           <button className="btn" onClick={this._handleBtnClick}>check movies</button>
            <input type="text" value={this.state.secondTitleinput} onChange={this._handleSecondTitleChange} className="inputSearch"/>

</div>

 <ContentInCommon actorsListInCommon={this.state.actorsListInCommon} languageListInComon={this.state.languageListInComon} yearInCommon={this.state.yearInCommon} />



            <IndependentMovieInfo  errorLoading1={this.state. errorLoading1} errorLoading2={this.state. errorLoading2} title1={this.state.title1} title2={this.state.title2} year1={this.state.year1} year2={this.state.year2} runtime1={this.state.runtime1} runtime2={this.state.runtime2} director1={this.state.director1} director2={this.state.director2} actorsList1={this.state.actorsList1} actorsList2={this.state.actorsList2} plot1={this.state.plot1} plot2={this.state.plot2} language1={this.state.language1} language2={this.state.language2} countryList1={this.state.countryList1} countryList2={this.state.countryList2} poster1={this.state.poster1} poster2={this.state.poster2} imdbRating1={this.state.imdbRating1} imdbRating2={this.state.imdbRating2} boxOffice1={this.state.boxOffice1} boxOffice2={this.state.boxOffice2} production1={this.state.production1} production2={this.state.production2} website1={this.state.website1} website2={this.state.website2} />






        </div>

    }
}
export default MovieSearch;

import React from 'react';

class IndependentMovieInfo extends React.Component {

    render() {
        if (this.props.website1.length > 5) {
            var web1 = <a href={this.props.website1}>official website</a>
        } else {
            var web1 = "No offical web provided";
        }

        if (this.props.website2.length > 5) {
            var web2 = <a href={this.props.website2}>official website</a>
        } else {
            var web2 = "No offical web provided";
        }

        return <div className="row">

            <div className="col-5 leftColumn">
                {this.props.errorLoading1}
                <img src={this.props.poster1} alt={this.props.title1} title={this.props.title1} className="posterImg"/>
                <ul>

                    <li>
                        <span className="mobileListSpan">Title:</span>
                        {this.props.title1}</li>
                    <li>
                        <span className="mobileListSpan">Year:</span>
                        {this.props.year1}</li>
                    <li>
                        <span className="mobileListSpan">Runtime:</span>
                        {this.props.runtime1}
                        min</li>
                    <li>
                        <span className="mobileListSpan">Actors:</span>
                        {this.props.actorsList1}</li>
                    <li>
                        <span className="mobileListSpan">Countries: </span>
                        {this.props.countryList1}</li>
                    <li>
                        <span className="mobileListSpan">Production: </span>
                        {this.props.production1}</li>

                    <li>
                        <span className="mobileListSpan">Imdb Rating: </span>
                        {this.props.imdbRating1}
                        / 10</li>
                    <li>
                        <span className="mobileListSpan">Box Office: </span>
                        {this.props.boxOffice1}</li>

                    <li>
                        <span className="mobileListSpan">Web: </span>
                        {web1}</li>
                    <li>
                        <span className="mobileListSpan">Plot: </span>
                        {this.props.plot1}</li>

                </ul>
            </div>

            <div className="col-2">
               <div className="centerCol">
                    <div className="inCommonCenter">
                    </div>
                    <div className="inCommonTitles">
                    <ul>
                         <li>TITLE</li>
                         <li>YEAR</li>
                         <li>RUNTIME</li>
                         <li>ACTORS</li>
                         <li></li>                         
                         <li>COUNTRIE(s)</li>
                         <li>PRDUCTION</li>
                         <li>Imdb RATE</li>
                         <li>BOXOFFICE</li>
                         <li>PLOT</li>
                    </ul>
                    </div>

               </div>

            </div>

            <div className="col-5 rightColumn">
                {this.props.errorLoading2}
                <img src={this.props.poster2} alt={this.props.title2} title={this.props.title2} className="posterImg"/>
                <ul>

                    <li>
                        <span className="mobileListSpan">Title: </span>
                        {this.props.title2}</li>
                    <li>
                        <span className="mobileListSpan">Year: </span>
                        {this.props.year2}</li>
                    <li>
                        <span className="mobileListSpan">Runtime: </span>
                        {this.props.runtime2}
                        min</li>
                    <li>
                        <span className="mobileListSpan">Actors: </span>
                        {this.props.actorsList2}</li>
                    <li>
                        <span className="mobileListSpan">Countries: </span>
                        {this.props.countryList2}</li>
                    <li>
                        <span className="mobileListSpan">Production: </span>
                        {this.props.production2}</li>

                    <li>
                        <span className="mobileListSpan">Imdb Rating: </span>
                        {this.props.imdbRating2}
                        / 10</li>
                    <li>
                        <span className="mobileListSpan">Box Office: </span>
                        {this.props.boxOffice2}</li>
                    <li>
                        <span className="mobileListSpan">Web: </span>
                        {web2}</li>
                    <li>
                        <span className="mobileListSpan">Plot: </span>
                        {this.props.plot2}</li>

                </ul>

            </div>

        </div>

    }
}
export default IndependentMovieInfo;

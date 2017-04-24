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

        if (this.props.boxOffice1.length > 5) {
            var boxoffice1 = this.props.boxOffice1
        } else {
            var boxoffice1 = "No boxoffice informations";
        }

        if (this.props.boxOffice2.length > 5) {
            var boxoffice2 = this.props.boxOffice1
        } else {
            var boxoffice2 = "No boxoffice informations";
        }



        if (this.props.poster1.length > 6) {
            var poster1 = <img src={this.props.poster1} alt={this.props.title1} title={this.props.title1} className="posterImg"/>
       } else {
            var poster1 =  <img src="./images/poster_error.png" alt={this.props.title1} title={this.props.title1} className="posterImg"/>
       }

       if (this.props.poster2.length > 6) {
          var poster2 = <img src={this.props.poster2} alt={this.props.title2} title={this.props.title2} className="posterImg"/>
     } else {
          var poster2 =  <img src="./images/poster_error.png" alt={this.props.title2} title={this.props.title2} className="posterImg"/>
     }



        return <div className="row">

            <div className="col-5 leftColumn">

                {poster1}
                <ul>

                    <li>
                        <span className="mobileListSpan">Title:</span>
                        {this.props.title1}</li>
                    <li>
                        <span className="mobileListSpan">Year:</span>
                        {this.props.year1}</li>
                        <li>
                           <span className="mobileListSpan">Language:</span>
                           {this.props.language1}</li>
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
                        {boxoffice1}</li>

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
                         <li>LANGUAGE</li>
                         <li>RUNTIME</li>
                         <li>ACTORS</li>

                         <li>COUNTRIE</li>
                         <li>PRDUCTION</li>
                         <li>Imdb RATE</li>
                         <li>BOXOFFICE</li>
                         <li>PLOT</li>
                    </ul>
                    </div>

               </div>

            </div>

            <div className="col-5 rightColumn">

                {poster2}
                    <ul>

                    <li>
                        <span className="mobileListSpan">Title: </span>
                        {this.props.title2}</li>
                    <li>
                        <span className="mobileListSpan">Year: </span>
                        {this.props.year2}</li>

                        <li>
                          <span className="mobileListSpan">Language:</span>
                          {this.props.language2}</li>
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
                        {boxoffice2}</li>
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

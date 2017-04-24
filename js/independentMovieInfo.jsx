import React from 'react';

class IndependentMovieInfo extends React.Component {

    render() {
        return <div className="row">
          <div className="col-1"></div>
            <div className="col-4 leftColumn">

                <img src={this.props.poster1} alt={this.props.title1} title={this.props.title1} className=""/>
                <p>{this.props.errorLoading1}</p>
                <p>{this.props.title1}</p>
                <p>{this.props.year1}</p>
                <p>{this.props.runtime1} min</p>
                <p>{this.props.actorsList1}</p>
                <p>{this.props.countryList1}</p>
                <p>{this.props.production1}</p>

                <p>{this.props.imdbRating1} / 10</p>
                <p>{this.props.boxOffice1}</p>
                <p><a href={this.props.website1}>{this.props.website1}</a></p>

                <p>{this.props.plot1}</p>

            </div>

            <div className="col-2">
            <p></p>
            <p className="firstParagraph">Title</p>
            <p>Year of production</p>
            <p>Run time</p>
            <p>Actors</p>
            <p>Plot</p>

            </div>

            <div className="col-4">

                <img src={this.props.poster2} alt={this.props.title2} title={this.props.title2}/>
                <p>{this.props.errorLoading2}</p>
                <p>{this.props.title2}</p>
                <p>{this.props.year2}</p>
                <p>{this.props.runtime2} min</p>
                <p>{this.props.actorsList2}</p>
                <p>{this.props.countryList2}</p>
                <p>{this.props.production2}</p>
                <p>{this.props.imdbRating2} / 10</p>
                <p>{this.props.boxOffice2}</p>
                 <p><a href={this.props.website2}>{this.props.website2}</a></p>
                <p>{this.props.plot2}</p>
            </div>
            <div className="col-1"></div>
        </div>

    }
}
export default IndependentMovieInfo;

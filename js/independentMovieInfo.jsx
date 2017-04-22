import React from 'react';

class IndependentMovieInfo extends React.Component {

    render() {
        return <div className="mainDivContent">

            <div className="movieContentLeft">

                <img src={this.props.poster1} alt={this.props.title1} title={this.props.title1} className="scale-down-left"/>
                <p>{this.props.errorLoading1}</p>
                <p>{this.props.title1}</p>
                <p>{this.props.year1}</p>
                <p>{this.props.runtime1}</p>
                <p>{this.props.actorsList1}</p>
                <p>{this.props.plot1}</p>

            </div>

            <div className="dataAttributeDisplay">
            <p></p>
            <p className="firstParagraph">Title</p>
            <p>Year of production</p>
            <p>Run time</p>
            <p>Actors</p>
            <p>Plot</p>

            </div>

            <div className="movieContentRight">

                <img src={this.props.poster2} alt={this.props.title2} title={this.props.title2}/>
                <p>{this.props.errorLoading2}</p>
                <p>{this.props.title2}</p>
                <p>{this.props.year2}</p>
                <p>{this.props.runtime2}</p>
                <p>{this.props.actorsList2}</p>
                <p>{this.props.plot2}</p>
            </div>

        </div>

    }
}
export default IndependentMovieInfo;

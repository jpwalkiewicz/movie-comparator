import React from 'react';

class IndependentMovieInfo extends React.Component {

    render() {
        return <div>
<div>
            <img src={this.props.poster2} alt={this.props.title2} title={this.props.title2}/>
            {this.props.errorLoading2}, Title: {this.props.title2}, {this.props.year2}, {this.props.runtime2}
            min, {this.props.actorsList2}, {this.props.plot2}
</div>
<div>

            <img src={this.props.poster1} alt={this.props.title1} title={this.props.title1} className="scale-down-left"/>

           Title: {this.props.errorLoading1}, {this.props.title1}, {this.props.year1}, {this.props.runtime1}
           min, {this.props.actorsList1}, {this.props.plot1}
</div>
        </div>

    }
}
export default IndependentMovieInfo;

import React from 'react';

class ContentInCommon extends React.Component {

    render() {
        return <div>
            <h1>
                {this.props.actorsListInCommon
                    ? `Actors in common: ${this.props.actorsListInCommon}`
                    : ""}
            </h1>

            <h1>
                {this.props.languageListInComon
                    ? `Languages in common: ${this.props.languageListInComon}`
                    : ""}
            </h1>
            <h1>
                {this.props.yearInCommon
                    ? `Year of production: ${this.props.yearInCommon}`
                    : ""}
            </h1>

        </div>
    }
}
export default ContentInCommon;

import React from 'react';

class ContentInCommon extends React.Component {

    render() {
        return <div>
            <h1>Wspólni aktorzy to: {this.props.actorsListInCommon}
                <br/>
                jezyk: {this.props.languageListInComon}</h1>

        </div>

    }
}
export default ContentInCommon;

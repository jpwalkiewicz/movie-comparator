import React from 'react';

class ContentInCommon extends React.Component {



    render() {


         if (this.props.actorsListInCommon) {
              var actors = <div><span className="inCommonTitle">Actors</span> <p>{this.props.actorsListInCommon}</p></div>
         } else {
               var actors = "";
         }



        if (this.props.actorsListInCommon || this.props.languageListInComon || this.props.yearInCommon || this.props.directorInCommon || this.props.runtimeInCommon) {
            return <div>
                <h1>
                    <p>What do they have in common:</p>
                    {actors}

                    <p>{this.props.languageListInComon
                            ? `Languages: ${this.props.languageListInComon}`
                            : ""}</p>

                    <p>{this.props.yearInCommon
                            ? `Year of production: ${this.props.yearInCommon}`
                            : ""}</p>

                    <p>{this.props.directorInCommon
                            ? `Director: ${this.props.directorInCommon}`
                            : ""}</p>
                    <p>{this.props.runtimeInCommon
                            ? `Runetime: ${this.props.runtimeInCommon} min`
                            : ""}</p>
                    <p>{this.props.productionInCommon
                            ? `Production: ${this.props.productionInCommon}`
                            : ""}</p>
                </h1>

            </div>
       } else {
            return null;
       }
    }
}
export default ContentInCommon;

import React from 'react';

class ContentInCommon extends React.Component {



    render() {


         if (this.props.actorsListInCommon) {
              var actors = <div><li><span className="inCommonTitle">Actors</span> <p>{this.props.actorsListInCommon}</p></li></div>
         } else {
               var actors = "";
         }

         if (this.props.languageListInComon) {
              var language = <div><li><span className="inCommonTitle">Language</span> <p>{this.props.languageListInComon}</p></li></div>
         } else {
               var language = "";
         }



        if (this.props.actorsListInCommon || this.props.languageListInComon || this.props.yearInCommon || this.props.directorInCommon || this.props.runtimeInCommon) {
            return <div>
                <h1>
                    <p>What do they have in common:</p>
                    <ul>
                    {actors}
                    {language}


                    </ul>


                </h1>

            </div>
       } else {
            return null;
       }
    }
}
export default ContentInCommon;

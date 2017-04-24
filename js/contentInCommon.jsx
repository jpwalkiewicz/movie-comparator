import React from 'react';

class ContentInCommon extends React.Component {



    render() {


         if (this.props.actorsListInCommon) {
              var actors = <div><span className="inCommonTitle">Actors</span> <p>{this.props.actorsListInCommon}</p></div>
         } else {
               var actors = "";
         }

         if (this.props.languageListInComon) {
              var language = <div><span className="inCommonTitle">Language</span> <p>{this.props.languageListInComon}</p></div>
         } else {
               var language = "";
         }

         if (this.props.yearInCommon) {
              var year =<div><span className="inCommonTitle">Year</span> <p>{this.props.yearInCommon}</p></div>
         } else {
               var year = "";
         }
         if (this.props.directorInCommon) {
              var director =<div><span className="inCommonTitle">Director</span> <p>{this.props.directorInCommon}</p></div>
         } else {
               var director = "";
         }



        if (this.props.actorsListInCommon || this.props.languageListInComon || this.props.yearInCommon || this.props.directorInCommon || this.props.runtimeInCommon) {
            return <div className="centerText row">
               <div className="col-4"></div>
                <h3 className="col-4">
                    <p>What do they have in common:</p>

                    {actors}
                    {language}s
                    {year}
                    {director}





                </h3>
                <div className="col-4"></div>

            </div>
       } else {
            return <div className="centerText">
            <h2>This movies have nothing in common</h2>
            </div>
       }
    }
}
export default ContentInCommon;

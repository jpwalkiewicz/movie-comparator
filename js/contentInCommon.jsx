import React from 'react';

class ContentInCommon extends React.Component {



    render() {

         if (this.props.actorsListInCommon) {
              var actors = <div><span className="inCommonInfo">Actors</span> <p>{this.props.actorsListInCommon}</p></div>
         } else {
               var actors = "";
         }

         if (this.props.languageListInComon) {
              var language = <div><span className="inCommonInfo">Language</span> <p>{this.props.languageListInComon}</p></div>
         } else {
               var language = "";
         }

         if (this.props.yearInCommon) {
              var year =<div><span className="inCommonInfo">Year</span> <p>{this.props.yearInCommon}</p></div>
         } else {
               var year = "";
         }
         if (this.props.directorInCommon) {
              var director =<div><span className="inCommonInfo">Director</span> <p>{this.props.directorInCommon}</p></div>
         } else {
               var director = "";
         }
         if (this.props.countryListInComon) {
              var countrie =<div><span className="inCommonInfo">Countries</span> <p>{this.props.countryListInComon}</p></div>
         } else {
               var countrie = "";
         }
         if (this.props.productionInCommon) {
              var production =<div><span className="inCommonInfo">Production</span> <p>{this.props.productionInCommon}</p></div>
         } else {
               var production = "";
         }


        if (this.props.actorsListInCommon || this.props.languageListInComon || this.props.yearInCommon || this.props.directorInCommon || this.props.runtimeInCommon) {
            return <div className="centerText row">
               <div className="col-2"></div>
                <div className="col-8">
                    <h3 >What do they have in common:</h3>
                    {actors}
                    {language}
                    {year}
                    {director}
                    {countrie}
                    {production}
                </div>
                <div className="col-2"></div>

            </div>
       } else {
            return <div className="centerText">
            <h2>This movies have nothing in common</h2>
            </div>
       }
    }
}
export default ContentInCommon;

// Include React
import React from 'react';

// Create the GrandChild Component
class Results extends React.Component {
  render(){

      var resultsLength = this.props.length;
      var resultsDisplay;


      if (resultsLength ===0){
        resultDisplay = (
          <div className="row">
              <h4> Please make a search</h4>
          </div>
          );
      } else {
        resultsDisplay = (this.props.results.map((element, i)=>{
          return(
              <div class="row" key={i}>
                <h4 className="headline">
                  {element.headline.main}
                </h4>
                <hr />
                <p>{element.lead_paragraph}</p>
                <a className="btn btn-default button" href={element.web_url} target="_blank"> View Article</a>
                </div>
            )
        }
        )) 
      }

    return (

      <div className="row">
      <div className="col-sm-12">

        <div className="panel panel-primary">

          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i> Top Articles</strong></h3>
          </div>

          <div className="panel-body" id="well-section">
          <h1> List of Results</h1>
          </div>

           <div className="panel-body">
                        {resultsDisplay}
                    </div>
        </div>
      </div>
    </div>





    );
  }
};

// Export the component back for use in other files
export default Results;
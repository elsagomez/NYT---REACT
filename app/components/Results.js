// Include React
import React from 'react';

// Create the GrandChild Component
class Results extends React.Component {
  render(){
    return (

      <div className="row">
      <div className="col-sm-12">

        <div className="panel panel-primary">

          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
          </div>

          <div className="panel-body" id="well-section">
          <h1> List of Results</h1>
          </div>
        </div>
      </div>
    </div>





    );
  }
};

// Export the component back for use in other files
export default Results;
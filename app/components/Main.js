// Include React
import React from 'react';

// Here we include all of the sub-components
import Query from "./children/Query"
import Search from "./children/Search"
import Results from "./children/Results"

import helpers from "./utils/helpers"


// Here we create Parent, our main component
class Main extends React.Component {

  constructor(props) {
        super(props);
        // Child has a state that follows the number of clicks
        this.state = {search: "",  startYear: "", endYear: "", results: ""};
    }


    componentDidUpdate(prevProps, prevState) {
        // If we have a new search term, run a new search
        if (prevState.search !== this.state.search) {
            console.log("UPDATED");

            helpers.runQuery(this.state.search).then(function (data) {
                if (data !== this.state.results) {
                    console.log(data);
                    this.setState({results: data});
                }
                // This code is necessary to bind the keyword "this" when we say this.setState
                // to actually mean the component itself and not the runQuery function.
            }.bind(this));


        }
    }
    setTerm(search) {
        this.setState({search: search});
    }

  // Here we describe this component's render method
  render() {
    return (

<div className="container">

    <div className="jumbotron" >
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    </div>
    <div>
    <h2> Aqui abajo les dejo el Child Search Component!</h2>
     <Search setTerm={this.setTerm.bind(this)} />
     </div>
     <div>
     <h2>Aqui abajo les del el child Results Component!</h2>
     <Results search={this.state.results}/>
     </div>
  </div>



    );
  }
};

// Export the component back for use in other files
export default Main;
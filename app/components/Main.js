// Include React
import React from 'react';

// Here we include all of the sub-components
import Search from "./Search"

// Here we create Parent, our main component
class Main extends React.Component {
  // Here we describe this component's render method
  render() {
    return (

<div className="container">

    <div className="jumbotron" >
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    </div>
    <div>
    <h2> Aqui abajo les dejo el Child Search Component!</h2>
     <Search />
     </div>
  </div>



    );
  }
};

// Export the component back for use in other files
export default Main;
// Include React
import React from 'react';
// Here we include all of the sub-components


// Create the Child Component




class Query extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      startYear: "",
      endYear: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 getInitialState() {
    return { search: "" };
  }

  handleChange(event) {
    let target =  event.target
    console.log(target.name);
    console.log(target.value);
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler

     var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    // var newState = {};
    // newState[event.target.id] = event.target.defaultValue;
    // this.setState(newState);
  }

  handleSubmit(event) {
    // preventing the form from trying to submit itself
    event.preventDefault();
    // Set the parent to have the search term
    console.log("Query target" + event.target);
    this.props.setTerm(this.state);
        this.setState({});
 
    // Clearing the input field after submitting
    
  }


  render() {
    console.log('this r', this)
    return (


          <div className="row">
      <div className="col-sm-12">
     

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
          </div>
          <div className="panel-body">

            <form role="form" onSubmit={this.handleSubmit} >

           
              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input type="text" value={this.state.search} className="form-control" id="search" onChange={this.handleChange}></input>
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Number of Records to Retrieve:</label>
                <select className="form-control" id="num-records-select">
              <option value="1">1</option>
        
              <option defaultValue="5">5</option>
              <option value="10">10</option>
            </select>
              </div>

           
              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>onChange={this.handleChange}
                <input type="text" value={this.state.startYear} className="form-control" id="startYear" onChange={this.handleChange}></input>
              </div>

             
              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input type="text" value={this.state.endYear} className="form-control" id="endYear" onChange={this.handleChange}></input>
              </div>

              <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

            </form>
          </div>
        </div>
        
      </div>
    </div>

    );
  }
};

// Export the component back htmlFor use in other files
export default Query;

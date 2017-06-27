import React from 'react';
import Results from './Result';
import Query from './Query';
import helpers from '../util/helpers';


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: {},
            results: []
        }
        this.changeSearchQuery = this.changeSearchQuery.bind(this);

        console.log(`constructor called`);
    }

    changeSearchQuery(searchQuery) {
        console.log(`Search component : ${searchQuery}`);
        console.log(searchQuery);
        this.setState({searchQuery: searchQuery})
    }

componentDidUpdate(prevProps, prevState) {
        console.log(`updating components`);
        if (prevState.searchQuery != this.state.searchQuery) {
            console.log("COmponent updated");
            helpers.searchArticles(this.state.searchQuery).then(function(results) {
                console.log('Search results', results);
                this.setState({results: results})

            }.bind(this));
        }

        // if (this.state.results == null && prevState.results != null) {
        //     console.log(`prev results not null`);
        //     this.setState({results: prevState.results})
        //
        // }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Query changeSearchQuery={this.setTerm}/>
                </div>

                <div className="row">
                    <Results results={this.state.results} />
                </div>
            </div>
        )
    }
}

export default Search;
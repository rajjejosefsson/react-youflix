import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchVideos} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);


        this.state = {search_term: ''};
        this.props.fetchVideos('for kids');

        // Important
        // when we don't use fat arrow callback function inside of the inputs onInputChange
        // we will need to bind (this) to the context
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(event) {
        this.setState({search_term: event.target.value});
    }


    onSearchSubmit(event) {
        event.preventDefault();
        this.props.fetchVideos(this.state.search_term);

        // reset input
        this.setState({search_term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSearchSubmit} className="input-group search-bar">
                <input
                    type="text"
                    placeholder="Search for a video"
                    className="form-control"
                    value={this.state.search_term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

export default connect(null, {fetchVideos})(SearchBar);
import React, {Component} from 'react';
import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyCOXw2H-dFMhHBebvfBsESrX8v88rSCaP8';


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            search_term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }



    onSearchSubmit(event) {
        event.preventDefault();

        const search_term = this.state.search_term;
        const url = `${ROOT_URL}/search?part=snippet&q=${search_term}&key=${API_KEY}`;
        const request = axios.get(url);

        request.then(response => {
            const videos = response.data.items;
            this.setState({videos: videos});
        });
    }


    onInputChange(event) {
        this.setState({search_term: event.target.value})
        this.props.onSearchTermChange(term);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSearchSubmit} className="input-group">
                    <input
                        type="text"
                        placeholder="Search for a video"
                        className="form-control"
                        value={this.state.search_term}
                        onChange={this.onInputChange}/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </form>
            </div>
        );
    }
}

export default SearchBar;


/*

 <form onSubmit={this.onSearchVideo} className="input-group">
 <input type="text" placeholder="Search for a video" className="form-control"/>
 <span className="input-group-btn">
 <button type="submit" className="btn btn-secondary">Search</button>
 </span>
 </form>

 */

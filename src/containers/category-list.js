import React, {Component} from 'react';
import Radium from 'radium';
import CategoryCard from '../components/category-card';
import {connect} from 'react-redux';
import {fetchVideos} from '../actions/index';

class CategoryList extends Component {


    constructor(props) {
        super(props);
        this.onCategory = this.onCategory.bind(this);
    }


    onCategory(selected) {

        if (true) {
            // do check here
        }

        let category = '';

        switch (selected) {
            case 'Kids':
                category = 'Kids';
                break;
            case 'Funny':
                category = 'Funny Kid Videos';
                break;
            case 'Math':
                category = 'Math for kids';
                break;
            case 'English':
                category = 'English for kids';
                break;
            case 'Bablarna':
                category = 'Bablarna';
                break;
            case 'Music':
                category = 'Music for kids';
                break;
            case 'Animated':
                category = 'Animated for kids';
                break;
            case 'Cartoon':
                category = 'Cartoon for kids';
                break;
            default:
                category = 'For kids'
        }


        this.props.fetchVideos(category);
    }


    renderList() {
        const categories = ['Kids', 'Funny', 'Math', 'English', 'Bablarna', 'Music', 'Animated', 'Cartoon'];

        return categories.map(category => {
            return (
                <CategoryCard key={category} category={category}
                              onCategorySelect={selected => this.onCategory(selected)}/>
            );
        });
    }


    render() {


        return (
            <div className="row center-xs">
                {this.renderList()}
            </div>
        );
    }

}


const styles = {
    card: {
        transition: '1s transform',
        transformOrigin: '93px 0px',
        ':hover': {
            transform: 'scale(1.2)',
        },
    },
    cardImage: {
        height: '150px',
        overflow: 'hidden'
    },
};


export default connect(null, {fetchVideos})(Radium(CategoryList));
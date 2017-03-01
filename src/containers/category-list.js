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

        this.props.fetchVideos(selected);
    }


    renderList() {
        const categories = ['Kids', 'Funny', 'Math', 'Language', 'Bablarna', 'Music', 'Animated', 'Cartoon'];

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
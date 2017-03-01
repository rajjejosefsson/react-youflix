import React, {Component} from 'react';
import Radium from 'radium';
import CategoryCard from './category-card';

class CategoryList extends Component {


    constructor(props) {
        super(props);
    }

    onCategory() {

    }




    renderList() {
        const categories = ['action', 'kids', 'fun', 'math', 'language', 'swedish', 'science', 'animated', '"Boys"', '"Girls"'];

        return categories.map(category => {
            return (
                <CategoryCard key={category} category={category}/>
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


export default Radium(CategoryList);
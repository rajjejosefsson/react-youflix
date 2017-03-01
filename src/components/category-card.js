import React from 'react';
import Radium from 'radium';

const CategoryCard = ({onCategorySelect, category}) =>  {


        return (
            <div
                className="row middle-xs center-xs"
                style={styles.categoryCard}
                onClick={() => onCategorySelect(category)}>
                <p style={styles.textStyle}>{category}</p>
            </div>
        );

};


const styles = {
    categoryCard: {
        width: '250px',
        height: '200px',
        backgroundColor: '#4c4c4c',
        margin: '10px 20px',
        borderRadius: '8px',
        transition: '0.5s transform',
        transformOrigin: '93px 0px',
        cursor: 'pointer',
        ':hover': {
            transform: 'scale(1.05)',
        }
    },
    textStyle: {
        fontSize: '24px',
        fontWeight: 'bold'
    }
};


export default Radium(CategoryCard);
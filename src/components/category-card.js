import React from 'react';
import Radium from 'radium';


const CategoryCard = (props) => {

    return(
        <div className="row middle-xs center-xs" style={styles.categoryCard}>
                <p style={styles.textStyle}>{props.category}</p>
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
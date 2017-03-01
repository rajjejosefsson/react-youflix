import React from 'react';
import Radium from 'radium';


const TopNav = () => {
    return (
        <nav style={styles.myTopNav} className="navbar navbar-toggleable-md navbar-inverse fixed-top">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand" href="#">YouFlix!</a>
            <div className="collapse navbar-collapse navbar-right" id="navbarCollapse">

            </div>

            <div className="rounded-circle">
                <img  style={styles.profileImage}  className="img-circle" src="https://organicthemes.com/demo/profile/files/2012/12/profile_img.png" />

            </div>
        </nav>
    );
};


const styles = {
    myTopNav: {
        backgroundColor: '#ab0404',
    },
    profileImage: {
        height: '50px',
        width: '50px',
        marginRight: '20px'

    }
};


export default Radium(TopNav);
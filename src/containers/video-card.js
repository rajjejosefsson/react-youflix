import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectedVideo} from '../actions/index';
import Radium from 'radium';

class VideoCard extends Component {


    constructor(props) {
        super(props);

    }

    showVideo(video) {
        this.props.selectedVideo(video);
    }


    render() {

        if (!this.props.video) {
            return <div>loading...</div>
        }

        const video = this.props.video;
        const id = this.props.video.id.videoId;
        const title = this.props.video.snippet.title;
        const url = this.props.video.snippet.thumbnails.default.url;

        return (
            <div style={styles.card}
                 onClick={() => this.showVideo(video)}>
                <div style={styles.imageHolder}>
                    <img style={styles.cardImage} src={url} alt=""/>
                </div>
            </div>
        );
    }

}


var styles = {
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


export default connect(null, {selectedVideo})(Radium(VideoCard));
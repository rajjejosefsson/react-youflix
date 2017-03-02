import React, {Component} from 'react';
import {connect} from 'react-redux';


class VideoPlayer extends Component {

    constructor(props){
        super(props);
        console.log('player props', props)
    }

    render() {
        if (!this.props.video) {
            return <div></div>
        }

        const videoId = this.props.video.id.videoId;
        const description = this.props.video.snippet.description;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-player-holder">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <p>{description}</p>
            </div>
        );
    }
}


function mapStateToProps({video}) {
    return {video};
}


export default connect(mapStateToProps)(VideoPlayer);



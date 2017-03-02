import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectedVideo, fetchVideos} from '../actions/index';
import Radium from 'radium';
import Slider from 'react-slick';


class VideoList extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.initVideo();
        this.newData = this.newData.bind(this);
    }

    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
        console.log('prev')
    }

    showVideo(video) {
        this.props.selectedVideo(video);
    }

    initVideo() {
        let starterVideo = {
            id: {
                videoId: 'cqFITwR6bVY'
            },
            snippet: {
                description: 'Welcome to YouFlix!'
            }
        };
        this.props.selectedVideo(starterVideo);
    }

    newData() {
        this.props.fetchVideos(this.props.term, this.props.token);
        console.log(this.props.videos)
    }


    render() {

        if (!this.props.videos) {
            return <div></div>
        }


        let self = this;

        const settings = {
            beforeChange: function (currentSlide, nextSlide) {
                console.log('before change', currentSlide);

                if (currentSlide !== 0 && currentSlide % 10 === 0) {
                    console.log('DO IT');

                    self.newData();


                    //this.props.fetchVideos('search term', 'next token')
                }
            },
            afterChange: function (currentSlide) {
                //console.log('after change', currentSlide);
            },
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            swipeToSlide: true,
        };


        return (
            <div className="row center-xs" style={{padding: '0px'}}>
                <div className="row middle-xs">

                    <div className="col-xs-1">
                        <div className="box">
                            <i className="fa fa-arrow-left" onClick={this.previous}></i>
                        </div>
                    </div>

                    <div className="col-xs-10">
                        <div className="box">


                            { this.props.videos.length &&
                                <Slider {...settings} ref={c => this.slider = c } className="myslider">

                                    {this.props.videos.map(video => {
                                            var url = video.snippet.thumbnails.high.url;
                                            return <img onMouseEnter={this.handleRightClick}
                                                        onClick={() => this.showVideo(video)}
                                                        key={video.etag}
                                                        src={url}
                                                        style={styles.imageStyle}
                                                        className="tile"
                                            />


                                    })}
                                </Slider>
                            }

                        </div>
                    </div>

                    <div className="col-xs-1">
                        <div className="box">
                            <i className="fa fa-arrow-right" onClick={this.next}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    imageStyle: {
        width: '300px',
        margin: '0 3px',
        transition: '1s transform',
        transformOrigin: '150px 150px',
        cursor: 'pointer',
        ':hover': {
            transform: 'scale(1.1)',
        }
    },

};


function mapStateToProps({videos, nextPageToken}) {
    console.log("WORKS OR", nextPageToken);

    let term;
    let token;

    if (nextPageToken != null) {
        token = nextPageToken[0];
        console.log(token);

        term = nextPageToken[1];
        console.log(term);

    }
    return {videos, term, token};
}


export default connect(mapStateToProps, {selectedVideo, fetchVideos})(Radium(VideoList));


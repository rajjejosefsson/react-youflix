import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectedVideo} from '../actions/index';
import Radium from 'radium';
import Slider from 'react-slick';


class VideoList extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
    }

    showVideo(video) {
        this.props.selectedVideo(video);
    }


    render() {

        if (!this.props.videos) {
            return <div></div>
        }

        const settings = {
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
                            <i className="fa fa-arrow-left"  onClick={this.previous}></i>
                        </div>
                    </div>

                    <div className="col-xs-10">
                        <div className="box">
                            <Slider {...settings} ref={c => this.slider = c } className="myslider">
                                {this.props.videos.map(video => {
                                    console.log(video);
                                    var url = video.snippet.thumbnails.high.url;
                                    return <img onMouseEnter={this.handleRightClick}
                                                onClick={() => this.showVideo(video)}
                                                key={video.etag} src={url}
                                                style={styles.imageStyle}
                                                className="tile"
                                    />
                                })}
                            </Slider>
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
        ':hover': {
            transform: 'scale(1.1)',
        }
    },

};


function mapStateToProps({videos}) {
    return {videos};
}


export default connect(mapStateToProps, {selectedVideo})(Radium(VideoList));


/*
 renderVideoItems() {
 return this.props.videos.map(video => {
 return (
 <VideoCard key={video.etag} video={video}/>
 )
 });
 }
 */



/*                 {this.renderVideoItems()}
 */

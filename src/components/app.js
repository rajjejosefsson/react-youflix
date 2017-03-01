import React, {Component} from 'react';
import VideoList from '../containers/video-list';
import SearchBar from '../containers/search-bar';
import VideoPlayer from '../containers/video-player';
import CategoryList from './category-list';
import TopNav from './top-nav';

export default class App extends Component {
    render() {
        return (
            <div className="youflix-container">


                <TopNav/>



                <div className="center-xs header-container">
                    <h3>YouFlix!</h3>
                    <h5>Youtube à la Netflix style</h5>
                </div>


                <div className="row center-xs search-bar-container">
                    <SearchBar/>
                </div>

                <div className="video-list-container">
                    <VideoList/>
                </div>


                <div className="video-player-container">
                    <VideoPlayer/>
                </div>

                <div className="video-list-container">
                    <VideoList/>
                </div>

                <div className="categories-container">
                    <CategoryList/>
                </div>


            </div>
        );
    }
}

import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = { 
    videos: [],
    selectedVideo: null

  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
    //console.log(response.data.items);
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
    //console.log('From the App!', video);
  }

  render(){
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <div className="video-con">
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}></VideoList>
        </div>
        
      </div>
    )
  }
  
}

export default App;
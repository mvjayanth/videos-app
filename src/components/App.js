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

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     });

    //console.log(response.data.items);
  }

  componentDidMount(){
    this.onTermSubmit('telugu video songs');
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
    //console.log('From the App!', video);
  }

  render(){
    return (
      <div>
      <div className="search-bar">
        <div className="container">
          <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        </div>
      </div>
      <div className="container">
        <div className="video-con row">
        <div className="col-12 col-lg-8 col-md-6"><VideoDetail video={this.state.selectedVideo}></VideoDetail></div>
        <div className="col-12 col-lg-4 col-md-6"><VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}>
          </VideoList></div>
        </div>
      </div>
      </div>
    )
  }
  
}

export default App;
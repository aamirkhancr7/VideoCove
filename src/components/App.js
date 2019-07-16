import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onClickSubmit = async (searchItem) => {
        let KEY = 'AIzaSyBgCTY8pFd2wYQsrM__kBs6hGRxE5hpdtA';
        
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 50,
                key: KEY,
                q: searchItem
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[(Math.floor(Math.random() * 20))]
        });
    };

    selectedVideo = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="app">
                {/* reference to the Searchbar */}
                <SearchBar onClickSubmit={this.onClickSubmit} />

                    <div className="video-main">
                        {/* The selected video detail is being displayed */}
                        <VideoDetail video={this.state.selectedVideo} />
                        {/* In reference to videoList to display the list of videos */}
                        <VideoList selectedVideo={this.selectedVideo} videos={this.state.videos} />
                    </div>
                </div>
        );
    }
}
export default App;

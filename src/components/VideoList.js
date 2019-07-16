import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectedVideo }) => {

    const renderedList = videos.map((video, index) => {
        return <VideoItem
            key={index}
            selectedVideo={selectedVideo}
            video={video} />;
    });

    return (
        <div className="video-list">
            {renderedList}
        </div>
    );
}

export default VideoList;

import React from 'react';

const VideoItem = ({ video, selectedVideo }) => {
    return (
        <div onClick={() => { selectedVideo(video) }} className="video-item item" >
            <div className="video-thumb">
                <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title} />
                <div className="content">
                    <div className="header video-item-title"> {video.snippet.title}
                </div>
            </div>
            </div>

        </div>
    );
}

export default VideoItem;

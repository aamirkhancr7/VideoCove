import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div> </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-detail">
            <div className="video-player ui embed">
                <iframe title="video-player" src={videoSrc} />
            </div>
            <div className="ui segment video-description">
                <h4 className="header">
                    {video.snippet.title}
                </h4>
                <p className="description">
                    {video.snippet.description}
                </p>
            </div>
        </div>
    );
}

export default VideoDetail;

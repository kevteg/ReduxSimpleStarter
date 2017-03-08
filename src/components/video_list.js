import React from 'react'
import VideoListItem from './video_list_items'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (<VideoListItem
     onVideoSelect={props.onVideoSelect}
     key={video.etag}
     video={video}/>
    );
  });

  return (
    //React is very good at rendering components lists
    <div className="col-lg-6">
     <ul className="list-group">
     {videoItems}
    </ul>
    </div>
  );
};
export default VideoList;

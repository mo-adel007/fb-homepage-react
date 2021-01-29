import React from "react";
import StoryReel from "./storyReel";
import MessageSender from "./messageSender";
import Post from "./post";
import "./feed.css";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.0-9/46445051_2392015487701276_2118620265180037120_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=3qdUlVeXx90AX_q-mb3&_nc_ht=scontent.fcai19-2.fna&oh=cabcf5685f89320b8864b9cd613c6062&oe=603A1076"
        message="yoo this is a message"
        timestamp="time"
        imgName="imgName"
        username="Mohamed"
      />
      {/* {postsData.map((entry) => {
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />;
      })} */}
    </div>
  );
}

export default Feed;

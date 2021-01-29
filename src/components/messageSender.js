import React, { useState } from "react";
import { Avatar, Input } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./messageSender.css";
const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("null");
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("Submit");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.0-9/46445051_2392015487701276_2118620265180037120_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=3qdUlVeXx90AX_q-mb3&_nc_ht=scontent.fcai19-2.fna&oh=cabcf5685f89320b8864b9cd613c6062&oe=603A1076" />
        <form>
          <input
            type="text"
            className="messageSender__input"
            placeholder="What's on your mind?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button className="" onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;

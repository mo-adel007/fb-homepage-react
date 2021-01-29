import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontOutlined from "@material-ui/icons/StorefrontOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./header.css";
const header = () => {
  return (
    <div className="header">
      <div className="header-left">
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/800px-Facebook_f_Logo_%28with_gradient%29.svg.png"
          alt="facebook-logo"
        ></img> */}
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search Facebook" type="text" />
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontsize="large" />
        </div>
        <div className="header__option ">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header__option ">
          <SubscriptionsOutlinedIcon fontsize="large" />
        </div>
        <div className="header__option ">
          <StorefrontOutlined fontsize="large" />
        </div>
        <div className="header__option ">
          <SupervisedUserCircleIcon fontsize="large" />
        </div>
      </div>
      <div className="header__right">
        <div classname="header__info">
          <Avatar />
          <h4>Mohamed Adel</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <ExpandMoreIcon />
        <IconButton></IconButton>
      </div>
    </div>
  );
};

export default header;

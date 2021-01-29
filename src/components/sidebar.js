import React from "react";
import "./sidebar.css";
import SidebarRow from "./sidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.0-9/46445051_2392015487701276_2118620265180037120_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=3qdUlVeXx90AX_q-mb3&_nc_ht=scontent.fcai19-2.fna&oh=cabcf5685f89320b8864b9cd613c6062&oe=603A1076"
        title="Muhamed Adel"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />

      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
};

export default Sidebar;

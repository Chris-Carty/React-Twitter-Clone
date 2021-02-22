import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1363585976522600449"} />
        <TwitterTweetEmbed tweetId={"1361542266163130369"} />
        <TwitterTweetEmbed tweetId={"1300164892570333186"} />

        <TwitterTimelineEmbed
          source="profile"
          screenname="elonmusk"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;

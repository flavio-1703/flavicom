import React from 'react';
//Style
import './style/ChatHeader.css';
//icons
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
//utils

const ChatHeader = ({channelName}) => {

    return (
        <div className="chatheader">
            <div className="chatheader__left">
                <BubbleChartIcon />
                <h3>{channelName}</h3>
            </div>
            <div className="chatheader__right">
                <NotificationsIcon className="chatheader__right__icon" />
                <PeopleIcon className="chatheader__right__icon" />
                <LocationOnIcon className="chatheader__right__icon" />

                <div className="chatheader__search">
                    <input type="text" placeholder="Search"/>
                    <SearchIcon />
                </div>
                <HelpIcon />
            </div>
        </div>
    );
}

export default ChatHeader;
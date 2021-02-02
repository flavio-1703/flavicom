import React from 'react';
//Style
import './style/SideBar.css';
//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';

const SideBar = (props) => {


    return (
        <div className="sidebar">
            {/*Top */}
            <div className="sidebar__top">
                <h3>Chat Room</h3>
                <ExpandMoreIcon className="upper-icons" />
            </div>
            {/*Channels */}
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon className="upper-icons" />
                        <h4>text channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>

                <div className="sidebar__channelsList">
                {props.children}
                 </div>
            </div>
            {/*Voice */}
            <div className="sidebar__profile">
                <Avatar />
                <div className="sidebar__profileInfo">
                    <h3>Username</h3>
                    <p>@usernameId</p>
                </div>
                <div className="sidebar__profileIcons">
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
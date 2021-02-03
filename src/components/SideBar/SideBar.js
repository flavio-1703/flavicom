import React, { useEffect, useState } from 'react';
//Style
import './style/SideBar.css';
//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//comp
import SideBarChannel from '../SideBarChannel/SideBarChannel';
//util
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import db, { auth } from '../../firebase';

const SideBar = () => {

    const user = useSelector(selectUser);
    const [channels, setChannels ] = useState([]);

    useEffect( () => {
        db.collection("channels").onSnapshot( (snapshot) => {
            setChannels(snapshot.docs.map( (doc) => ({
                id: doc.id,
                channel: doc.data(),
            })))
        })
    }, []);
    
    const handleAddChannel = () => {
        const channelName = prompt('Enter a new channel name.');

        if(channelName) {
            db.collection('channels').add(
                {
                    channelName: channelName,
                }
            );
        }
    };

    return (
        <div className="sidebar">
            {/*Top */}
            <div className="sidebar__top">
                <h3>Flavicom</h3>
                <ExpandMoreIcon className="upper-icons" />
            </div>
            {/*Channels */}
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon className="upper-icons" />
                        <h4>text channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel"/>
                </div>

                <div className="sidebar__channelsList">
                {channels.map(({id, channel}) => {
                    return(
                    <SideBarChannel key={id} id={id} channelName={channel.channelName} />
                    
                    );
                    
                })}
                </div>
            </div>
            {/*Voice */}
            <div className="sidebar__profile">
                <Avatar src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>@{user.uid.substring(0 , 5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <SettingsIcon />
                    <ExitToAppIcon
                    onClick={ () => auth.signOut()} />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
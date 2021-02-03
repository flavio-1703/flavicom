import React from 'react';
//style
import './style/SideBarChannel.css';
//icons
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
//utils
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../features/appSlice';

const SideBarChannel = ({id, channelName}) => {

    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" onClick={ () => dispatch(setChannelInfo
           ({
                channelId: id,
                channelName: channelName,
           }))
        }>
            <BubbleChartIcon className="sidebarChannel__icon" />
            <h4>{channelName}</h4>
        </div>
    );
}

export default SideBarChannel;
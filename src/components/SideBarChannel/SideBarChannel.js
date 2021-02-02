import React from 'react';
//style
import './style/SideBarChannel.css';
//icons
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

const SideBarChannel = ({id, channel}) => {


    return (
        <div className="sidebarChannel">
            <BubbleChartIcon className="sidebarChannel__icon" />
            <h4>channel</h4>
        </div>
    );
}

export default SideBarChannel;
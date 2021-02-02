import React from 'react';
//Icons
import { Avatar } from '@material-ui/core';
//Style
import './style/Message.css';


const Message = () => {

    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>Username
                    <span className="message__timestamp">
                        timestamp
                    </span>
                </h4>
                <p>message</p>
            </div>
        </div>
    );
}

export default Message;
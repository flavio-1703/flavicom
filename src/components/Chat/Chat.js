import React from 'react';
//style
import './style/Chat.css';
//components
import Message from '../Message/Message';
//Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';

const Chat = (props) => {

    return (
        <div className="chat">
            {/*Chat header */}
            {props.children}
            {/*Chat messages */}
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            {/*Chat input */}
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input type="text" placeholder="Message"/>
                    <button className="chat__inputButton" type="submit">Sent Message</button>
                </form>
                <div className="chat__inputIcons">
                    <EmojiEmotionsIcon fontSize="large" className="chat__inputIcon" />
                    <GifIcon fontSize="large" className="chat__inputIcon" />
                    <CardGiftcardIcon fontSize="large" className="chat__inputIcon" />
                </div>
            </div>     
        </div>
    );
}

export default Chat;
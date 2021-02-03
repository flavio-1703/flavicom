import React, { useEffect, useState } from 'react';
//style
import './style/Chat.css';
//components
import Message from '../Message/Message';
import ChatHeader from '../ChatHeader/ChatHeader';
//Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
//utils
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import db from '../../firebase';
import firebase from 'firebase';

const Chat = () => {

    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect( () => {
        if(channelId) {
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()));
        })
        }
        
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });
        setInput('');
    };

    return (
        <div className="chat">
            {/*Chat header */}
            <ChatHeader channelName={channelName} />
            {/*Chat messages */}
            <div className="chat__messages">
                {messages.map((message)=> {
                    return( 
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    /> 
                    );
                })}
            </div>
            {/*Chat input */}
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input
                    disabled={!channelId}
                    onChange={e => setInput(e.target.value)}
                    value={input} 
                    type="text" 
                    placeholder={`Message @${channelName}`}/>
                    <button
                    onClick={sendMessage} 
                    className="chat__inputButton" 
                    type="submit">Sent Message</button>
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
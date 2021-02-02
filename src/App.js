import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
//components
import SideBar from './components/SideBar/SideBar';
import SideBarChannel from './components/SideBarChannel/SideBarChannel';
import ChatHeader from './components/ChatHeader/ChatHeader';

function App() {
  return (
    <div className="app">
      {/*Sidebar */}
      <SideBar>
        <SideBarChannel />
        <SideBarChannel />
        <SideBarChannel />
        <SideBarChannel />
      </SideBar>
      {/*Chat */}
      <Chat>
        <ChatHeader />
      </Chat>
    </div>
  );
}

export default App;

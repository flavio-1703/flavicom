import React, {useEffect} from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
//components
import SideBar from './components/SideBar/SideBar';
import SideBarChannel from './components/SideBarChannel/SideBarChannel';
import ChatHeader from './components/ChatHeader/ChatHeader';
import { useSelector, useDispatch } from 'react-redux';
import {selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import {auth} from './firebase';
import {login, logout} from './features/userSlice';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect( () => {
    auth.onAuthStateChanged( (authUser) => {
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
      <>
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
      </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

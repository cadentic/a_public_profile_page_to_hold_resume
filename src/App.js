import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './components/Header/Header1';
import ChatIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatView from './components/Chat/Chat';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// Styles
const Wrapper = styled.div`
    width: 100%;
    background: #4d4d4d;
    display:flex;
    margin-left:0px;
    transition-property: margin-left;
    transition-duration:0.125s;
    transition-timing-function: linear;

    ${props => props.bodyOuter && css`
      height: inherit;
      background: #4d4d4d;
      display: flex;
      justify-content: space-between;
    `}
    ${props => props.bodyInner && css`
      height: inherit;
      width: 1236px;
      background: #20242C;
    `}
    ${props => props.sideBarOpen && css`
      margin-left:210px;
      transition-property: margin-left;
      transition-duration:0.125s;
      transition-timing-function: linear;
      width:80%;
    `}
  `;
const SideBar = styled.div`
    width: 19px;
    background: #4169E1;
    height: 100%;
  `;
const ChatButton = styled.button`
    position:fixed; 
    right:10px; 
    bottom:10px;
    border-radius: 60px;
    background-color: red;
    width:70px;
    height:70px;
  `
const ChatViewWrapper = styled.div`
    position:fixed; 
    right:20px; 
    bottom:80px;
    ${props => props.hidden && css`
      visibility:hidden
    `}
  `

// Render
function App(props) {

  const [isChatVisible, setIsChatVisible ] = useState(false)
  const [sideBarOpen, setSideBarOpen]  =useState(false)
  const [videoVisible, setVideoVisible] = useState(true)
  useScrollPosition(({ prevPos, currPos }) => {
    if(currPos.y<-160){
      setVideoVisible(false)
    }else{
      setVideoVisible(true)
    }
  })

  const toggleSidebarOpen = () => {
    setSideBarOpen(!sideBarOpen)
  }

  return (
    <StylesProvider injectFirst>
      <Navbar toggleSidebar={toggleSidebarOpen} isvideoVisible={videoVisible} />
      <Wrapper bodyOuter>
        <SideBar />
        <Wrapper sideBarOpen={sideBarOpen}  bodyInner>
          {<Header1 showMenu={!videoVisible} />}
        </Wrapper>
        <SideBar />
        <ChatViewWrapper hidden={!isChatVisible}>
          <ChatView />
        </ChatViewWrapper>
        <ChatButton onClick={()=>{setIsChatVisible(!isChatVisible)}}>
          <ChatIcon fontSize='large' outlined style={{ color: 'white', marginLeft: '1px' }} />
        </ChatButton>
      </Wrapper>
    </StylesProvider>
  );
}

export default App;

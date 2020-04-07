import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Player, BigPlayButton, ControlBar, PlayToggle, ProgressControl, DurationDisplay, CurrentTimeDisplay, TimeDivider, VolumeMenuButton, FullscreenToggle, CustomMenu} from 'video-react';
import "../../../../node_modules/video-react/dist/video-react.css"; // import css
import Poster1 from "../../../assets/poster_1.png";
import Poster2 from "../../../assets/poster_2.png";
import Poster3 from "../../../assets/poster_3.png";
import DownloadButton from './CustomButton';


// Styles
const Wrapper = styled.div`
    ${props => props.main && css`
        width: 100%;
        height: 225px;
        box-sizing: border-box;
        border-right: 9px solid #ED1C24;
        display: flex;
        @media screen and (max-width:800px){
          width: inherit;
          height: inherit;
          box-sizing: border-box;
          border-top: 9px solid #ED1C24;
          border-bottom: 9px solid #ED1C24;
          border-right: 9px solid #ED1C24;
          display: flex;
          flex-direction:column;
        }
    `}
    ${props => props.push && css`
        transition: 350ms;
        transition-timing-function: ease-out;
        width: ${props => props.dropdown ? `280px` : `9px`};
        background: #ED1C24;
    `}
    ${props => props.banner && css`

        @media screen and (max-width:800px){
          width: 100%;
          height: inherit;
          display: flex;
          flex-direction:column;
        }
       

        display: -webkit-box;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row nowrap;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width:100%
    `}
`;

const VideoWrapper = styled.div`

    @media screen and (max-width:800px){
      width: 100%;
      height: 100%;
      max-width:100%
    }

    @media screen and (min-width:800px){
      display: grid;
      margin: auto;
      position: relative;
      -webkit-box-flex: 1;
      flex: 1;
      text-align: center;
      color: white;
      -webkit-transition: .3s;
      transition: .3s;
      max-width: 35%;
      height: 100%;
      min-width: 10%;

      :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center bottom;
        background-size: cover;
        z-index: -1;
      }
  
      :hover {
        -webkit-transition: .5s;
        transition: .5s;
        max-width: 45% !important;
        -webkit-box-flex: 2;
        flex-grow: 2;
        cursor: pointer;
      }

    }

    

    ${props => props.one && css`
    h2{
        display: ${props.videoState ? `none` : `block`};
        position: absolute;
        top: 57.5%;
        left: 25%;
        width: 50%;
        text-align: center;
        color: white;
        font-family: arial;
        font-weight: normal;
        font-size: 15px;
        z-index: 5;
    }
    `}
    ${props => props.two && css`
        @media screen and (min-width:800px){
          border-right: 9px solid red;
          border-left: 9px solid red;
        }
        h2{
            display: ${props.videoState ? `none` : `block`};
            position: absolute;
            top: 50.5%;
            left: 1%;
            width: 98%;
            text-align: center;
            z-index: 5;
            color: white;
            font-family: arial;
            font-weight: normal;
            font-size: 25px;
        }
    `}
`;

const VideoPlayer = styled(Player)`
    ${props => props.one && css`
        padding-top: 30% !important;
        min-height: 225px;
        max-height: 225px;

        .video-react-big-play-button{
            border: 0.1rem solid #FF0000;
            box-shadow: inset 0 0 1px 2px #FF0000;
        }

        .video-react-big-play-button:before {
            position: relative;
            left: .2px;
            top: .3px;
        }
    `}
    ${props => props.two && css`
        padding-top: 15% !important;
        min-height: 225px;
        max-height: 225px; 

        .video-react-big-play-button{
            border: 0.1rem solid #FF0000;
            box-shadow: inset 0 0 1px 2px #FF0000;
        }
        
        .video-react-big-play-button:before {
            width: 1.6em;
            position: relative;
            left: .5px;
            top: .42px;
        }
        
        .video-react .video-react-control:before {
            font-size: 20px !important;
            line-height:20px !important;
            padding:5px !important;
            border: 2px outset rgba(39, 20, 20, 0.856) !important;
           
          }
          
          .video-react .video-react-time-control {
            -webkit-box-flex: none !important;
            -moz-box-flex: none !important;
            -webkit-flex: none !important;
            -ms-flex: none !important;
            flex: none !important;
            font-size: 15px !important;
            line-height:15px !important;
            min-width: 2em !important;
            width: auto !important;
            padding-left: 6px !important;
            padding-right: 4px !important;
            margin-top: 10px !important;
          } 
          
          .video-react .video-react-time-divider {
            line-height: 15px  !important;
            font-size: 15px !important;
            min-width: initial !important;
            padding: 0 !important;
          } 
          
          .video-react .video-react-progress-control:hover .video-react-progress-holder {
            font-size: 23px !important;
          } 
          
          .video-react .video-react-progress-control:hover .video-react-time-tooltip,
          .video-react .video-react-progress-control:hover .video-react-mouse-display:after,
          .video-react .video-react-progress-control:hover .video-react-play-progress:after {
            visibility: visible  !important;
            font-size: 14px !important;
          } 
          
          
          .video-react .video-react-progress-control .video-react-mouse-display {
            display: none !important;
            position: absolute !important;
            width: 20px !important;
            height: 100% !important;
            background-color: #000 !important;
            z-index: 1 !important;
          } 
          
          .video-react .video-react-progress-control {
            -webkit-box-flex: auto !important;
            -moz-box-flex: auto !important;
            -webkit-flex: auto !important;
            -ms-flex: auto !important;
            flex: auto !important;
            display: -webkit-box !important;
            display: -webkit-flex !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-align: center !important;
            -webkit-align-items: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            min-width: 4em !important;
            font-size: 20px !important;
          border: 2px outset rgba(39, 20, 20, 0.856) !important;
            padding-top: 4px !important;
          } 
          
          .video-react .video-react-control-bar {
            display: none !important;
            position: absolute !important;
            margin: auto !important;
            left: 0 !important;
            right: 0 !important;
            width: 10.6cm !important;
            bottom: 0 !important;
            height: 3em !important;
            background color:none !important;
            background color:none !important;
            background: rgba(233, 195, 195, 0.1) !important;
          } 
          
          .video-react .video-react-volume-level:before {
            position: absolute !important;
            font-size: 20px !important;
          }
          
          .video-react .video-react-volume-level {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            background-color: #fff !important;
            font-size: 20px !important;
          } 
          
          .video-react .video-react-progress-control {
            -webkit-box-flex: auto !important;
            -moz-box-flex: auto !important;
            -webkit-flex: auto !important;
            -ms-flex: auto !important;
            flex: auto !important;
            display: -webkit-box !important;
            display: -webkit-flex !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-align: center !important;
            -webkit-align-items: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            min-width: 4em !important;
            font-size: 20px !important;
            margin-top: 2.6px !important;
          } 
          
          .video-react {
            display: block  !important;
            vertical-align: top !important;
            box-sizing: border-box !important;
            color: rgb(161, 152, 152) !important;
            background-image: url("https://us.123rf.com/450wm/annotee/annotee1502/annotee150200076/36188543-a-background-texture-of-dark-brown-colored-leather-vignette.jpg?ver=6") !important;
            position: relative !important;
            font-size: 10px !important;
            line-height: 1 !important;
            font-family: serif, Times, "Times New Roman" !important;
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
          } 
          
          
          .video-react .video-react-time-tooltip,
          .video-react .video-react-mouse-display:after,
          .video-react .video-react-play-progress:after {
            visibility: hidden !important;
            pointer-events: none !important;
            position: absolute !important;
            top: -2em !important;
            right: -1.9em !important;
            font-size: 0.9em !important;
            color: rgb(255, 255, 255) !important;
            content: attr(data-current-time) !important;
            padding: 3px 6px !important;
            background-color: rgb(2, 2, 2) !important;
            background-color: rgba(0, 0, 0, 0.8) !important;
            -webkit-border-radius: 0.3em !important;
            -moz-border-radius: 0.3em !important;
            border-radius: 0.3em !important;
          } 
          
          .video-react .video-react-slider {
            outline: 0 !important;
            position: relative !important;
            cursor: pointer !important;
            padding: 0 !important;
            margin: 0 0.45em 0 0.45em !important;
            background-color: rgb(24, 25, 25) !important;
            background-color: rgba(0, 0, 0, 0.87) !important;
          } 
          
          
          .video-react .video-react-play-progress {
            background-color: #6d7b8b !important
          
          } 
          
          
          .video-react .video-react-load-progress div {
            background: white !important;
            background: rgba(13, 13, 13, 0.62) !important;
          } 
          
          
          .video-react .video-react-mute-control,
          .video-react .video-react-volume-menu-button {
            cursor: pointer !important;
            -webkit-box-flex: none !important;
            -moz-box-flex: none !important;
            -webkit-flex: none !important;
            -ms-flex: none !important;
            flex: none !important;
            border: 2px outset rgba(39, 20, 20, 0.856) !important;
          }
          
          .video-react-icon-volume-up:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-up:before, .video-react .video-react-mute-control:before,
          .video-react .video-react-volume-menu-button:before {
            content: "" !important;
            padding: 2.5px !important;
          }
          
          
     `}
`;

const ImgHolder = styled.div`

    @media screen and (max-width:800px){
      width: 100%;
      height: 100%;
      max-width:100%
    }

    @media screen and (min-width:800px){
      display: grid;
      margin: auto;
      position: relative;
      -webkit-box-flex: 1;
      flex: 1;
      text-align: center;
      color: white;
      -webkit-transition: .3s;
      transition: .3s;
      max-width: 35%;
      height: 100%;
      min-width: 10%;
      
      :hover {
        -webkit-transition: .5s;
        transition: .5s;
        max-width: 45% !important;
        -webkit-box-flex: 2;
        flex-grow: 2;
        cursor: pointer;
      }

      :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center bottom;
        background-size: cover;
        z-index: -1;
      }
    }

    img{
      object-fit:contain
    }
    div{
      overflow:hidden
    }
`;

// Render
const Banner = (props) => {
    // State
    const [videoOne, setVideoOne] = useState(false);
    const [videoTwo, setVideoTwo] = useState(false);

    const playerOneRef = useRef(null);

    const dropdownVar = props.sliderDropdown;

    return (
        <>
        <div style={{height:9, backgroundColor:'red', width:'100%',marginTop:'75px'}}></div>
        <Wrapper main>
            <Wrapper push dropdown={dropdownVar} />
            <Wrapper banner>
                <VideoWrapper one videoState={videoOne} onClick={() => {setVideoOne(true);}}>
                    <h2>Timeline</h2>
                    <VideoPlayer one videoState={videoOne}
                        playsInline
                        poster={Poster1}
                        src="http://media.w3.org/2010/05/bunny/movie.mp4">
                        <BigPlayButton position="center" />
                        <ControlBar autoHide={false} disableDefaultControls={true}>
                            <PlayToggle ref={null} />
                            <ProgressControl />
                            <CurrentTimeDisplay /> 
                            <TimeDivider />
                            <DurationDisplay />
                            <VolumeMenuButton />
                            <DownloadButton />
                            <FullscreenToggle />
                        </ControlBar>
                        <videoActions />
                    </VideoPlayer>
                </VideoWrapper>
                <VideoWrapper two videoState={videoTwo} onClick={() => {setVideoTwo(true); playerOneRef.current.click()}}>
                    <h2>End to End implementation and support</h2>
                    <VideoPlayer two videoState={videoTwo}
                        playsInline
                        poster={Poster2}
                        src="http://media.w3.org/2010/05/bunny/movie.mp4">
                        <BigPlayButton position="center" />
                        <ControlBar autoHide={false} disableDefaultControls={true}>
                            <PlayToggle />
                            <ProgressControl />
                            <CurrentTimeDisplay /> 
                            <TimeDivider />
                            <DurationDisplay />
                            <VolumeMenuButton />
                            <DownloadButton />
                            <FullscreenToggle />
                        </ControlBar>
                    </VideoPlayer>
                </VideoWrapper>
                <ImgHolder>
                    <div>
                      <img alt="" src={Poster3} />
                    </div>
                </ImgHolder>
            </Wrapper>
        </Wrapper>
        <div style={{height:9, backgroundColor:'red', width:'100%'}}></div>
        </>
    )
}

export default Banner;
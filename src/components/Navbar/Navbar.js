import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SideBar from '../SideBar/SideBar';
import VideocamIcon from '@material-ui/icons/Videocam';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MenuIcon from '@material-ui/icons/Menu'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
// import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton'
import { Avatar } from '@material-ui/core'
// import 'Navbar.css';
import Banner from './Banner/Banner'
import AccountDropdown from './AccountDropdown/AccountDropdown'
import VideoDropdown from './VideoDropdown/VideoDropdown'
// import  './Nawbar.css'






  

// --- Styles ---
    // Wrappers
    const Wrapper = styled.div`
        width: 100%;
        height: 75px;
        height:inherit;
        background: #4d4d4d;
        display: flex;
        /* flex-wrap:wrap; */
        align-items: center;
        position: relative;

        ${props => props.icons && css`
            width: 180px;
            height: inherit!important;
            /* margin-left: auto; */
            /* margin-right: 330px; */
            justify-content: space-between;
            box-sizing: border-box;
            @media screen and (max-width: 810px){
            width:auto!important;
            height:30px;
            height:inherit!important;
            }
        `}
        ${props => props.avatar && css`
            width: fit-content;
            height: fit-content;
            position: relative;
            cursor: pointer;
        `}
        ${props => props.sliderMenu && css`
            width: fit-content;
            height: fit-content;
            position: relative;
            cursor: pointer;
            background: transparent;
        `}
    `;

    // Input
    let Input = styled.input`
        margin: 0;
        padding: 0;
        width: 400px;
        height: 33px;
        box-sizing: border-box;
        background: #333333;
        border: 1.34px solid rgb(128,128,128);
        font-size: 16px;
        color: white;
            @media screen and (max-width: 710px){
                width:150px;
                height:20px;
                display:flex;
            }
      
    `;
    const Inpotbox = styled.div `
    width:445px;
    display:flex;
    flex-direction:row;
    align-items:center;
    @media screen and (max-width: 710px){
    font-size:20px;
    }
    `
    //Button
    const Button = styled.button`
        width: 86px;
        height: 33px;
        background: #1A1A1A;
        border: none;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 0;
        cursor: pointer;
        @media screen and (max-width: 710px){
               /* font-size: 20px!important; */
               width:40px;
               height:20px!important;
               padding-bottom:20px

            }
    `;
    // Avatar
    const UserAvatar = styled(Avatar)`
        width: 30px;
        height: 30px;
        @media screen and (max-width: 710px){
               font-size: 20px!important;
               width:20px;
               height:20px;
            }
    `;
    const AvatarArrow = styled(ExpandMoreIcon)`
        color: #959595; 
        position: absolute;
        top: 5.5px;
        left: 26px;
        transition: transform 300ms;
        transition-timing-function: ease-out;
         @media screen and (max-width: 710px){
        font-size:15px;
        left: 19px;
        top:4px;
         }
        transform: ${props => props.rotateAvatar ? `rotate(0deg)` : `rotate(90deg)`};
    `;

    // Slider Menu
    const MenuSlider = styled(MenuIcon)`
        color: #E63127;
        position: relative;
        @media screen and (max-width: 710px){
        font-size:20px!important;
    }
    `;
    const MenuArrow = styled(PlayArrowIcon)`
        position: absolute;
        top: 2px;
        left: 20px;
        color: #E63127;
        transition: transform 300ms;
        transition-timing-function: ease-out;
        transform: ${props => props.rotateMenu ? `rotate(90deg)` : `rotate(180deg)`};
        @media screen and (max-width: 710px){
        font-size:15px;
        left: 19px;
        top:3px;
         }
    `;

    const IconButtonWrapper = styled(IconButton)`
        margin: 0;
        padding: 3px;
        font-size:10px!important;
        ${props => props.big && css`
            padding: 6px;
            font-size:10px!important;
        `}
        ${props => props.menuBig && css`
            margin-left: 30px;
            z-index: 99;
            padding: 6px;
            margin-right:20px;
            font-size:10px!important;
        `}
        ${props => props.search && css`
            padding: 0;
            width: 100%;
            height: 100%;
        `}
    `;
   
    const SearchBarIcon = styled(SearchIcon)`
        color: white;
        height: 33px;
        @media screen and (max-width: 710px){
               font-size:20px!important;
               margin:0px;
               padding:0px;
               height:auto;
            }
    `;
    const AlarmBell = styled(NotificationsIcon)`
        color: #959595;
        cursor: pointer;
        @media screen and (max-width: 710px){
               font-size:20px;
            }
    `;
    const SquareAppsIcon = styled(AppsIcon)`
        color: #959595;
        cursor: pointer;
        @media screen and (max-width: 710px){
               font-size:20px;
            }
    `;
    const VideoIcon = styled(VideocamIcon)`
        color: #959595;
        cursor: pointer;
        @media screen and (max-width: 710px){
               font-size:20px;
            }
        
    `;
    const Sdiv = styled.div `
    width:100%;
    height: 75px;
    display:flex;
    flex-direction:row;
    align-items:center;
    flex-wrap:nowrap;
    justify-content:space-around!important;
    padding-right:20px;
    @media screen and (max-width: 810px){
                /* width:200px; */
                display:flex;
            }
    `
// Render
const Navbar = (props) => {
    // State
    const [sliderDropdown, setSliderDropdown] = useState(false);
    const [avatarDropdown, setAvatarDropdown] = useState(false);
    const [alarmDropdown, setAlarmDropdown] = useState(false);

    return (
        <React.Fragment>
            <Wrapper>
            <Sdiv>
                <IconButtonWrapper menuBig>
                    <Wrapper sliderMenu onClick={() => setSliderDropdown(!sliderDropdown)}>
                        <MenuSlider fontSize="medium" />
                        <MenuArrow fontSize="small" rotateMenu={sliderDropdown} />
                    </Wrapper>
                </IconButtonWrapper>
              <Inpotbox>
                <Input />
                <Button type="submit">
                    <IconButtonWrapper search>
                        <SearchBarIcon fontSize="large"/>
                    </IconButtonWrapper>
                </Button>
                </Inpotbox>
                <Wrapper icons>
                    <IconButtonWrapper>
                        <VideoIcon fontSize="large" />
                    </IconButtonWrapper>

                    <IconButtonWrapper>
                        <SquareAppsIcon fontSize="large" />
                    </IconButtonWrapper>
                    <IconButtonWrapper>
                        <AlarmBell onClick={() => {setAlarmDropdown(!alarmDropdown)}} fontSize="large" />
                    </IconButtonWrapper>

                    <IconButtonWrapper big>
                        <Wrapper avatar onClick={() => {setAvatarDropdown(!avatarDropdown)}}>
                            <UserAvatar />
                            <AvatarArrow rotateAvatar={avatarDropdown} />
                        </Wrapper>
                    </IconButtonWrapper>
                </Wrapper>

                <VideoDropdown alarmDropdown={alarmDropdown} />
                <AccountDropdown avatarDropdown={avatarDropdown} />
                </Sdiv>
            </Wrapper>
            <Banner sliderDropdown={sliderDropdown} />
            <SideBar sliderDropdown={sliderDropdown} />
           
        </React.Fragment>
    )
}

export default Navbar;
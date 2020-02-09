import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SideBar from '../SideBar/SideBar';
import VideocamIcon from '@material-ui/icons/Videocam';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';

import Banner from './Banner/Banner';
import AccountDropdown from './AccountDropdown/AccountDropdown';
import VideoDropdown from './VideoDropdown/VideoDropdown';

// --- Styles ---
    // Wrappers
    const Wrapper = styled.div`
        width: 100%;
        height: 75px;
        background: #4d4d4d;
        display: flex;
        align-items: center;
        position: relative;

        ${props => props.icons && css`
            width: 180px;
            height: fit-content;
            margin-left: auto;
            margin-right: 355px;
            justify-content: space-between;
            box-sizing: border-box;
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
    const Input = styled.input`
        margin: 0;
        padding: 0;
        width: 671px;
        height: 33px;
        box-sizing: border-box;
        background: #333333;
        border: 1.34px solid rgb(128,128,128);
        font-size: 16px;
        color: white;
        margin-left: 414px;
    `;
    //Button
    const Button = styled.button`
        width: 86px;
        height: 33px;
        background: #1A1A1A;
        border: none;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        cursor: pointer;
    `;
    // Avatar
    const UserAvatar = styled(Avatar)`
        width: 30px;
        height: 30px;
    `;
    const AvatarArrow = styled(ExpandMoreIcon)`
        color: #959595; 
        position: absolute;
        top: 5.5px;
        left: 26px;
        transition: transform 300ms;
        transition-timing-function: ease-out;
        transform: ${props => props.rotateAvatar ? `rotate(0deg)` : `rotate(90deg)`};
    `;

    // Slider Menu
    const MenuSlider = styled(MenuIcon)`
        color: #E63127;
        position: relative;
    `;
    const MenuArrow = styled(PlayArrowIcon)`
        position: absolute;
        top: 2px;
        left: 20px;
        color: #E63127;
        transition: transform 300ms;
        transition-timing-function: ease-out;
        transform: ${props => props.rotateMenu ? `rotate(90deg)` : `rotate(180deg)`};
    `;

    const IconButtonWrapper = styled(IconButton)`
        margin: 0;
        padding: 3px;

        ${props => props.big && css`
            padding: 6px;
        `}
        ${props => props.menuBig && css`
            margin-left: 39px;
            z-index: 99;
            padding: 6px;
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
    `;
    const AlarmBell = styled(NotificationsIcon)`
        color: #959595;
        cursor: pointer;
    `;
    const SquareAppsIcon = styled(AppsIcon)`
        color: #959595;
        cursor: pointer;
    `;
    const VideoIcon = styled(VideocamIcon)`
        color: #959595;
        cursor: pointer;
    `;

// Render
const Navbar = (props) => {
    // State
    const [sliderDropdown, setSliderDropdown] = useState(false);
    const [avatarDropdown, setAvatarDropdown] = useState(false);
    const [alarmDropdown, setAlarmDropdown] = useState(false);

    return (
        <React.Fragment>
            <Wrapper>
                <IconButtonWrapper menuBig>
                    <Wrapper sliderMenu onClick={() => setSliderDropdown(!sliderDropdown)}>
                        <MenuSlider fontSize="medium" />
                        <MenuArrow fontSize="small" rotateMenu={sliderDropdown} />
                    </Wrapper>
                </IconButtonWrapper>

                <Input />

                <Button type="submit">
                    <IconButtonWrapper search>
                        <SearchBarIcon fontSize="large"/>
                    </IconButtonWrapper>
                </Button>
                
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
            </Wrapper>
            <Banner sliderDropdown={sliderDropdown} />
            <SideBar sliderDropdown={sliderDropdown} />
        </React.Fragment>
    )
}

export default Navbar;
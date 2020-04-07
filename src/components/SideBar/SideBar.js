import React from 'react';
import styled, { css } from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Styles
const Wrapper = styled.div`
    ${props => props.main && css`
    width: 271px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -271px;
    background: #4D4D4D;
    transition: transform 350ms;
    transition-timing-function: ease-out;
    transform: ${props => props.slideProp ? `translateX(271px)` : `translateX(0)`};
    z-index: 90;

    .MuiList-root{
        margin-top: 65px;
        z-index: -99;
    }

    .MuiListItem-root{
        padding-top: 12px; 
        padding-bottom: 12px; 
        padding-right: 0;
    }

    span{
        font-size: 14px;
        font-weight: bold;
        font-family: arial;
        color: #B3B3B3;
        padding-left: 10px;
    }
    `}
`;
const BlueBar = styled.div`
    width: 5px;
    height: 100vh;
    background: #4169E1;
    margin-left: auto;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 266px;
`;

// Render
const SideBar = (props) => {
    const slideMe = props.sliderDropdown;

    return(
        <Wrapper main slideProp={slideMe}>
            <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Home" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Trending" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Subscriptions" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Playlists" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Browse channels" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Manage Subscriptions" />
                </ListItem>
            </List>
            <BlueBar />
        </Wrapper>
    )
}

export default SideBar;
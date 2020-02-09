import React from 'react';
import styled, { css } from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import YouTubeIcon from '@material-ui/icons/YouTube';

// Styles
const Wrapper = styled.div`
    ${props => props.main && css`
        width: 326px;
        height: 336px;
        background: #333333;
        border-radius: 6.5px;
        position: absolute;
        top: 100%;
        left: 61.5%;
        cursor: pointer;
        z-index: 99;
        display: ${props => props.dropdown ? `block` : `none`};

        .MuiListItem-root{
            padding-top: 12px; 
            padding-bottom: 12px; 
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

const DividerGrey = styled(Divider)`
    background: #999999;
`;

const YoutubeIcon = styled(YouTubeIcon)`
    color: #F61C0D;
`;


// Render
const VideoDropdown = (props) => {
    const dropdownVar = props.alarmDropdown;

    return(
        <Wrapper main dropdown={dropdownVar}>
            <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <YoutubeIcon fontSize="large" /><ListItemText primary="Anisul Islam premiering" />
                </ListItem>
                <DividerGrey />
                <ListItem button>
                    <YoutubeIcon fontSize="large" /><ListItemText primary="Anisul Islam premiering" />
                </ListItem>
                <ListItem button>
                    <YoutubeIcon fontSize="large" /><ListItemText primary="Anisul Islam premiering" />
                </ListItem>
                <ListItem button>
                    <YoutubeIcon fontSize="large" /><ListItemText primary="Anisul Islam premiering" />
                </ListItem>
                <DividerGrey />
                <ListItem button>
                    <YoutubeIcon fontSize="large" /><ListItemText primary="Anisul Islam premiering" />
                </ListItem>
            </List>
        </Wrapper>
    )
}

export default VideoDropdown;
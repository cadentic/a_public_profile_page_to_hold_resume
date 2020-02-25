import React from 'react';
import styled, { css } from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Styles
const Wrapper = styled.div`
    ${props => props.main && css`
        width: auto;
        height: 336px;
        background: #333333;
        border-radius: 6.5px;
        position: absolute;
        top: 100%;
        left: 79.3%;
        cursor: pointer;
        z-index:10000;
        @media screen and (max-width: 710px){
            top: 100%;
             left: 59.3%;
            }
        display: ${props => props.dropdown ? `block` : `none`};

        .MuiList-root{
            padding-top: 12px;
        }

        .MuiListItem-root{
            padding-top: .5px; 
            padding-bottom: .5px; 
        }

        span{
            font-size: 21px;
            font-family: arial;
            color: #CCCCCC;
        }

        #specialFont{
            span{
                font-size: 18px;
            }
        }
    `}
`;

const DividerGrey = styled(Divider)`
    background: #808080;
    margin-top: 2.25em;
    margin-bottom: .5em;
`;

// Render
const AccountDropdown = (props) => {
    const dropdownVar = props.avatarDropdown;

    return(
        <Wrapper main dropdown={dropdownVar}>
            <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="ORACLE ACCOUNT" id="specialFont" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Sayanta Chakroborty" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Help" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Sign out" />
                </ListItem>
                <DividerGrey />
                <ListItem button>
                    <ListItemText primary="Cloud Account" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Sign in to cloud" />
                </ListItem>
            </List>
        </Wrapper>
    )
}

export default AccountDropdown;
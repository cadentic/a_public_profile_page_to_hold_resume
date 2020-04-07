import React from 'react';
import Nav from 'react-bootstrap/Nav'
import './Header1.css';
// import HomeIcon from '@material-ui/core/Icon';
import styled, {  } from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
// import IconButton from '@material-ui/core/IconButton';
import Headerbottom from '../Hederbottom/Headerbottom';


const SearchBarIcon = styled(SearchIcon)`
color: white;
height: 30px;
`;


const Header1 = (props) => {
    return (
        <div style={{width:'100%'}}>
        <Nav activeKey="/home"
        hidden={!props.showMenu}
        style={{backgroundColor:'#212529', position:'fixed', top:'75px', width:1235, zIndex:9999}}
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Timeline</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            <Nav.Link eventKey="link-2"> <SearchBarIcon fontSize="large"/></Nav.Link>

            </Nav.Link>
        </Nav.Item>
        </Nav>
        <section style={{marginTop:'75px'}}>
        <Headerbottom />

        </section>

        </div>
    )
}

export default Header1;
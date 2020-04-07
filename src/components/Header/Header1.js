import React, {useRef} from 'react';
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

const scrollToRef = (ref, about = false) => {
    if(about){
        window.scrollTo({
            top: 250,
            left: 0,
            behavior: 'smooth'
          })
    }else{
        window.scrollTo({
            top: ref.current.offsetTop - 200,
            left: 0,
            behavior: 'smooth'
          })
    }
}

const Header1 = (props) => {

    const profileRef = useRef(null)
    const timelineRef = useRef(null)
    const educationRef = useRef(null)
    const projectRef = useRef(null)
    const hobbiesRef = useRef(null)
    const workRef = useRef(null)

    const allRefs = {
        profileRef,
        timelineRef,
        educationRef,
        projectRef,
        hobbiesRef,
        workRef
    }

    return (
        <div style={{width:'100%'}}>
        <Nav activeKey="/home"
        hidden={!props.showMenu}
        style={{backgroundColor:'#212529', position:'fixed', top:'75px', zIndex:9999, 
        width: props.sideBarOpen? 1276 : 1235, }}
        >
        <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{scrollToRef(profileRef, true)}}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{scrollToRef(timelineRef)}}>Timeline</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={()=>{scrollToRef(workRef)}}>Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-4" onClick={()=>{scrollToRef(workRef)}}>Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-5" onClick={()=>{scrollToRef(projectRef)}}>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-6" onClick={()=>{scrollToRef(hobbiesRef)}}>Hobbies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            <Nav.Link eventKey="link-2"> <SearchBarIcon fontSize="large"/></Nav.Link>

            </Nav.Link>
        </Nav.Item>
        </Nav>
        <section style={{marginTop:'75px'}}>
        <Headerbottom {...allRefs} />

        </section>

        </div>
    )
}

export default Header1;
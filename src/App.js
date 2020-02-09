import React from 'react';
import styled, { css } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
// import EditButton from './UI/EditButton';

// Styles
const Wrapper = styled.div`
    width: 100%;
    background: #4d4d4d;

    ${props => props.bodyOuter && css`
      height: 800px;
      background: #4d4d4d;
      display: flex;
      justify-content: space-between;
    `}
    ${props => props.bodyInner && css`
      height: 800px;
      width: 1236px;
      background: #20242C;
    `}
  `;
  const SideBar = styled.div`
    width: 19px;
    background: #4169E1;
    height: 100%;
  `;

// Render
function App(props) {

  return (
    <StylesProvider injectFirst>
      <Navbar />
      <Wrapper bodyOuter>
        <SideBar />
        <Wrapper bodyInner>
  
        </Wrapper>
        <SideBar />
      </Wrapper>
    </StylesProvider>
  );
}

export default App;

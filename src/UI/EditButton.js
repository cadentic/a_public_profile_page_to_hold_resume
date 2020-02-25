import React from 'react';
import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';

const EditButton = () => {
    const EditButton = styled(Button)`
    text-transform: none;
    border-radius: 0;
    font-family: Arial;
    font-size: 16px;
    padding: 0;
    width: 50%;

    .MuiButton-label{
      height: 30px;
    }

      ${props => props.edit && css`
      background: #C1272D;
      color: white;
    `}
      ${props => props.add && css`
      background: #4D4D4D;
      color: #FF0000;
    `}
  `;

  const ButtonDiv = styled.div`
    width: 151px;
    border-radius: 4.3px;
    overflow: hidden;
  `;

    return (
    <ButtonDiv>
        <EditButton edit>Edit</EditButton>
        <EditButton add>Add</EditButton>
    </ButtonDiv>
    )
}

export default EditButton;
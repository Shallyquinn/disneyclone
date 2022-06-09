import React from 'react'
import styled from 'styled-components'

function viewers() {
  return (
    <Container>
        <Wrap>
            <img src= "/logo_images/disneylogoclone.png" />
        </Wrap>
        <Wrap>
            <img src= "/logo_images/drpixar.png" />
        </Wrap>
        <Wrap>
            <img src= "/logo_images/disneylogoclone.png" />
        </Wrap>
        <Wrap>
            <img src= "/logo_images/pixar.png" />
        </Wrap>
        <Wrap>
            <img src= "/logo_images/fidisneyplusclonelogo.png" />
        </Wrap>
    </Container>
  )
}

export default viewers

const Container = styled.div`
    padding: 5px 0 26px 0;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 20px;
    border-radius: 10px;
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    box-shadow: rgb(0 0 0 / 70%) 0px 40px 58px -16px,
    rgb(0 0 0 / 74%) 0px 30px 22px -10px;
    transition: all 250ms cubic-bezier (0.25, 0.46, 0.45, 0.94) 0s;
    img {
        padding: 5px 5px 5px 5px;
        height: 100%;
        width: 100%;
        padding: 10px 10px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid rgb(249, 249, 249, 0.1);
  
        &:hover {
          box-shadow: rgb(0 0 0 / 70%) 0px 40px 58px -16px,
          rgb(0 0 0 / 74%) 0px 30px 22px -10px;
          transform: scale(1.05);
          border: 3px solid rgb(249, 249, 249, 0.8);
        }
    }

`
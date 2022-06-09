import React from 'react'
import styled from 'styled-components'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';

function Header() {
  return (
    <Nav>
        <Logo src="/logo_images/fidisneyplusclonelogo.png" />
        <NavMenu>

          <a>
            <CustomHome />
            <span>Home</span>
          </a>
          <a>
            <CustomSearch />
            <span>Search</span>
          </a>
          <a>
            <CustomWatchList />
            <span>WatchList</span>
          </a>
          <a>
            <CustomOriginal />
            <span>Originals</span>
          </a>                    
          <a>
            <CustomMovie />
            <span>Movies</span>
          </a>
          <a>
            <CustomSeries />
            <span>Series</span>
          </a>
        </NavMenu>
        <UserImg src="/disney images/Userimg.jpg" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 25px;
justify-content: space-between;
overflow-x: hidden;
`
const Logo = styled.img`
    display: flex;
    width: 90px;
    height: 55px;
    color: white;
    padding: 0 15px 0 0;
    
`
const UserImg = styled.img`
    display: flex;
    width: 80px;
    height: 50px;
    padding: 0 15px 0 15px;
    border-radius: 50%;
    cursor: pointer;
    `

const NavMenu = styled.div`
    color: white;
    align-items: center;
    display: flex;
    flex: 1;
    margin-left: 25px;
    a {
      display: flex;
      align-items: center;
      padding: 0 10px;
      text-transform: uppercase;
      flex-wrap: nowrap;
      cursor: pointer;
      span {
        position: relative;
        &:after {content:"";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
      }

      &:hover {
          span:after{transform: scaleX(1);
          opacity:1;
        }
      }
    }
    justify-content: center;
    @media (max-width: 799px) {
      display: none
    } 
`

const CustomHome = styled(HomeRoundedIcon)`
`

const CustomSearch = styled(SearchRoundedIcon)`
    
`
const CustomWatchList = styled(AddRoundedIcon)`
    
`
const CustomOriginal = styled(StarRoundedIcon)`
    
`
const CustomMovie = styled( MovieRoundedIcon)`
    
`
const CustomSeries = styled(TheatersRoundedIcon)`
    
`

import React from "react";
import styled from "styled-components";
import Button from "./Utility/Button";
import Link from "./Utility/Link";
const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <MainNavigation>
          <Link>
            Logo
          </Link>
          <ul>
            <Link> Features</Link>
            <Link> Features</Link>
            <Link> Features</Link>
          </ul>
          <HeaderButtonWrapper>
            <div><Button>Login</Button></div>
            <div><Button primary>Start for free</Button></div>
          </HeaderButtonWrapper>
        </MainNavigation>
      </HeaderWrapper>
    </div> 
   );
}
 
export default Header;

const HeaderWrapper = styled.header `
background-color: #fff;
height: 4rem;
padding: 0 1rem;
transition: background-color 350ms cubic-bezier(0.2,0.8,0.2,1)
`

const MainNavigation = styled.nav `
align-items: center;
block-size: 100%;
display: flex;
flex: 1 1;
margin: 0 auto;
position: relative;
width: 100%;
`

const HeaderButtonWrapper = styled.div `
display: flex;
`
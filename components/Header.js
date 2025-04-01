"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #d28375;
  padding: 20px 0;
  width: 100vw;
  position: relative;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 40px;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;
  &:hover {
    color: #ddd;
    transform: scale(1.1);
  }
`;
const LogoImage = styled(Image)`
  max-width: 120px;
  height: auto;
`;
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 30px;
  width: 30px;
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <Logo href={'/'} style={{position: 'relative',top:'-20px'}}>
          <LogoImage src="/Logo2.png" alt="KMUTNB Logo" width={120} height={60} />
        </Logo>
        <StyledNav style={{position: 'relative',top:'-40px',left:'570px',fontFamily: 'Mitr, sans-serif'}}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/product">All Products</NavLink>
          <NavLink href="/categories">Categories</NavLink>
          <NavLink href="/account">Account</NavLink>
          <NavLink href="/cart">Cart (0)</NavLink>
        </StyledNav>
        <SearchIconWrapper style={{position: 'relative',top:'-40px'}}>
                <NavLink href="#">  
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
                      <g transform="scale(5, 5)">
                        <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
                      </g>
                    </g>
                  </svg>
                </NavLink>
          </SearchIconWrapper>
      </Wrapper>
    </StyledHeader>
  );
}
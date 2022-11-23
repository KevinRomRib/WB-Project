import styled from "styled-components";

export const NavBar = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #e1bee7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
`;

export const LinkNav = styled.a`
    text-decoration: none;
    color: white;
    padding-right: 40px;
    font-size: 15px;
    font-family: Arial;
    cursor: pointer; 
`;

export const LinkNavHam = styled.a`
    text-decoration: none;
    color: #4eaeb4;
    padding-right: 40px;
    font-size: 15px;
    font-family: Arial;
    cursor: pointer; 
`;

export const Logo = styled.h1`
    color: white;
    font-family: monospace;
    font-size: 30px;
    padding-left: 40px;
`;

export const DivNavHam = styled.div`
    display: flex;
    align-items: center;
`;

export const DivLinks = styled.div`
    display: flex;
    @media (max-width: 800px) {
        display: none;
    }
`;
import styled from 'styled-components'

export const Header = styled.header`
  height: 94px;
  background: #0084D7;
  display: flex;
  justify-content: space-between;
`

export const Nav = styled.nav`
  padding: 36px 0;
  a {
    font-family: 'Raleway', sans-serif;
    padding: 0 16.5px;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
  }
`

export const Picture = styled.nav`
  width: 98.8px;
  padding-top: 3.5px;
  padding-left: 120px;
  a {
    display: flex;
    font-size: 30px;
    font-family: 'Schoolbell', cursive;
    color: #fff;
    text-decoration: none;
  }
  p {
    padding-top: 52px;
  }
`

export const Web = styled.section`
  width: 1000px;
  margin: 0 auto;
`
import React from 'react'
import { Header, Nav, Picture } from './styles'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

import logo from './img/logo.png'


export default function Cabecalho() {
  return (
    <Container className="themed-container" fluid={true}>
      <Header>
        <Picture>
          <Link to='/'>
            <img src={logo} alt="Contorno do Brasil com um pino de localização com as cores da bandeira LGBT" height="87" />
            <p>GENI</p>
          </Link> 
        </Picture>

        <Nav>
          <Link to='/'></Link>
          <Link to='/'>HOME</Link>
          <Link to='/sobre'>SOBRE NÓS</Link>
          <Link to='/contato'>CONTATO</Link>
        </Nav>
      </Header>
    </Container>
  )
}

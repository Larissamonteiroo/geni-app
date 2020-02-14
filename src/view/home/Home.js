import React from 'react'
import { Home1, Home2, Home3, Home4 } from './styles'
import Container from 'react-bootstrap/Container'

import home from './img/homecel.png'
import pes from './img/celpesquisar.png'
import fav from './img/celfavoritos.png'
import play from './img/playstore.png'
import app from './img/appstore.png'

export default function Home() {
  return (
    <Container className="themed-container" fluid={true}>
        <Home1>
          <img src={home} alt='homedoapp' />
          <p>Geni é um aplicativo LGBT+
              que promove a segurança da comunidade através da 
              sinalização de locais seguros a partir de relatos 
              e experiências dos próprios usuários.</p>
        </Home1> 
        <Home2>
          <p>Encontre estabelecimentos LGBT+ friendly 
              perto de você</p>
          <img src={pes} alt='homedoapp' />
        </Home2>
        <Home3>
          <img src={fav} alt='homedoapp' />
          <p>Encontre estabelecimentos LGBT+ friendly 
              perto de você</p>
        </Home3>
        <Home4>
          <section>
            <img src={play} width='200' alt='playstore'/>
            <img src={app} width='200' alt='appstore'/>
          </section>
        </Home4>
    </Container>
  )
}
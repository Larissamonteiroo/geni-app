import React from 'react'
import { Body, Section, P } from './Styled'
import { Title1 } from './Styled'
import Container from 'react-bootstrap/Container'

import band from './img/lgbt.png'
import Membros from './Membros'

export default function Text() {
  return (
    <Container>
    <Body>
      <Title1>
        <h1>SOBRE NÓS</h1>
        <img src={band} width="100" alt='bandeiralgbt'/>
      </Title1>
        <br/>
      <Section>
        <P>
          Somos jovens desenvolvedores de comunidades diversificadas do Rio de 
          Janeiro. Em 2019 nos unimos em grupo de seis integrantes expondo nossos
          diferentes pontos de vista e experiências. 
          Junto com a ONG RECODE, ganhamos a oportunidade de estudar tecnologia
          e programação sempre pensando no bem-estar e segurança da nossa
          sociedade, e em criar uma ideia/projeto de impacto social, foi conceituado
          em 2020 o Geni, como produto final de nosso grupo. 
          Geni é um aplicativo voltado para a comunidade LGBTQIA+ com o intuito de 
          sinalizar estabelecimentos seguros ou não para esse público. É algo criado 
          por nós para nós, onde os próprios usuários são os responsáveis pela avaliação dos lugares que podemos ocupar, considerando nosso conforto e bem-estar. 
        </P>
      </Section>
    </Body>
    <Membros/>
    </Container>
  )
}


import Container from 'react-bootstrap/Container'
import React from 'react'

import { Lista, Title, H1, List, Li, Img, F, N, Ul } from './Styled'
import anderson from './img/Anderson.png'
import gabi from './img/Gabriela.png'
import marcio from './img/Marcio.png'
import lari from './img/Larissa.png'
import naty from './img/Nathalia.png'
import junior from './img/Junior.png'

export default function Membros() {
    const membros = [
        {
          id: 1,
          nome: "Anderson",
          idade: '20',
          funcoes: 'Marketing',
          figure: anderson
        },
        {
          id: 2,
          nome: "Gabriela",
          idade: '26',
          funcoes: 'Ui/Ux',
          figure: gabi
        },
        {
          id: 3,
          nome: "Marcio",
          idade: '23',
          funcoes: 'Back-end',
          figure: marcio
        },
        {
          id: 4,
          nome: "Laríssa",
          idade: '20',
          funcoes: 'Full Stack',
          figure: lari
        },
        {
          id: 5,
          nome: "Nathalia",
          idade: '22',
          funcoes: 'Rede Sociais',
          figure: naty
        },
        {
          id: 6,
          nome: "Vladimir",
          idade: '23',
          funcoes: 'Marketing',
          figure: junior
        },
      ];
  return (
    <Container className="themed-container" fluid={true}>
        <Title>
            <H1>MEMBROS</H1>
        </Title>

        <Lista>

          <List>
            <Ul>
              {membros.map(nomes => 
                    <Li key={nomes.id}>
                      <Img src={nomes.figure} alt='fotosImg' />
                      <br/>
                      <N>{nomes.nome}</N>
                      <N>{nomes.idade}</N>
                      <F>{nomes.funcoes}</F>
                      <br/>
                    </Li> 
                    )}
            </Ul>
          </List>
        </Lista>
      </Container>
  )
}


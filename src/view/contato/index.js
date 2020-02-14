import React from 'react'
import { Container, Body, Input, Corpo, Title, H1, Form, Img, Img2, Section, Textarea } from './Styled'

import svg from './img/Svg.png'
import lgbt from './img/lgbt.png'

export default function Fale() {

  return (
    <Corpo>
        <Title>
          <H1>Contato</H1>
        </Title>

      <Form>
        <Container>
          <label> 

            <span class="nome">Nome: </span>
            <input type='text' name='nome' />

          </label>
        </Container>

        <Container>
          <label>

            <span class="nome">E-mail: </span>
            <input type='email' name='email' />

          </label>
        </Container> 

        <Section>
          <label>
          <span class="nome">Comentários: </span>
          <Textarea name='comentarios'></Textarea>
          </label>
        </Section>
          
        <Body>
          <p>* Campos obrigatórios</p>
          <Input type='submit' name='enviar' value='ENVIAR' />
          <Input type='reset'  name='reset' value='APAGAR' />
        </Body>
        </Form>
        
        <Img>
          <img src={svg} alt='EmailSvg' />
          <p className='sed'>Email para contato<br/>appgeni5@gmail.com</p>
        </Img>

        <Img2>
          <img src={lgbt} alt ='Email'/>
        </Img2>
    </Corpo>
  )
}
import React from 'react'
import Container from 'react-bootstrap/Container'
import { Corpo, R, Redesociais, Roda, Copyright, Ul, P, Img} from './styles'

import facebook from './img/facebook.png'
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'

export default function Footer() {
    const sites = [
        {
          id: 1,
          url: "https://www.facebook.com/Geniapp-103202654448159",
          figure: facebook
        },
        {
          id: 2,
          url: "https://www.instagram.com/appgeni",
          figure: instagram
        },
        {
          id: 3,
          url: "https://twitter.com/app_geni",
          figure: twitter
        }
      ];
  return (
    <Container className="themed-container" fluid={true}>
      <Corpo>
        <R>SIGA O GENI NAS REDES SOCIAIS</R>
          <Ul>
            {sites.map(nomes =>
          <Redesociais key={nomes.id}>
			      <a href={nomes.url}>
                <Img src={nomes.figure} width="40" alt='appstore'/>
            </a>
		      </Redesociais>)}
          </Ul>
		<Roda>
			<Copyright>
				<P>© Copyright 2019 AppGENI, Inc. Todos os direitos reservados. As diversas marcas comerciais pertencem a seus respectivos proprietários</P>	
			</Copyright>
		</Roda>
      </Corpo>
    </Container>
  )
}

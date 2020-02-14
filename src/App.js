import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cabecalho from './Components/Header'
import Routes from './Routes'
import Footer from './Components/Footer/index'
import Global from './styled/Global-Styled'

export default function App() {
  return (
    <BrowserRouter>
        <Global/>
        <Cabecalho />
        <Routes />
        <Footer/>
    </BrowserRouter>
  )
}




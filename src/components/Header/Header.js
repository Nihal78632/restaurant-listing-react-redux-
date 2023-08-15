import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <i className="fa-solid fa-light fa-utensils fa-fade"></i>              {' '}
            De Resto De Faco
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header
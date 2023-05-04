import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IoIosCart } from "react-icons/io";
// import { useSelector } from 'react-redux';
import { wrapper } from '../App';

function Header() {
  // const count = useSelector((state) => state.counter.value);
  const { count} = useContext(wrapper);


  return (
    
        <Navbar className='py-4 bg-white' sticky='top'>
          <Container>
            <Navbar.Brand href="/">UNI Resto Cafe</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="/" className='me-4'>
               My Orders
              </Nav.Link>
              <Nav.Link href="/" className='cart'>
               <IoIosCart/><sup>{count}</sup>
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  ) 
}

export default Header
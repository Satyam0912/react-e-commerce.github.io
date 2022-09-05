import React from 'react'
import { Link } from 'react-router-dom';
import { useProduct } from '../Context/ProductContext';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {

    const { categories, setCategory } = useProduct();

    return (<>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className='ps-5'>
                <Navbar.Brand className='h1 fs-3'>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='text-center'>
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutus">
                            <h4>About us</h4>
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            <h4>Contact</h4>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/cart'>
                            <h4 className=''>Cart</h4>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/favourite'>
                            <h4 className=''>Favourite</h4>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Nav variant="pills" defaultActiveKey="/" className='d-flex justify-content-evenly'>
            <Nav.Item>
                <Nav.Link as={Link} to="/">
                    <h4 className='' onClick={() => setCategory("")}>All</h4>
                </Nav.Link>
            </Nav.Item>
            {
                categories && categories.map((i, index) => (
                    <div key={index}>
                        <Nav.Link as={Link} to={`/${i}`}>
                            <h4 className='' onClick={() => setCategory(i)}>{i}</h4>
                        </Nav.Link>
                    </div>
                ))
            }
        </Nav>
    </>
    )
}

export default NavbarComponent
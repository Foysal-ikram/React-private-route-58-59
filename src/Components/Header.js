import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContext } from './Loader/UserContext';


const Header = () => {

    const {user , logOut} = useContext(AuthContext) ;
    // console.log(' ---------it is --------' ,user)


    const signOut =() =>{

        logOut() 
        .then(result=>{})
        .catch(error=>console.error(error))
    }

    return (
        <div className='px-2'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            >
                            
                            <small className='pt-2 me-5'>{user?.email}</small>
                            <Nav.Link as={Link}  to="/">Home</Nav.Link>
                            <Nav.Link as={Link}  to="/news">News Section</Nav.Link>

                            {
                                user?.email?
                                <Button className='btn btn-sm ms-2' onClick={signOut}>Sign Out</Button>
                                :
                                <LinkContainer to="/login"><Nav.Link >Log in</Nav.Link></LinkContainer>
                            }
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
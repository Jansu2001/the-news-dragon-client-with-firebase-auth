import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';


const NavigationBar = () => {


    const { user,signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        .then(result=>{
            const signout=result.user;
            console.log(signout);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <Container>
            <Navbar className='mt-3 ' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Link to='/category/0'>Home</Link>
                            <Nav.Link to=''>About</Nav.Link>
                            <Nav.Link to=''>Career</Nav.Link>
                            {user&&<p className='text-center'>{user.email}</p>}

                        </Nav>
                        <Nav >
                            {user &&
                                <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>

                            }
                            {
                                user ? <Button onClick={handleSignOut} variant="secondary">Log out</Button>
                                    : <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
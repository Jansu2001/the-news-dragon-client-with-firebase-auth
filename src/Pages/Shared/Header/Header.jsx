import React from 'react';
import logo from '../../../assets/logo.png'
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container className='mb-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format(" LT dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger fs-4' speed={30} pauseOnHover={true}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam autem
                    culpa quidem blanditiis maiores cumque sequi accusantium explicabo rep
                    rehenderit aspernatur assumenda adipisci quis ipsa, distinctio veritat
                    is consequuntur laborum. Harum, incidunt!......
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam autem
                    culpa quidem blanditiis maiores cumque sequi accusantium explicabo rep
                    rehenderit aspernatur assumenda adipisci quis ipsa, distinctio veritat
                    is consequuntur laborum. Harum, incidunt!......
                </Marquee>
            </div>

            {/* Navbar */}
            

        </Container>
    );
};

export default Header;
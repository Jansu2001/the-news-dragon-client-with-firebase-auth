import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg1.png'

const RightSideNav = () => {
    return (
        <div>
            <h3>Login with</h3>
            <div>
                <Button className='px-5 mb-2' variant="outline-primary">login with Google</Button>
                <Button className='px-5' variant="outline-secondary">login with Github</Button>
            </div>
            <div className='mt-5'>
                <h4>Find us on</h4>

                <ListGroup>
                    <ListGroup.Item>FaceBook</ListGroup.Item>
                    <ListGroup.Item>Twitter</ListGroup.Item>
                    <ListGroup.Item>Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <div className='mt-4'>
                <QZone></QZone>
            </div>
            <div>
                <img src={bg} alt="" />
                <h3 className=''>Create an Amazing Newspaper</h3>
            </div>
        </div>
    );
};

export default RightSideNav;
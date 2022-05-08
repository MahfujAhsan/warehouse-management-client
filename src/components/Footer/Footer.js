import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../Firebase.init';
import CustomLink from '../Header/CustomLink/CustomLink';
import molinardLogo from "../../media/logo.png";
import { useAuthState } from 'react-firebase-hooks/auth';

const Footer = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='d-flex justify-content-between align-items-center flex-md-column my-2 my-md-0 bg-dark'>
            <div className='text-center w-md-50 mx-auto my-md-3'>
                <img className='w-75 w-md-100' src={molinardLogo} alt="" />
            </div>
            <Navbar className='container shadow-none' collapseOnSelect expand="lg">
                <Container className=''>
                    <Navbar.Toggle style={{ backgroundColor: "#fff"}} aria-controls="responsive-navbar-nav" className='ms-auto text-dark' />
                    <Navbar.Collapse id="responsive-navbar-nav" className='text-end'>
                        <Nav className="mx-auto mt-3 mt-md-0">
                            <CustomLink className='text-decoration-none  ms-md-3 fs-6 fs-5 text-white px-2 px-md-3 py-md-2 rounded text-uppercase' to="/">Home</CustomLink>
                            {
                                user ? <CustomLink className='text-decoration-none ms-md-3 fs-6 fs-5 text-white px-2 px-md-3 py-md-2 rounded text-uppercase' to="/manageInventories">Manage Inv.</CustomLink> : ''
                            }
                            {
                                user ? <CustomLink className='text-decoration-none ms-md-3 fs-6 fs-5 text-white px-2 px-md-3 py-md-2 rounded text-uppercase' to="/addItems">Add Items</CustomLink> : ''
                            }
                            {
                                user ? <CustomLink className='text-decoration-none ms-md-3 fs-6 fs-5 text-white px-2 px-md-3 py-md-2 rounded text-uppercase' to="/myItems">My Items</CustomLink> : ''
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;
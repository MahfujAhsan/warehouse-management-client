import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import molinardLogo from "../../media/logo.png";
import auth from '../Firebase.init';
import CustomLink from './CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <div>
            <div className='text-center w-50 mx-auto mb-3'>
                <img className='img-fluid' src={molinardLogo} alt="" />
            </div>
            <Navbar className='container' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink className='text-decoration-none ms-3 fs-5 text-dark px-3 py-2 rounded fw-bold' to="/">Home</CustomLink>
                            <CustomLink className='text-decoration-none ms-3 fs-5 text-dark px-3 py-2 rounded fw-bold' to="/manageItems">Manage Items</CustomLink>
                            <CustomLink className='text-decoration-none ms-3 fs-5 text-dark px-3 py-2 rounded fw-bold' to="/addItems">Add Items</CustomLink>
                            <CustomLink className='text-decoration-none ms-3 fs-5 text-dark px-3 py-2 rounded fw-bold' to="/myItems">My Items</CustomLink>
                            {
                                user ? <Link onClick={handleSignOut} to="/login" className='text-decoration-none ms-3 fs-5 text-dark px-3 py-2 rounded fw-bold'>SignOut</Link> : <Link className='text-decoration-none ms-3 fs-5 text-dark px-3 py-2 rounded fw-bold' to="/login">LogIn</Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
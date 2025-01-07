import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { StoreContext } from './StoreContext';


const Header = () => {
        const {url,setToken,token}=useContext(StoreContext);
        const logout=()=>{
            localStorage.removeItem("token");
            setToken("");
            //when the user logout, we have to send him to home page- use navigate hook.
            Navigate('/')
        
        
        
        
          }
        

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink style={{ "marginRight": "34px" }} to='/login'>Login</NavLink>
                            {token?                            <NavLink to='/cart'>Cart</NavLink>:"Unable to fetch cart details"}

                            {
                                !token?<button onClick={()=>setShowlogin(true)}>Login</button>: <img  style={{ "width":"30px","height":"30px"}}src="profileimage.png" alt='profileimage'></img>

                            }
                            <NavLink onClick={logout} >Logout</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header

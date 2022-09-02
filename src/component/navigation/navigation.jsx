import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import blogish_logo from '../../images/blogish_logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa"
import './navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" variant="light" fixed="top">
                <Container>
                    <Nav className="nav1" href="#home"><img src={blogish_logo} height="50px" /></Nav>
                    <Nav className="me-auto" style={{marginLeft:"150px"}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another actionx
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <p><FaSearch/></p>
                        <p><FaGoogle /></p>
                        <p><FaTwitter /></p>
                        <p><FaInstagram /></p>
                        <p><FaFacebook /></p>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation;

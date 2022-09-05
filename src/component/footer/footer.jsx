import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './footer.css'

const Footer = () => {
    return (
        <Container className="footerrow">
            <Row>
                <Col xs><b>Lastest Articales</b>
                    <Row style={{marginTop:"20px"}}>blog1...</Row>
                    <Row>blog2...</Row>
                    <Row>blog3...</Row>
                </Col>
                <Col xs><b>Tag Cloud</b>
                    <Row  style={{marginTop:"20px"}}>#tag1</Row>
                    <Row>#tag2</Row>
                    <Row>#tag3</Row>
                </Col>
                <Col xs><b>Follow me</b>
                    <p  style={{marginTop:"20px"}} className="slogo"><FaFacebook/><FaGoogle/><FaInstagram/><FaTwitter/></p>
                </Col>
                <Col xs><b>DISCOVER US</b>
                    <Row className='address'  style={{marginTop:"20px"}}>A-38 SpiritVilla,gateway Road,Surat,Gujarat,India..</Row>
                    <Row>022-2388-4942 </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;
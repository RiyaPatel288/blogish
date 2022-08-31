import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BLogo from "../images/BLogo.png"

function Navigation() {
  return (
    <Container>
      <Row>
      <Col><img src={BLogo} height="50px" margin="50px"/> </Col>
      <Col>1 of 2</Col>
      <Col>1 of 3</Col>
      </Row>
    </Container>
  );
}

export default Navigation;



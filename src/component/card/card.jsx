import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo192 from '../../images/logo192.png'
import Container from 'react-bootstrap/Container';



const Grid = () => {
    return (
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card style={{height:"350px"}}>
              <Card.Img variant="top" src={logo192} style={{height:"200px",marginBottom:"25px"}} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
}

export default Grid;
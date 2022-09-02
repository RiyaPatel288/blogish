import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo192 from '../../images/logo192.png'


const Grid = () => {
    return (
        <>
            <Card border="dark" style={{ width: '18rem',marginTop:"70px",marginLeft:"100px" }} >
                <Card.Header><img src={logo192} /></Card.Header>
                <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            

        </>
    );
}

export default Grid;
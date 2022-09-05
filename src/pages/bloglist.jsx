import { Container, Row, Col } from "react-bootstrap";
import Grid from "../component/card/card";
import Navigation from "../component/navigation/navigation";
import './bloglist.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "../component/footer/footer";


const Bloglist = () => {
   return (

      <Container>
         <Row>
            <Navigation />
         </Row>

         <Row style={{ marginTop: "85px" }}>
            <Col sm={10}><Grid /></Col>
            <Col sm={2}>
               <Row>
                  <h2>Recent Post</h2>
                  <p>blog1.....</p>
                  <p>blog2.....</p>
                  <p>blog3.....</p>
                  <p>blog4.....</p>
                  <p>blog5.....</p>
               </Row>
               <Row style={{ marginTop: "300px" }}>
                  <h2>Tags</h2>
                  <p>#firstblog</p>
                  <p>#secondblog</p>
                  <p>#thirdblog</p>
               </Row>
            </Col>
         </Row>

         <hr />
         <Row>
            <p className="txt1">Subscribe to BLOGISH</p>
            <p className="txt2">To Get the latest post</p>

            <div>
               <Form>
                  <Row>
                     <Col>
                        <Form.Group className="inputemail" controlId="formBasicEmail">
                           <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                     </Col>
                     <Col>
                        <Button variant="secondary" type="submit" className="btnsubmit">
                           Submit
                        </Button>
                     </Col>
                  </Row>
               </Form>
            </div>
         </Row>

         <hr/>
         <Row>
            <Footer/>
         </Row>

         <hr/>
         <Row>
            Copyright © 2021 All rights reserved.
         </Row>
      </Container>

   )
}
export default Bloglist;
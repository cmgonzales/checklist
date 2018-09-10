import {Col,Row,Container} from 'reactstrap';
import React from 'react';


const List = props => (
  <Container>
  <Row>
  <Col>

  <div className = "input">
  
    {
      props.ans.map((item, index) =>  <li key={index}>{item}</li>)
    }
   
 
  </div>
  </Col>
  </Row>
  </Container>
);

export default List;
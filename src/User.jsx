import React, { Component } from 'react';
import { input, Button, Container, Row,  Col } from 'reactstrap';
import List from './inputs';

//add if statement == if text != no value create a warning sign

class User extends Component {
    constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.state = {
        value: " ",
        ans:[]
    };    
}   
handleChange (e){
        this.setState({value: e.target.value})
}
handleSubmit(e){
   e.preventDefault();
   this.setState({
      value: '',
      ans: [...this.state.ans, this.state.value]
    });
}
  render() {
    return (
      <div>
      <Container>
      <Row>
      <Col xs="2" sm="3"></Col>
      <Col md="6">
      <h1 className = "title">Things to do
      </h1>
      <br/>
      <input  type="text" value={this.state.value}   onChange={this.handleChange} />
      <br/>
      <Button className = "button" color="primary"  value = {this.state.value} onClick = {this.handleSubmit}>submit</Button> 
      <Button className = "button" color="primary" >Remove</Button>      
      </Col>
      <Col xs="2" sm="3"></Col>
      </Row>
      </Container>
      
      <List className = "list" ans={this.state.ans} /> 
      
    
      </div>
    );
  }
}

export default User;

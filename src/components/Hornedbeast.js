import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Hornedbeast extends React.Component {
  constructor(props) {​​​​​​​​
    super(props);
    this.state = {​​​​​​​​
    numOfclick:0,
        }​​​​​​​​;
        }​​​​​​​​
     
    increasenumOfclick = () => {​​​​​​​​
    this.setState({​​​​​​​​
    numOfclick:this.state.numOfclick + 1,
        }​​​​​​​​);
      }​​​​​​​​;
    render() {​​​​​​​​
    return (
    <div>
    <Col>
    <Card className= "card" style ={​​​​​​​​{​​​​​​​​ width:"18rem" }​​​​​​​​}​​​​​​​​  > 
    <Card.img className ="cardi" variant="top" src= {​​​​​​​​this.props.img}​​​​​​​ />  
    <Card.Body >
    <Card.Title> {​​​​​​​​this.props.title}​​​​​​​​ </Card.Title>
    <Card.Text> number of clicks {​​​​​​​​this.state.numOfclick} ​​​​​​​​</Card.Text>
    <Button className="cardB" onClick = {​​​​​​​​this.increasenumOfclick}​​​​​​​​ variant="primary">
    Vote{​​​​​​​​" "}​​​​​​​​
    </Button>
    </Card.Body>
    </Card>
    </Col>
    </div>
        );
      }​​​​​​​​
    }​​​​​​​​
    export default Hornedbeast;
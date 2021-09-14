import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class Hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfclick: 0,
    };
  }

  increasenumOfclick = () => {
    this.setState({
      numOfclick: this.state.numOfclick + 1,
    });
  };

  render() {
    return (
      <div>
        <Col>
          <Card className="card">
            <Card.Img className="cardi" variant="top" src={this.props.img} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {" "}
                number of clicks {this.state.numOfclick} ​​​​​​​​
              </Card.Text>
              <Button
                onClick={this.increasenumOfclick}
                variant="primary"
              >
                Vote ​​​​​​​​
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
export default Hornedbeast;

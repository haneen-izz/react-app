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

  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <Col>
          <Card className="card">
            <Card.Img
              className="cardi"
              variant="top"
              src={this.props.img}
              onClick={this.handleShowDialog}
              style={{ width: "150px" }}
            />

            <Card.Body>
              {this.state.isOpen && (
                <dialog
                  className="dialog"
                  style={{ position: "relative", margin: "150px" }}
                  open
                  onClick={this.handleShowDialog}
                >

                  <img
                    className="image"
                    src={this.props.img}
                    style={{
                      position: "relative",
                      margin: "0px",
                      width: "400px",
                    }}
                    onClick={this.handleShowDialog}
                  />
      

                
                </dialog>
              )}

              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text> number of clicks {this.state.numOfclick}</Card.Text>
              <Card.Text> {this.props.description}</Card.Text>
              <Button onClick={this.increasenumOfclick} variant="primary">
                Vote
              </Button>

              <button
                style={{ margin: "10px" }}
                type="button"
                class="btn btn-info btn-lg"
                data-toggle="modal"
                data-target="#myModal"
              >
                Open Modal
              </button>
            </Card.Body>
          </Card>
        </Col>

        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Modal Header</h4>
              </div>
              <div class="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hornedbeast;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap/";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Cats</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img src={this.props.img} className="img-fluid" > 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
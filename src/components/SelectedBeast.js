import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap/";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeHandler}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.data.image_url}
              style={{ width: "100%", height: "300px" }}
            />
            description:
            {this.props.data.description}
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

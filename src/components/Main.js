import React from "react";
import Hornedbeast from "./Hornedbeast";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import SelectedBeast from "./SelectedBeast";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showModal: false,
      data: data,
    };
  }
  showHandler = (title) => {
    let element = data.find((item) => item.title === title);
    this.setState({
      showModal: true,
      data: element,
    });
  };
  closeHandler = () => {
    this.setState({
      showModal: false,
    });
  };

  filteredImages = (horns) => {
    this.setState({
      data: horns,
    });
  };
  filter = (event) => {
    let numberOfHorns = parseInt(event.target.value);
    let AllHorns = data;
    let newHorns;

    
      newHorns = AllHorns.filter((item) => item.horns === numberOfHorns
    
      )
    this.filteredImages(newHorns);
  };
  render() {
    return (
      <div>
        <Form.Select aria-label="Default select example" onChange={this.filter}>
          <option>Open this select menu</option>
          <option value="0">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">Wow</option>
        </Form.Select>
        <br />
        <Row xs={6} md={5} className="g-4">
          {this.state.data.map((val, index) => {
            return (
              <>
                <Hornedbeast
                  showHandler={this.showHandler}
                  key={index}
                  title={val.title}
                  img={val.image_url}
                  description={val.description}
                  keyWord={val.keyWord}
                  horns={val.horns}
                  handleShow={this.showHandler}
                />
              </>
            );
          })}
          <SelectedBeast
            showModal={this.state.showModal}
            closeHandler={this.closeHandler}
            data={this.state.data}
          />
        </Row>
      </div>
    );
  }
}

export default Main;

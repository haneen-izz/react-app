import React from "react";
import Hornedbeast from "./Hornedbeast";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import SelectedBeast from "./SelectedBeast";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showModal: false,
      data: {},
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

  render() {
    return (
      <div>
        <Row xs={6} md={3} className="g-4">
          {data.map((val, index) => {
            return (
              <>
                <Hornedbeast
                  key={index}
                  title={val.title}
                  img={val.image_url}
                  description={val.description}
                  keyWord={val.leyWord}
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

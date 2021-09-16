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
    };
  }

  showHandler = async (event) => {
    event.preventDefault();
    await this.setState({
      showModal: true,
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
        <Row xs={6} md={2} className="g-4">
          {data.map((val, index) => {
            return (
              <>
                return <Hornedbeast
                  showHandler={this.showHandler}
                  key={index}
                  title={val.title}
                  img={val.image_url}
                  description={val.description}
                  keyWord={val.leyWord}
                  horns={val.horns}
                />
                <SelectedBeast
                  showModal={this.state.showModal}
                  closeHandler={this.closeHandler}
                />
              </>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Main;

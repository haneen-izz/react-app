import React from "react";
import Hornedbeast from "./Hornedbeast";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import SelectedBeast from "./SelectedBeast.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <Row xs={6} md={2} className="g-4">
          {data.map((val, index) => {
            return (
              <Hornedbeast
                key={index}
                title={val.title}
                img={val.image_url}
                description={val.description}
                keyWord={val.leyWord}
                horns={val.horns}
                
              />
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Main;

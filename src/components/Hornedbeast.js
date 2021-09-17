import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

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
    // this.setState({ isOpen: !this.state.isOpen });
    // console.log('cliked');
    this.props.handleShow(this.props.title);
  };

  render() {
    return (
      <div>
        <Col style={{ width: '250px', height: '400px' }}>
          <Card className='card'>
            <Card.Img
              className='cardi'
              variant='top'
              src={this.props.img}
              onClick={this.handleShowDialog}
              style={{ width: '100%', height: '160px' }}
              showModal= {this.showModal}
            />

            <Card.Body>
              {this.state.isOpen && (
                <dialog
                // className='dialog'
                // style={{ position: 'relative', margin: '150px'}}
                // open
                // onClick={this.handleShowDialog}
                ></dialog>
              )}
              <Card.Title 
              style = {{textAlign:'center'}}
              >
                {this.props.title}
                </Card.Title>
              <Card.Text> number of clicks {this.state.numOfclick}</Card.Text>
              <Card.Text> {this.props.description}</Card.Text>
              <Button onClick={this.increasenumOfclick} variant='primary'>
                Vote
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Hornedbeast;

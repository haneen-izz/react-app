import "./App.css";
import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main filteredImages ={this.props.filteredImages} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;

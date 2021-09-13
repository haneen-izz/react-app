
import React from "react";
import Hornedbeast from "./Hornedbeast";
import data from "./data.json";
import Row from "react-bootstrap/Row";
 
class Main extends React.Component {​​​​​​​​
render() {​​​​​​​​
return (
<div>
<Row xs={​​​​​​​​1} ​​​​​​​​md={​​​​​​​​3}​​​​​​ className="g-4"> {​​​​​​​​data.map((val, index) => {​​​​​​​​
return ( 
<Hornedbeast key={​​​​​​​​index}​​​​​​​​ title={​​​​​​​​val.title}​​​​​​​​ img={​​​​​​​​val.image_url}​​​​​​ description={​​​​​​​​val.description}​​​​​​​​ keyWord={​​​​​​​​val.keyWord}​​​​​​​​ horns ={​​​​​​​​val.horns}​​​​​​​

/>
 );
  }​​
  ​​​​​​)
  }​​​​​​​​
</Row> </div>
 );
  }​​​​​​​​
}​​​​​​​​
export default Main;


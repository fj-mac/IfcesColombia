import React, { Component } from "react";
import Buscar from "./buscar";

class App extends Component  {
 constructor(props){
    super(props);
    this.state = {
      Estrato: "",
      top: [],
      bottom: [],
      loading:false
    }
  }




render(){
  return (
    <div>
      <Buscar/>
    </div>
  )
}
}



export default App;

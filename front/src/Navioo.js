import React, { Component } from "react";
import navio from "navio";

class Navioo extends Component  {
 constructor(props){
    super(props);
    this.state = {

      datos:props.datosAPI,
      altura:props.tamano

    }
  }

componentDidMount()
{
  this.update();
}
componentDidUpdate()
{
  this.update();
}

update(){
  let nv = new navio(this.myDiv, this.state.altura);
  nv.data(this.state.datos);
  nv.addAllAttribs();
}


render(){

  return (
      <div ref={myDiv=>this.myDiv=myDiv}> </div>
  )
}
}

export default Navioo;

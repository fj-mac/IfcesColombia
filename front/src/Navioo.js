import React, { Component } from "react";
import navio from "navio";

class Navioo extends Component  {
 constructor(props){
    super(props);
    this.state = {

    }
  }

componentDidMount()
{
  console.log(this.myDiv);
  this.update();
}
update(){
  nv=new navio(this.myDiv,600)
}
componentDidUpdate()
{

}
navioStart()
{
  let nv = navio(d3.select("#navio"), 600);
  nv.data(data);
  nv.addAllAttribs();
}
//const nv=new navio(this.myDiv,600)

render(){

  return (
    <div>
      <div
        type="text"
        ref={myDiv=>this.myDiv=myDiv}
        value={this.state.inValue}
        onChange={this.onChange.bind(this)}
      />
    </div>
  )
}
}

export default Navioo;

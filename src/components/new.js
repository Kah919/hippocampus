import React, { Component } from "react";

class New extends Component {
  state = {
    front: "",
    back: ""
  }

  userInput = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = () => {
    console.log("submitted")
  }

  render() {
    return(
      <div className="new_container">
        <h1> New Flash Card </h1>
        <div className="card_form">
          <input type="text" name="front" className="form-control" placeholder="Insert Title of Flash Card..." onChange={this.userInput}/>
          <textarea placeholder="Insert back of card..." name="back"/>
          <button onClick={this.submit}> Submit </ button>
        </div>
      </div>
    )
  }
}

export default New;

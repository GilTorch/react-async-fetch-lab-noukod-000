// create your App component here
import React from 'react';

class App extends React.Component{

  state={
    people:[]
  }

  componentDidMount(){
    const this=this.bind(this)
    fetch("/http://api.open-notify.org/astros.json")
    .then((res)=>res.json())
    .then((jsonRes)={
      this.setState({
        people: this.state.people
      })
    })
  }

  render(){
    return(
      {this.state.people.map((people)=>{
        return(
          <div>
            <h4>{ people.name }</h4>
            <h4>{ people.craft }</h4>
          </div>
        )
      })}
    )
  }
}

export default App;

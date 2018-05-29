import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{}, 
      active: false
    };
  }



  handleClick = () => {
    fetch('https://api.github.com/users/bomazani')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);
      this.setState({
        user: data,
        active:true
      });
      console.log(this.state.user.login);
    })
  }



  render() { 
    return (
      <div> 
        <button onClick={this.handleClick}>
          Click Here
        </button>
        <h1>Hello!</h1>
        {this.state.active = true && 
        <h2>
          {this.state.user.login} is currently active!
        </h2>
        }
        
        {this.state.active = false &&
        <h2>
          Nobody is currently active.
        </h2>
        }
      </div>
    );
  }
}

export default App;

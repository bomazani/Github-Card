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

  logOffClick = () => {
    
      this.setState({
        user: {},
        active:false
      });
      // console.log(this.state.user.login);
  }
  

  render() { 
    return (
      <div> 
        <h3> Select a button: </h3>
        <button onClick={this.handleClick}>
          Activate
        </button>
        <button onClick={this.logOffClick}>
          Deactivate
        </button>
        <h1></h1>

        {this.state.active && 
          <div id="profile">
            <h1 class="App-header">
              Hello, {this.state.user.login}!
            </h1>
            <h2>
              You are currently active!  
            </h2>
            <h2> Your image: </h2>
            <div id="image">
              <img src={this.state.user.avatar_url} />
            </div>
            <h2>Your real name is: {this.state.user.name} </h2>
            <h2>You are located in {this.state.user.location} </h2>
            <h2>Your Bio:</h2>
            <h3>{this.state.user.bio}</h3>
          </div>
        }


      </div>
    );
  }
}



export default App;

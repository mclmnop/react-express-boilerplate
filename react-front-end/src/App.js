import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { CreateTeam, Teams } from "./components";
import CreateTeam from "./components/CreateTeam";
import Teams from "./components/Teams";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('https://statsapi.web.nhl.com/api/v1/teams') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/teams" exact component={() => <Teams />} />
          <Route path="/teams/new" exact component={() => <CreateTeam />} />
          
          <Route path="/" exact component={() => <div className="App">
          <h1>{ this.state.message }</h1>
          <button onClick={this.fetchData} >
            Fetch Data
          </button>        
        </div>}
           />
          
        </Switch>
  {/*       <div className="App">
          <h1>{ this.state.message }</h1>
          <button onClick={this.fetchData} >
            Fetch Data
          </button>        
        </div> */}



      </Router>
    );
  }
}

export default App;

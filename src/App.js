import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {firstName: "Sam", lastName: "Rex"},
      company: "self",
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button onClick={()=> {
            this.setState(
              () => {
                return {
                  name: {firstName: "Kat", lastName: "Valken"},
                };
              },
              () => {
                console.log(this.state);
              }
            );
            
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}



export default App;

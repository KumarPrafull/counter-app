import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters:[
      { id: 1, value: 1 },
      { id: 2, value: 4 },
      { id: 3, value: 3 },
      { id: 4, value: 2 }
    ]
   };

   handleReset = () => {
    //const resetValue = this.state.counters[i];
    const counters = this.state.counters.map(c => {
      c.value=0; 
      return c;});
      this.setState({counters});
  }

  handleDelete = (someId) => {
    const counters = this.state.counters.filter(c => c.id !== someId);
    this.setState({counters});
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            />
        </main>
      </React.Fragment>
      
    )
  };
}

export default App;

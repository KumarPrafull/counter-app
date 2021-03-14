import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters:[
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
   };

   constructor (props) {
     super(props);
     console.log('App - constructor');

   }

   componentDidMount() {
     //ajax call
     console.log('App - Mounted');
   }

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
    console.log('App - Rendered');

    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=> c.value > 0).length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}
            />
        </main>
      </React.Fragment>
      
    )
  };
}

export default App;

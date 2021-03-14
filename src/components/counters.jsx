import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = { 
    counters:[
      { id: 1, value: 1 },
      { id: 2, value: 4 },
      { id: 3, value: 3 },
      { id: 4, value: 2 }
    ]
   };

  handleReset = () => {
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
  
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map(counter => 
        <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={ counter }/>
          )}
      </div>
     );
  }
}
 
export default Counters;

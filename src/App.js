import React, { Component } from 'react';
import LeftSide from './leftSide'
import RightSide from './rightSide'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
//this goes with summary?

class App extends Component {
  state = {

    //Selected
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  //selected end?
  render() {
  
    
    return (

      <div className="App">
      <header>
        <h1>ELF Computing | Laptops</h1>
      </header>
      <main>
        <LeftSide
          features={this.props.features}
          selected={this.state.selected}
          updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
          USCurrencyFormat={USCurrencyFormat}
        />
        <RightSide
          USCurrencyFormat={USCurrencyFormat}
          selected={this.state.selected}
        />
          
          
       </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';
import Features from './Features';
import Total from './Total';
import NavHeader from './NavHeader';
import Summary from './Summary';



class App extends Component {
  state = {
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

  render() {

    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const getFeature = feature;
      
      
      return(
        <Features feature={getFeature}
                  features={this.props.features}
                  featureHash={featureHash} 
                  USCurrencyFormat={this.USCurrencyFormat} 
                  updateFeature={this.updateFeature}
                  theState={this.state}
                  
                  />
      );


    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <Summary featureHash={featureHash}
                  selectedOption={selectedOption}
                  feature={feature}
                  
        />

      );
    });

    return (
      <div className="App">
        <NavHeader />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
              <Total theState={this.state.selected}/>
              
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

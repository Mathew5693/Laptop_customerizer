import React from 'react';

export default function Total(props){
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

    const total = Object.keys(props.theState).reduce(
        (acc, curr) => acc + props.theState[curr].cost,
        0
      );
    return(<div>{USCurrencyFormat.format(total)}</div>)
}
import React from 'react';
import slugify from 'slugify';
import Items from './Items';

export default function Features(props){
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

        const options = props.features[props.feature].map(item => {

            const itemHash = slugify(JSON.stringify(item));
            const featureSlugify = props.featureSlugify;
            const itemName = item.name;
            const itemCost = item.cost;
            const selectedFeature = props.theState.selected[props.feature].name;
            console.log(props)
            const cost = USCurrencyFormat.format(itemCost);
              return ( <Items itemHash={itemHash}
                             featureSlugify={featureSlugify}
                             itemName={itemName}
                             selectedFeature={selectedFeature}
                             updateFeature={props.updateFeature}
                             feature={props.feature}
                             item={item}
                             cost={cost}/> );
          });
          
    return(
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          {options}
        </fieldset>
            
    )
}
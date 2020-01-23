import React from 'react';

export default function Items(props){
    
    return(
            <div key={props.itemHash} className="feature__item">
              <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={props.featureSlugify}
                checked={props.itemName === props.selectedFeature}
                onChange={e => props.updateFeature(props.feature, props.item)}
              />
              <label htmlFor={props.itemHash} className="feature__label">
                {props.itemName} ({props.cost})
              </label>
            </div>
    )
}

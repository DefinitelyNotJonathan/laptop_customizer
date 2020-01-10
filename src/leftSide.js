import React from 'react'
import slugify from 'slugify';
import ShoppingItem from './shoppingItem'

class LeftSide extends React.Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                    <ShoppingItem
                        item={item}
                        itemHash={itemHash}
                        feature={feature}
                        updateFeature={this.props.updateFeature}
                        USCurrencyFormat={this.props.USCurrencyFormat}
                        selected={this.props.selected}
                    />
               );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });
      
        return(

            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>   
        );
    }
}

export default LeftSide;
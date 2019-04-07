import React, {Component,Fragment} from 'react';
import '../scss/list.scss';

class CocktailsDetails extends Component {
  constructor(props) {
    super(props);
    this.state ={
      drinks: [],
    };
  }

  componentDidMount() {
    let drinks = [];
    const {drink1,drink2,drink3,drink4} = this.props;
    drinks.push(drink1,drink2,drink3,drink4);
    this.setState({
      drinks: this.state.drinks.concat(drinks),
    });

  }

  render() {
    const {drinks} = this.state;
    return (
        <Fragment>
          <tbody>
            {
              (drinks.length) ?
               drinks.map((drink,idx) =>
              <tr key={idx} seckey={idx}>
                <td>{drink.name}</td>
                <td>{drink.glass}</td>
                <td>{drink.instructions}</td>
                <td>{
                  drink.thumbimg.substr(drink.thumbimg.indexOf('media'),drink.thumbimg.length - drink.thumbimg.indexOf('media'))
                }</td>
                <td>{drink.ingredients}</td>
              </tr>
               ):null
            }
          </tbody>
      </Fragment>
    );
  }

}


export default CocktailsDetails;




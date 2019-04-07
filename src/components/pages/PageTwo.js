import React, {Component,Fragment} from 'react';
import {eqAPI} from '../../APIHelpers';
import {drinks} from '../../data/margaritasData';
import List from '../List';
import CocktailsDetails from '../CocktailsDetails';
import {getMeACocktail} from '../../APIHelpers';
import {HashLink as Link} from 'react-router-hash-link';
import {handleTableHeadings} from '../handleTableHeadings';
import Typography from '@material-ui/core/Typography';

class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state ={
      quakes: [],
      margaritas: [],
      loading: false,
    };
    this.handleEarthquakes = this.handleEarthquakes.bind(this);

  }

  componentDidMount =  async () => {
    this.setState({loading: true});
    this.handleEarthquakes();
    let cocktails = await getMeACocktail();
    this.setState({
      margaritas: this.state.margaritas.concat(cocktails),
      loading: false,
    });
  }

  handleEarthquakes() {
    fetch(eqAPI).then(res => res.json())
    .then((data) => {
      return Promise.resolve(data) ? data: Promise.reject(data);
    })
      .then(data => this.setState({
        quakes: this.state.quakes.concat(data.features),
      }))
      .catch(err => {
        this.setState({
          error: err.message,
        });
      })
  }


  render() {
    const {quakes,loading} = this.state;
    if(!!loading) {
      return (
       <h2 className='mt-5 mb-5 text-center'>Page is Loading...</h2>
      );
    }

    return (
      <Fragment>
        <div className='fluid-container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <Typography variant="h2" className='text-center'>
                  EarthQuake Data
                </Typography>
                <Typography variant="h5" gutterBottom
                  className='text-center subtitle'>
                  Last Weekend Top 20 from around the World, March, 2019
                </Typography>
                <Typography variant="h6" gutterBottom
                  className='text-center subtitle'>
                   <Link to={`#cocktails`}>
                   Or Checkout Our Favorite Margaritas
                   </Link>
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 offset-col-2'>
              <ul className='list-group list-group-flush'>
                { !!quakes &&
                    quakes.map((itm,idx) =>
                      (idx <= 20) &&
                    <li key={idx} className="list-group-item">
                      <span className='float-left'>
                        <strong>Where</strong>:&nbsp; {itm.properties.place}
                      </span>
                      <span className='float-right'>
                        <strong>Magnitude</strong>: &nbsp; {itm.properties.mag}
                      </span>
                    </li>
                    )
                }
              </ul>
            </div>

            <div className='col-12 offset-col-2'>
                <div className='cocktails' id='cocktails'>
                  <div className='heading'>
                    <h2 className='text-center mt-3'>Cocktails Favorites</h2>
                  </div>

                    <div className='col-12'>
                      <div>
                        <List
                          tableHeadings={handleTableHeadings(
                            'Name','Glass','Instructions','Thumbnail','Ingredients')
                            }
                            items={drinks}
                            itemElement={CocktailsDetails}

                          />
                      </div>
                    </div>

                </div>
            </div>

          </div>
        </div>
      </Fragment>


    );
  }
}


export default PageTwo;







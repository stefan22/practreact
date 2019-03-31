import React, {Component} from 'react';
import '../../scss/tfl.scss';
import Showtime from '../Showtime';
//tfl real-time disruptions updates
const TFL='https://api-tigris.tfl.gov.uk/Line/Mode/tube/Disruption';

class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tfl: [],
      error: '',
      isShowTime: true,
    };
  }

  getTFLData = () => {

    fetch(TFL).then(data => data.json()
      .then(res => {
        return Promise.resolve(res) ? res : Promise.reject(res);
      }))
      .then(res => this.setState({
        tfl: this.state.tfl.concat(res),
      })
      ).catch(err => {
        this.setState({
          error: err.message,
        });
      })
  }



  render() {
    const {tfl,isShowTime} = this.state;

    return (
      <div>

        <h1 className='mt-5 text-center'>TFL Live Disruptions</h1>
        <h2 className='text-center'>

          {isShowTime ? <Showtime /> : null}

        </h2>
        <h4 className='text-center'>
            {
              (tfl.length) ? '# of alerts: ' + tfl.length :
              'No Alerts at this time. TFL must be doing a good job.'
            }
        </h4>

        {tfl.length ?
          tfl.map((data,idx) =>

            <div key={idx} className='disruptions-list'>

              <ul>
                <li>
                  <span className='time'>{data.category}</span> |
                  <span className='delays'>{data.closureText}</span>
                </li>

                <li>
                  {/* added span tags to this text */}
                  <span className='tfl-line'>
                    {
                      data.description.substr(
                        0,data.description.indexOf(':')
                      )
                    }
                  </span>
                  {
                    data.description.substr(
                      data.description.indexOf(':')
                    , data.description.length -1
                    )
                  }
                </li>
              </ul>
            </div>
          ):null
        }

      </div>
    );
  }
}


export default PageOne;

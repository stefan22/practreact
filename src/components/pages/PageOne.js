import React, {Component} from 'react';
import '../../scss/tfl.scss';
import Showtime from '../Showtime';
import Typography from '@material-ui/core/Typography';


//tfl real-time disruptions updates
const TFL='https://api.tfl.gov.uk/Line/central%2Cdistrict%2Ccircle%2Cvictoria%2Cdlr/Disruption';

class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tfl: [],
      error: '',
      isShowTime: true,
    };
  }

  componentDidMount() {
    this.getTFLData();
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
    console.log(this);
    const {tfl,isShowTime} = this.state;




    return (
      <div>
        <div className='heading'>
          <Typography variant="h2" className='text-center'>
            TFL Live Disruptions
          </Typography>
          <Typography variant="h5" gutterBottom
            className='text-center subtitle'>
            {isShowTime ? <Showtime /> : null}
          </Typography>
          <Typography variant="h6" gutterBottom
            className='text-center subtitle'>
            {
              (tfl.length) ? '# of alerts: ' + tfl.length :
              <Typography variant="body1" style={{color:'red'}}>
                No Alerts at this time. TFL must be doing a good job.
              </Typography>
            }
          </Typography>
        </div>








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

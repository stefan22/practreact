import React, {Component} from 'react';
import '../scss/showtime.scss';

class ShowTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    },1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {

    const {time} = this.state;
    let showTime = time.toLocaleTimeString();
    return (
      <div className='showtime'>
        {showTime}
      </div>
    );
  }


}

export default ShowTime;

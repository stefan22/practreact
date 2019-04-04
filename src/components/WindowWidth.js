import React, {Component} from 'react';

class WindowWidth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth:  window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
  }

  handleResize = () => {
    window.addEventListener('resize', () => {
      this.setState({
        windowWidth: window.innerWidth,
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }



  render() {
    const {windowWidth} = this.state;

    return (
      <div className='text-center'>
        <span
          className='emoji-monitor'
          role='img' aria-label='monitor'>🖥️</span>
          &nbsp;{`width: ${windowWidth} px`}
      </div>
    );
  }


}


export default WindowWidth;

import React, {Component} from 'react';
import '../../../scss/jobslist.scss';

const JobsAPI = 'https://jobs.github.com/positions.json?description=javascript&location=london';

//const bitcoint = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    // const res = await fetch(JobsAPI);
    // const jobs = await res.json();
    // this.setState({jobs});

    fetch(JobsAPI)
      .then(res => res.json())
      .then(jobs => this.setState({jobs}));
  }



  render() {
    console.log(this);
    return (
      <div>
        Jobs List
      </div>
    )
  }

}


export default JobsList;

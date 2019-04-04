import React, {Component} from 'react';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      loading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({loading: true});
    //const jobs = await jobsAPI.getJobs();
    this.setState({loading: false});

  }



  render() {
    const {loading} = this.state;
    if(loading) {
      return <h1 className='mt-5 text-center'>Loading...</h1>
    }
    return (
      <div>
        jobs
      </div>
    );
  }



}


export default Jobs;

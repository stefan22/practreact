import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import {JobsData} from '../../data/jobsData';
import JobsList from './jobsContainer/JobsList';
import JobCreationForm from './jobsContainer/JobCreationForm';
import ButtonPrimary from '../ButtonPrimary';
import '../../scss/button.scss';
//const JobsAPI = 'https://jobs.github.com/positions.json';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      loading: false,
    }
  }

  componentDidMount = async () => {
    const {jobs} = this.state;
    this.setState({loading: true});
    let allJobs = await JobsData;
    this.setState({
      jobs: jobs.concat(allJobs),
      loading: false,
    });
  }


  render() {
    const {loading,jobs} = this.state;
    if(loading) {
      return (
       <h2 className='mt-5 mb-5 text-center'>Page is Loading...</h2>
      );
    }

    return (
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <Typography variant='h2' className='text-center'>
                  Jobs list
                </Typography>
                <Typography variant="h5" gutterBottom
                  className='text-center subtitle'>
                  Passes Jobs & JobCreationForm as a property of JobsList using itemElement..that's all.
                </Typography>
              </div>
              <div>
                <ButtonPrimary
                  rootclass={'add-a-job'}
                  rootid={'add-job'}
                  name={'Add Job'} variant={'text'}
                  whereTo={'/jobs/add-job'}
                />
              </div><br/>

              <div>
                {jobs.length &&
                  <JobsList jobs={jobs} itemElement={JobCreationForm} />
                }
              </div>
            </div>
          </div>
        </div>
    );
  }



}


export default Jobs;

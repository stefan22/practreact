import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import {JobsData} from '../../data/jobsData';
import JobsList from './jobsContainer/JobsList';
import JobCreationForm from './jobsContainer/JobCreationForm';
import ButtonPrimary from '../ButtonPrimary';
import '../../scss/button.scss';

const JobsAPI = 'https://jobs.github.com/positions.json';

class LocalJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      apiJobs: [],
      loading: false,
    }
    this.getApiJobs = this.getApiJobs.bind(this);
  }

  componentDidMount = async () => {
    const {jobs} = this.state;
    this.setState({loading: true});
    this.getApiJobs();
    this.setState({
      jobs: jobs.concat(JobsData),
    });
  }


  getApiJobs() {
    console.log('getting api jobs');
    fetch(JobsAPI).then(data => data.json())
      .then((res) =>  {
        return Promise.resolve(res) ? res : Promise.reject(res);
      })
      .then(res => {
        this.setState({
          apiJobs: this.state.apiJobs.concat(res),
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          err: err.message
        });
      })


  }


  render() {
    const {loading,jobs} = this.state;
    //console.log(this);
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
                  2 Jobs lists
                </Typography>
                <Typography variant="h5" gutterBottom
                  className='text-center subtitle'>
                  Both lists are on state. Just one set on display atm.
                </Typography>
              </div>
              <div>
                <ButtonPrimary
                  rootclass={'add-a-job'}
                  rootid={'add-job'}
                  name={'Add Job'} variant={'text'}
                  whereTo={'/local-jobs/add-job'}
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


export default LocalJobs;

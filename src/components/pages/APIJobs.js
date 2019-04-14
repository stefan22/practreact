import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
//import JobsList from './jobsContainer/JobsList';
//import JobCreationForm from './jobsContainer/JobCreationForm';
import ButtonPrimary from '../ButtonPrimary';
import '../../scss/button.scss';
const JobsAPI = 'https://jobs.github.com/positions.json';

class APIJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiJobs: [],

    }
    this.getApiJobs = this.getApiJobs.bind(this);
  }

  componentDidMount = async () => {
    this.setState({loading: true});
    this.getApiJobs();
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
    const {loading,apiJobs} = this.state;
    console.log(this);

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
                  Software jobs API
                </Typography>
                <Typography variant="h5" gutterBottom
                  className='text-center subtitle'>
                   and fetching data with a service provider.
                </Typography>
              </div>
              <div>
                <ButtonPrimary

                  rootclass={'add-a-job'}
                  rootid={'add-job'}
                  name={'Add Job'} variant={'text'}
                  whereTo={'/api-jobs/add-job'}
                />
              </div>


              <div style={{marginTop:'2rem'}}>

                  {!loading &&
                    apiJobs.map((job,idx) =>
                    <div key={idx} style={{marginBottom:'3rem', borderBottom: '1px dotted lightgray'}}>

                      <h3 className='text-center' style={{
                        backgroundColor:'cornflowerblue', color:'white', width:'fit-content',
                        padding:'7px 10px', margin:'0 auto', fontWeight:'400'
                      }}>{job.title}</h3>
                      <h4 className='text-center' style={{
                        margin:'1rem 0'
                      }}>{job.type}</h4>
                      <ul style={{listStyle:'none',display:'flex',
                      padding:'0',flexFlow:'row',justifyContent:'center'}}>
                      <li style={{width:'24%',textAlign:'left'}} >co:
                        {job.company} </li>
                      <li style={{width:'24%',textAlign:'right'}}>lo:
                       {job.location}</li>
                      </ul>
                    </div>
                    )
                  }

              </div>

            removed local data
            </div>
          </div>
        </div>
    );
  }



}


export default APIJobs;

import React, {Component} from 'react';
import List from '../List';
import ListDetails from '../ListDetails';
import '../../scss/dashboard.scss';
import '../../scss/form.scss';
import WindowWidth from '../WindowWidth';
import {handleTableHeadings} from '../handleTableHeadings';
import Typography from '@material-ui/core/Typography';


const Api = 'https://jsonplaceholder.typicode.com/users';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading:true,
    };
    this.getMeUsers = this.getMeUsers.bind(this);
  }

  componentDidMount() {
    this.getMeUsers();
    this.loadingTimeout = setTimeout(() => {
      this.setState({
        loading: false
      });
    },1200);
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  getMeUsers() {
    fetch(Api).then(res => res.json())
      .then((data) => {
        return Promise.resolve(data) ? data: Promise.reject(data);
      })
      .then(data => {
        this.setState({
          users: data
        });
      })
      .catch(err => {
        this.setState({
          err: err.message
        });
      })
  }

  render() {
    const {users,loading} = this.state;
    if(loading) {
      return <h1 className='mt-5 text-center'>Loading...</h1>
    }

    return (
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <Typography variant="h2" className='text-center'>
                Table of Users
                </Typography>
                <Typography variant="h6" gutterBottom className='text-center subtitle'>
                  Reusable list, passing ListDetails component as a property
                </Typography>
                <Typography variant="h6" gutterBottom className='text-center'>
                  <WindowWidth />
                </Typography>
              </div>

              <List
                tableHeadings={handleTableHeadings(
                  'Id','Name','Username','Phone','Website'
                )}
                items={users}
                itemElement={ListDetails}
              />

            </div>
          </div>
        </div>
    );
  }
}


export default Dashboard;

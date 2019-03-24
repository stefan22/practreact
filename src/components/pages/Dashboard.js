import React, {Component} from 'react';
import List from '../List';
import ListDetails from '../ListDetails';
import '../../scss/dashboard.scss';

const Api = 'https://jsonplaceholder.typicode.com/users';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
    this.getMeUsers = this.getMeUsers.bind(this);
  }

  componentDidMount() {
    this.getMeUsers();
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
    const {users} = this.state;

    return (
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <h1 className='text-center'>Table of Users</h1>
                <p>Reusable list, passing itemElement component as a property</p>
              </div>

              <List users={users} itemElement={ListDetails} />

              </div>
            </div>
        </div>
    );
  }
}


export default Dashboard;

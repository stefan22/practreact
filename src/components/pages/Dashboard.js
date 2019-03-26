import React, {Component} from 'react';
import List from '../List';
import ListDetails from '../ListDetails';
//import FormList from '../FormList';
import '../../scss/dashboard.scss';
import '../../scss/form.scss';
import TextInputField from '../form/TextInputField';
import CheckboxInputField from '../form/CheckboxInputField';
import SelectOption from '../form/SelectOption';

const Api = 'https://jsonplaceholder.typicode.com/users';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
    this.getMeUsers = this.getMeUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    const {type,name,value} = e.target;
    if(type === 'checkbox') {
      console.log(name, ' => ', value);
    } else {
      console.log(name, ' => ', value);
    }

  }

  render() {
    console.log(this);
    const {users} = this.state;
    const options = ['Full-time','Part-time','Remote'];


    return (
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <h1 className='text-center'>Table of Users</h1>
                <p>Reusable list, passing itemElement component as a property</p>
              </div>

              <List users={users} itemElement={ListDetails} />
              <div className='heading'>
                <h1 className='text-center'>Form</h1>
                <p>the form content: passing to the input field component</p>
              </div>

              <form>
                <TextInputField
                  label='Title'
                  name= 'title'
                  //itemElement={FormList}
                  handleChange={this.handleChange}
                />
                <TextInputField
                    label='Company'
                    name='company'
                    //itemElement={FormList}
                />
                <TextInputField
                    label='Salary'
                    name='salary'
                    //itemElement={FormList}
                />

                <CheckboxInputField
                  label='Accept terms'
                  name='terms'
                  //itemElement={FormList}
                />

                <SelectOption
                  label={'Role preferences'}
                  name={'select-box-input'}
                  options={options}
                />
              </form>

            </div>
          </div>
        </div>
    );
  }
}


export default Dashboard;

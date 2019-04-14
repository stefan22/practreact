import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextInputField from '../../form/TextInputField';
import AuthAPI from './AuthAPI';
import '../../../scss/login.scss';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      username: '',
      password: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOnLoginSubmit = this.handleOnLoginSubmit.bind(this);
  }


  handleChange(e) {debugger;
    const {name,value} = e.target;
    console.log('name => ', name, ' value => ', value);
    this.setState = ({
      [name]: value,
    });
  }

  handleOnLoginSubmit = async (e) => {
    e.preventDefault();
    const {success, response, error} = await AuthAPI.loginMocked({
        username: this.state.username,
        password: this.state.password
      });
      if(success) {
        debugger;
        this.props.handleOnLogin(response.data);

      }

    //this.props.handleOnLogin();

  }








  render() {
    console.log(this);
    return (
      <div>

        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <Typography variant="h2" className='text-center'>
                User Login
                </Typography>
                <Typography variant="h6" gutterBottom className='text-center subtitle'>
                 Post, and review your jobs.
                </Typography>

                <Paper>
                <form onSubmit={this.handleOnLoginSubmit}>

                  <TextInputField
                    label={'Username'}
                    name={'username'}
                    id={'username'}
                    required={true}
                    type={'text'}
                    value={this.state.username}
                    placeholder={'enter username'}
                    handleOnBlur={this.handleOnBlur}
                    handleChange={this.handleChange}
                  />

                  <TextInputField
                    label={'Password'}
                    name={'password'}
                    value={this.state.password}
                    id={'password'}
                    type={'password'}
                    placeholder={'enter pasword'}
                    handleChange={this.handleChange}
                    handleOnBlur={this.handleOnBlur}
                  />


                  <div className="form-group">
                    <button
                      type='submit'
                      className="btn btn-primary">Login</button>
                  </div>

                  </form>





                </Paper>
              </div>



            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default LoginPage;

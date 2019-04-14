import React, { Component } from 'react';
import './scss/App.scss';
import Navigation from './components/Navigation';
import {Route,Switch} from 'react-router-dom';
import PageOne from './components/pages/PageOne';
import PageTwo from './components/pages/PageTwo';
import ContactForm from './components/pages/ContactForm';
import Dashboard from './components/pages/Dashboard';
import Company from './components/pages/Company';
import CreateJobPage from './components/pages/jobsContainer/CreateJobPage';
import EveryComponent from './everyContainer/EveryContainer';
import LocalJobs from './components/pages/LocalJobs';
import APIJobs from './components/pages/APIJobs';
import NotFoundPage from './components/pages/NotFoundPage';
import JobCreationForm from './components/pages/jobsContainer/JobCreationForm';
import LoginPage from './components/pages/loginContainer/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
    this.handleOnLogin = this.handleOnLogin.bind(this);
  }

  handleOnLogin = (user) => {
    console.log('clicked login');
    this.setState({user});
    //todo go back to home page via this.props.history.push('/');
  }

  render() {
    console.log(this.state.user);
    console.log(this);
    return (
      <div className='page-wrapper'>
        <div className='main-navigation'>
          <Navigation removeActiveShow={this.removeActiveShow} />
        </div>

        <div className='main-wrapper'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/about-us' component={Company} />
            <Route exact path='/login' component={
              ()=>
                  <LoginPage onLogin={this.handleOnLogin} />
              }
            />
            <Route path='/page-one' component={PageOne} />
            <Route path='/page-two' component={PageTwo} />
            <Route path='/local-jobs' component={LocalJobs} />
            <Route path='/local-jobs/add-job'
                   component={JobCreationForm} />
            <Route path='/local-job/:id' component={CreateJobPage} />

            <Route path='/api-jobs' component={APIJobs} />
            <Route path='/api-jobs/add-job'
                   component={JobCreationForm} />
            <Route path='/api-job/:id' component={CreateJobPage} />
            <Route path='/contact-us' component={ContactForm} />
            <Route path='/about-us' component={Company} />

            <Route component={NotFoundPage} />
          </Switch>
            <Route children={() => (<EveryComponent />)} />
            {/* <Prompt message="Are you really sure you wanna do that?" /> */}



        </div>
      </div>

    );
  }
}

export default App;

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
import Jobs from './components/pages/Jobs';
import NotFoundPage from './components/pages/NotFoundPage';
import JobCreationForm from './components/pages/jobsContainer/JobCreationForm';

class App extends Component {

  render() {
    return (
      <div className='page-wrapper'>
        <div className='main-navigation'>
          <Navigation removeActiveShow={this.removeActiveShow} />
        </div>

        <div className='main-wrapper'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/about-us' component={Company} />
            <Route path='/page-one' component={PageOne} />
            <Route path='/page-two' component={PageTwo} />
            <Route path='/jobs' component={Jobs} />
            <Route path='/jobs/add-job' component={JobCreationForm} />
            <Route path='/job/:id' component={CreateJobPage} />
            <Route path='/contact-us' component={ContactForm} />
            <Route path='/about-us' component={Company} />
            <Route component={NotFoundPage} />
          </Switch>
            <Route children={() => (<EveryComponent />)} />



        </div>
      </div>

    );
  }
}

export default App;

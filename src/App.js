import React, { Component } from 'react';
import './scss/App.scss';
import Navigation from './components/Navigation';
import {Route, Switch} from 'react-router-dom';
import PageOne from './components/pages/PageOne';
import PageTwo from './components/pages/PageTwo';
import PageThree from './components/pages/PageThree';
import Dashboard from './components/pages/Dashboard';
import Company from './components/pages/Company';

class App extends Component {

  render() {
    return (
        <div className='page-wrapper'>
          <div className='main-navigation'>
            <Navigation removeActiveShow={this.removeActiveShow} />
          </div>

          <div className='main-wrapper'>
            <Switch>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/about-us" component={Company} />
              <Route path="/page-one" component={PageOne} />
              <Route path="/page-two" component={PageTwo} />
              <Route path="/page-three" component={PageThree} />
            </Switch>
          </div>
        </div>

    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';
import About from './components/About';
import Login from './components/Login';
import Locker from './components/Locker';
import Families from './components/Families';
import shopData from './data/data'; 

class App extends Component {
  constructor() {
    super();

    this.state = {
      resources: shopData,
      filteredLocations: [],
      locationTypes: [],
      user: false,
      formSubmit: false
    };
  }

  render() {
    const { user, resources } = this.state;
    console.log(user);
    
    return (
      <Router>
        <div>
          <Nav user={user} />
          <main id='page-wrap'>
            <Switch>
              <Route exact path='/' render={() => <Main resources={resources}/>} />
              <Route path='/about' render={() => <About />} />
              <Route path='/places' render={() => <Main resources={resources}/>} />
              <Route path='/families' render={() => <Families user={user}/>} />
              <Route path='/login' render={() => <Login user={user}/>} />
              <Route path='/locker' render={() => <Locker user={user}/>} />
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

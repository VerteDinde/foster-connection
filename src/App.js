import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';
import About from './components/Nav';
import Login from './components/Nav';
import Vendors from './components/Nav';

class App extends Component {
  constructor() {
    super();

    this.state = {
      locations: [
        {
          name: 'Fly Awake Tea Garden',
          shopUrl: 'http://flyawakepdx.com/',
          ratings: '5/5',
          description: '<p>Fly Awake is a secret spot in N Portland. Our Chinese teas are phenomenal, pu-ehr cakes galore, a tea aficionados paradises. We also make chai like your Indian Grandma. We also carry organic herbal dream teas and more from Brown Bear Herbs. We\'re not messing around. Come by and experience the magic and fly awake.</p>',
          latitude: 45.549731,
          longitude: -122.676024,
          street: '909 N Beech St.',
          city: 'Portland',
          state: 'OR',
          zip: '97227',
          country: 'USA',
          category: 'tea house'
        },
        {
          name: 'Heavens Tea, School of Tea Arts',
          shopUrl: 'http://www.heavenstea.com/',
          ratings: '5/5',
          description: '<p>Tea is about making every moment special. We offer Public Tea Classes, Rare Tastings, Transformational Tea Journeys, Private Healing Sessions, Meditation and Tea in Nature outings. We are devoted to giving you an experience of Chinese tea in relation to self cultivation, meditation, healing and in support of your creative expression in the world.</p>',
          latitude: 45.476545,
          longitude: -122.537125,
          street: '122nd Ave and SE Foster',
          city: 'Portland',
          state: 'OR',
          zip: '97215',
          country: 'USA',
          category: 'tea house'
        },
        {
          name: 'Tao of Tea',
          shopUrl: 'http://www.taooftea.com/',
          ratings: '5/5',
          description: '<p>Our focus is to offer teas from the Camellia Sinensis tea plants. Similar to grapes, the tea plants have many regions, varietals, processing methods, and seasons. More importantly, good tea sells out very quickly and is seldom made in large quantities. We as merchants are particular in working with growers to secure exceptional-tasting leaf each season. We pledge to share with you the artistry of the leaves, their origin, processing method, flavor vocabulary, and spirit.</p>',
          latitude: 45.516211,
          longitude: -122.628746,
          street: '3430 SE Belmont St',
          city: 'Portland',
          state: 'OR',
          zip: '97214',
          country: 'USA',
          category: 'tea shop'
        }
      ],
      filteredLocations: [],
      locationTypes: [],
      user: false,
      formSubmit: false
    };
  }

  render() {
    const { user, locations } = this.state;
    return (
      <Router>
        <div className="App">
          <Nav user={user} />
          <main id='page-wrap'>
            <Switch>
              <Route exact path='/' render={() => <Main locations={locations}/>} />
              <Route path='/about' render={() => <About />} />
              <Route path='/places' render={() => <Main locations={locations}/>} />
              <Route path='/vendors' render={() => <Vendors user={user}/>} />
              <Route path='/login' render={() => <Login user={user}/>} />
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

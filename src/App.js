import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
let topnavelement = document.getElementById('topnav');
let sidenavelement = document.getElementById('sidenav');

class TopPortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    topnavelement.appendChild(this.el);
  }

  componentWillUnmount() {
    topnavelement.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class SidePortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    sidenavelement.appendChild(this.el);
  }

  componentWillUnmount() {
    sidenavelement.removeChild(this.el);
  }

  componentDidUpdate() {
    if (window.location.pathname == "/ang") {
      window.location.href = "http://127.0.0.1:3001";
    }
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

const Home = () => (
  <div>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
  </div>
)

const About = () => (
  <div>
    <h2>This is an About page. We keep the Abouts here.</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopPortal>
            <TopNav />
          </TopPortal>
          <SidePortal>
            <SideNav />
          </SidePortal>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        </div>
     </Router>
    );
  }
}
const TopNav = () => (
  <div className="top-nav-container">
      <div className="top-nav-icon"><Link to="/">Just React</Link></div>
      <div className="top-nav-icon"><Link to="/ang">React with Angular</Link></div>
  </div>
)

const SideNav = () => (
  <div className="side-nav-container">
      <div className="side-nav-icon"><Link to="/">sideHome</Link></div>
      <div className="side-nav-icon"><Link to="/about">sideAbout</Link></div>
  </div>
)

export default App;

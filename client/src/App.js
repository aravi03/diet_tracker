import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import searchClient from './components/search_client';
import Client from './components/client/browse';
import Progress from './components/progress/progress';
import Home from './components/home';



import {HashRouter,Route} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <br/><br/><br/><br/><br/>
      <Route exact path='/trainer/makeplan' component={Search}></Route>
      <Route path='/client/makeplan' component={searchClient}></Route>
      <Route exact path='/client/dashboard' component={Client}></Route>
      <Route path='/trainer/progress' component={Progress}></Route>
      <Route exact path='/' component={Home}></Route>

      {/* <Search/> */}
    </div>
    </HashRouter>
  );
}

export default App;

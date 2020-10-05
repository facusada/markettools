import React from 'react';

import './App.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import NewClient from './components/CRUD/client';

function App() {
  return (
    <div className="App">
     
       {/*  <Route 
        exact 
        path='/clientRegister' component={NewClient} />
        <Link to="/clientRegister">
					<button> JOSESITO</button>
				</Link> */}
       
       <NewClient></NewClient>
    </div>
  );
}

export default connect(null, null)(App);

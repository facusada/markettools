import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { UIRouter,UIView, pushStateLocationPlugin} from '@uirouter/react';
import states from './routes/routes'

const plugins = [
  pushStateLocationPlugin
];
function App() {
  return (
    <UIRouter plugins={plugins} states={states}>
      <UIView />
    </UIRouter>
  );
}

export default connect(null, null)(App);

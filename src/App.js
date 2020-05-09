import React from 'react';
import Header from './layout/Header.js';
import WorldCasesScreen from './layout/WorldCasesScreen.js';
import './css/layout.css';
import * as $ from 'jquery';

class App extends React.Component {
 render() {
  return(
   <div>
    <Header></Header>
    <WorldCasesScreen></WorldCasesScreen>
   </div>
  );
 }
}
export default App
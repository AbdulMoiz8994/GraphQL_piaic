import React from 'react'
import './App.css';
import {GithubApi,GithubGraphQl} from './Components/index'


function App() {

  return (
    <div>
      {/* <GithubApi/> */}
      <GithubGraphQl/>
    </div>
  );
}

export default App;

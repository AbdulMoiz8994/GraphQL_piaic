import React from 'react'
import './App.css';
import {GithubApi,GithubGraphQl,GithubGraphQl2,GrapghQlPract,GrapghQlGithub} from './Components/index'


function App() {

  return (
    <div>
      {/* <GithubApi/> */}
      <GithubGraphQl/>
      {/* <GithubGraphQl2/> */}
      {/* <GrapghQlPract/> */}
      <GrapghQlGithub/>
    </div>
  );
}

export default App;

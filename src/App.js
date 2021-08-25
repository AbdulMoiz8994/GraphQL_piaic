import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'


function App() {

   const api= axios.create({
    baseURL: 'https://api.github.com'
   })
  
 const [user, setData]=useState(null);
 const [userRepos, setRepos]=useState(null)

//  ComponentDid Mount
  useEffect(() => {
    (async() =>{
         const {data: user}=await api.get('/users/abdulmoiz8994').catch((error) => {
               console.log(error);
         })
         console.log(user);
         setData(user)
         const {data: repos}=await api.get('/users/AbdulMoiz8994/repos')
         console.log(repos);
         setRepos(repos)
    })()
  },[])


  return (
    <div className="App">
     
    </div>
  );
}

export default App;

import React,{useEffect,useState} from 'react'
import axios from 'axios'

export const GithubApi = () => {
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
      });
    
    return (
        <div>
            <pre>
        {user &&  JSON.stringify(user, null, 2 )}
      </pre>
      <pre>
       <p>{userRepos && JSON.stringify(userRepos, null, 4)}</p> 
      </pre>
        </div>
    )
}

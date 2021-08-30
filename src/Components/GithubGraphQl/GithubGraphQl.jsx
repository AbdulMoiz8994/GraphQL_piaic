import React,{useEffect} from 'react'
import axios from 'axios';


export const GithubGraphQl = () => {
   
// fetch the api via axios
    const api=axios.create({
        baseURL: 'https://api.github.com',
        headers:{
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
        }
    })

// make the query
  const fetchDataquery= async(organizatioName) =>{
      const QUERY_ORGAINZATION=`query{
          organization(login: "${organizatioName}"){
              name
              description
              url
          }
         viewer{
             login
             name
             repositories(first: 5){
                edges{
                    node{
                        name
                        description
                    }
                }
            }
         }
      }`
    const res= await api.post('graphql', {query: QUERY_ORGAINZATION})  
       console.log("Res" , res);
  }
 useEffect(() =>{
     fetchDataquery("facebook")
 })

    return (
        <div>
        </div>
    )
}

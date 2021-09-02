import React, { useEffect } from 'react'
import axios from 'axios'
export const GithuHubPractice = () => {

    // make the base URL
const api=axios.create({
    baseURL: 'https://api.github.com',
    headers:{
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
});
// make the query satndered syntax
const fetchQuery=async(orgainzationName) =>{
   const QUERY_ORGAINZATION= `query organizationMainName($orgainzationName: String!){
      organization(login: $orgainzationName){
          name
          description
          url
      }    
}`


//  make the request and end point
const res=await api.post('/graphql',{
    query: QUERY_ORGAINZATION,
    variables:{
       orgainzationName 
    }
});
console.log(res);
}
useEffect(() =>{
 fetchQuery("google")   
})


    return (
        <div>
            <h1>Hello Practice</h1>
        </div>
    )
}

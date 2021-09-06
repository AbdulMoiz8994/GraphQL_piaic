import React, { useEffect } from 'react'
import axios from 'axios';


export const QueryGithub = () => {

   const api= axios.create({
       baseURL: 'https://api.github.com',
       headers:{
           Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
       }
   });

//    create Query

const fetchData=async(organizationName) =>{
const QUERY_ORGAINZATION=`query organization($organizationName: String!){
    organization(login: $organizationName){
           name
           url
    }
    viewer{
        name
        url
        id
    }
}`
// create end point and console
const res =await api.post('/graphql', {
    query: QUERY_ORGAINZATION,
    variables:{
       organizationName    
    }
});
console.log(res);

}

useEffect(() =>{
  fetchData("facebook")  
});
    return (
        <div>
            <h1>hello World</h1>
        </div>
    )
}

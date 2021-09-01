import React, { useEffect } from 'react'
import axios from 'axios';


export const GrapghQlGithub = () => {

// make the base URL
   const api=axios.create({
       baseURL: 'https://api.github.com',
       headers:{
           Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
       }
   })
// make the query

const fetchData=async(organizationName) =>{
    const QUERY_ORGANZATION=`query{
    organization(login: "${organizationName}"){
         name
         description
    }
    viewer{
        name
        url
    }
}`

// show on console and make the end point
const req=await api.post(`/graphql`, {query: QUERY_ORGANZATION})
  console.log(req);
}
useEffect(() =>{
    fetchData("facebook")
})

    return (
        <div> 
        </div>
    )
}

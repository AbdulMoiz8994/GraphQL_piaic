import React, { useEffect } from 'react'
import axios from 'axios'


export const GrapghQlPract = () => {

 const api=axios.create({
    baseURL: 'https://api.github.com',
    headers:{
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
  })
//   make the query Standered

 const fetchData=async (organizationName) =>{
    const QUERY_ORGRANIZATION=`query queryorganization($organizationName: String!) {
      organization(login: $organizationName){
          name
          description
      }
    }`
   const res= await api.post('/graphql' , {
       query: QUERY_ORGRANIZATION,
       variables:{
        //    organizationName: organizationName same like this if we have key and value have same name
        organizationName
       }
   })
   console.log(res);
 }
   useEffect(() =>{
       fetchData("facebook")
   })


    return (
        <div>
            
        </div>
    )
}

import React, { useEffect } from 'react'
import axios from 'axios';

export const SixGithubGraphQl = () => {

    const api = axios.create({
        baseURL: 'https://api.github.com',
        headers: {
            Authorization: `bearer  ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
        }
    });
// make the query of an orgainzation
   const fetchData=async(org, org2) =>{
       const QueryOrgainzation=`query orgName($orgN: String!, $org2: String!){
         org1: organization(login: $orgN){
              name
              url
          },
          org2: organization(login: $org2){
            name
            url
        }
        viewer{
            name
            id
        }
       }`
       const res= await api.post('graphql', {
           query: QueryOrgainzation,
           variables:{
               orgN: org,
               org2
           }
       });
       console.log(res);
   };
   useEffect(() =>{
       fetchData("facebook", "google")

   },[])

   

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

import React, { useEffect } from 'react'
import axios from  'axios';


export const MutationPratcie = () => {

// make the base url from axios
const api= axios.create({
    baseURL: 'https://api.github.com',
    headers:{
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
})
// make the query
const fetchData=async(organizationName) =>{
//    const QUERY_USER=`query User_name{
//        viewer{
//            name
//            id
//            repositories(first: 50){
//                edges{
//                    node{
//                        name
//                        id
//                    }
//                }
//            }
//        }
//    }`
const MUTATION_QUERY=`mutation orgianzationFunc($abc: ID!){
    addStar(input :{starrableId: $abc}){
          starrable{
              viewerHasStarred
          }
    }
}`

   const {data: res}=await api.post('/graphql',{
       query: MUTATION_QUERY,
       variables:{
          abc: organizationName
       }
   })
   console.log(res);
};
useEffect(() =>{
   fetchData("MDEwOlJlcG9zaXRvcnkyNjk5MTczNzU=") 
});

    return (
        <div>
            
        </div>
    )
}

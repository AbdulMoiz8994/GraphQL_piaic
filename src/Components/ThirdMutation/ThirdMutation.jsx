import React, { useEffect } from 'react'
import axios from 'axios'; 


export const ThirdMutation = () => {

    // make the api call via base url
const api= axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `bearer  ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
})
// maket the mutation
const sendData=async (repositoryId) =>{
   const MUTATION_REQUEST=` mutation  AddStar($repositoryId: ID!){
       addStar(input: {starrableId: $repositoryId}){
           starrable{
            viewerHasStarred
           }
       }
   }` 
        //make the end point 
        const {data :{data :{addStar}}} =await api.post('/graphql', {
            query: MUTATION_REQUEST,
            variables: {
                repositoryId
            }
           
        });
        console.log("Response" , addStar);
};
useEffect(() =>{
    sendData('MDEwOlJlcG9zaXRvcnkzNDk3NDgyNDY=')
})
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

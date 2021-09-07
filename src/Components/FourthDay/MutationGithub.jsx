import React, { useEffect } from 'react';
import axios from 'axios';

export const MutationGithub = () => {


    // create an baseurl from axios whixh helps us to send the request
const api=axios.create({
    baseURL: 'https://api.github.com',
    headers:{
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
});
// creat an full and make the end point

const fetchApi= async(respoitryID) =>{
    const MUTATION_CALL=`mutation addStarRep($respoitryID: ID!){
        addStar(input: {starrableId: $respoitryID}){
             starrable{
                viewerHasStarred
             }
        }
    }`

const res= await api.post('/graphql',{
    query: MUTATION_CALL,
    variables: {
        respoitryID
    }
})
console.log(res);
}

useEffect(() =>{
   fetchApi("MDEwOlJlcG9zaXRvcnkyNjk1Mjk3Mzg=") 
})
    return (
        <div>
            <h1>Hello Mutation</h1>
        </div>
    )
}

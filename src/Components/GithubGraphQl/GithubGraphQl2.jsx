import React, { useEffect } from 'react'
import axios from 'axios'


export const GithubGraphQl2 = () => {


    //  make the base url
    const apis = axios.create({
        baseURL: 'https://api.github.com',
        headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
        }
    })
    // make the Query
    const fetchData= async(organizatioName) =>{
        const QUERY_ORGAINZATIONS=`query{
            organization(login: "${organizatioName}"){
                name
                description
                url
            }
        }`
        // give the end poit to get the result
        const ress = await apis.post('/graphql', { query: QUERY_ORGAINZATIONS });
        console.log(ress);
    }
    
    // useEffect(() => {
    //     fetchData("facebook")
    // })
    useEffect(() =>{
        fetchData("facebook")
    })
    return (
        <div>
            <h1>Github Practice</h1>
        </div>
    )
}

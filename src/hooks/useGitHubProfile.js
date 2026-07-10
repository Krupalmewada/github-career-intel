import { useState, useEffect } from 'react'

export default function useGitHubProfile( username ){
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(()=>{
       if(!username) return;
       const fetchData = async()=>{
        setLoading(true)
        try{
            const [userRes,reposRes] = await Promise.all([fetch(`https://api.github.com/users/${username}`),fetch(`https://api.github.com/users/${username}/repos?per_page=100`)]) 
            const userData = await userRes.json()
            const reposData = await reposRes.json()
            setUser(userData)
            setRepos(reposData)
        }
        catch(e){
            setError(e.message)
        }
        finally{
            setLoading(false)
        }
       }
       fetchData();
    },[username])
    return{user,repos,loading,error}
}
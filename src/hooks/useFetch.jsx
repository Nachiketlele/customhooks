import React, { useEffect } from 'react'
import { useState } from 'react'

const useFetch = () => {
    const [data,setData] = useState([])
    const [loading,setLoading]=useState(false)
    const [error, setError] = useState(false)

    const fetchData = ()=>{
        fetch("https://api.github.com/search/users?q=masai")
        .then((r)=>r.json())
        .then((r)=>{
            setData(r.items)
            setLoading(false)
        }).catch((err)=>{
            setLoading(false)
            setError(true)
        })
    }
    useEffect(()=>{
        fetchData()
        
    },[])
  return {
    data,loading,error
  }
}

export default useFetch
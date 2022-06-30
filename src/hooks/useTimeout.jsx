import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useTimeout = (value) => {
    const [ready,setReady]= useState(false)

    useEffect(()=>{
        const time = setTimeout(()=>{
            setReady(true)

        },value)
        return ()=>{
            clearTimeout(time)
        }
    },[value])
  return  ready
}

export default useTimeout
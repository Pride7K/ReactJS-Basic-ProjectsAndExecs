import { useEffect, useState } from "react"

export const useFetch = (url,method = "get") =>{
    const [response,setResponse] = useState({
        data:null,
        loading:true
    })

    useEffect(()=>{
        fetch(url,{method}).then(resp=> resp.json()).then(resp=>{
            setResponse({
                loading: false,
                data: resp
            })
        })
    },[url,method])

    return response 
}
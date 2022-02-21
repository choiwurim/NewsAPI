import {useState,useEffect} from "react";

export default function usePromise(promiseCreator,deps){
    const [loading, setloading]=useState(false);
    const [resolved, setresolved]=useState(null);
    const [error, seterror]=useState(null);

    useEffect(()=>{
        const process=async()=>{
            setloading(true);
            try{
                const resolved=await promiseCreator();
                setresolved(resolved);
            }
            catch(event){
                seterror(event);
            }
            setloading(false);
        };
        process();
        // eslint-disable-next-lin react-hooks/exhaustive-deps
    },deps);

    return [loading,resolved,error];
}


import { useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {CanceledError, AxiosRequestConfig} from 'axios';


interface fetchResponse<T>{
  count: number;
  results:T[];
};
//deps ==> dependencies array
const useData = <T>(endpoint : string, requestConfig?: AxiosRequestConfig, deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  //fetch all games data
  useEffect(()=>{
    const contoller = new AbortController();
    setIsLoading(true)
    apiClient.get<fetchResponse<T>>(endpoint,{signal: contoller.signal,...requestConfig}).then(
      (res =>{
        setData(res.data.results)
        setIsLoading(false)
      }
         ))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false)

      });

      return ()=> contoller.abort();
  },deps?[...deps]:[]);

  return {data, error, isLoading};
}
export default useData;
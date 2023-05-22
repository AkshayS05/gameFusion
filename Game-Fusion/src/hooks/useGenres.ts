import { useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {CanceledError} from 'axios';

export interface Genre{
  id: number;
  name:string;

};
interface fetchGenresResponse{
count:number;
results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  //fetch all games data
  useEffect(()=>{
    const contoller = new AbortController();
    setIsLoading(true)
    apiClient.get<fetchGenresResponse>('/genres',{signal: contoller.signal}).then(
      (res =>{
        setGenres(res.data.results)
        setIsLoading(false)
      }
         ))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false)

      });

      return ()=> contoller.abort();
  },[]);

  return {genres, error, isLoading};
}
export default useGenres;
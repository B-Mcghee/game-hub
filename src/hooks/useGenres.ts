import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform {
    id: number;
    name: string;
    slug: string;
  }
export interface Genre {
    id: number;
    name: string;
 
  }
  
  export interface FetchGenresResponse {
    count: number;
    results: Genre[];
  }

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true)
      apiClient
        .get<FetchGenresResponse>("/genres", {signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false)
        })
        .catch((err) => 
        {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)
        })
        // .finally(() => setLoading(true));

        return () => controller.abort();
    }, []);  
    return {genres, error, setGenres, isLoading}
}

export default useGenres
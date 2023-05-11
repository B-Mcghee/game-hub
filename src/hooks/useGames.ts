import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState([]);
    const [isLoading, setLoading] = useState([])
    useEffect(() => {
      apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => 
        {
            if(err)
            setError(err.message)
        });
    }, []);  
    return {games, error, setGames, isLoading}
}

export default useGames;
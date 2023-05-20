import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'fe227550ca684148b329caac63f6cc1a'
    }
})
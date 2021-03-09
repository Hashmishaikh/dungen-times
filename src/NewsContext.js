import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const NewsContext = createContext();
export const NewContextProvider = (props) => {
const [data,setData] = useState();
const apiKey = "1ed726a7f5e6418ab677d5d8b9615e64";
useEffect(() => {
    axios.get(
    //    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
       `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
    )
    .then((response) => setData(response.data))
    .catch((error) => console.log(error));

}, []);

return(
    <NewsContext.Provider value={{data}}>
    {props.children}
    </NewsContext.Provider>
)
};
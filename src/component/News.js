import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArtical from './NewsArtical';

function News(props) {
    const {data} = useContext(NewsContext);
    console.log(data);
    return (
        <div>
        <h2 className="dungen">Dungen Times</h2>
            <div className="all__news">
           {data ? data.articles.map(news => <NewsArtical data={news} key={news.url} />) : "Loading......"}
        </div>
        </div>
    )
}

export default News;

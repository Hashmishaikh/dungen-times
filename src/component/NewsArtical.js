import React from 'react'

function NewsArtical({data}) {
    return (
        <div className="news">
            <h1 className="news__title">{data.title}</h1>
            <img className="image" src={data.urlToImage} />
            <p className="news__desc">{data.description}</p>
           <button className="buts"><a className="a" href={data.url}>More</a></button> <br/>
            <span className="news__author">{data.author}</span>
            <span className="news__published">{data.publishedAt}</span>
            <span className="news__source">{data.source.name}</span>
        </div>
    )
}

export default NewsArtical

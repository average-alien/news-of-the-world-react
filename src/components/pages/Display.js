import React from "react";
import { useParams } from 'react-router-dom'

function Display(props) {
    const { id } = useParams()
    const article = props.articleList[id]
    if(!article) {
        return <h2>Oops no article to display</h2>
    }

    return (
        <div>
            <a target="_blank" href={article.url} rel="noreferrer">
                <h2>{article.title}</h2>
            </a>
            <h4>Published on: {article.publishedAt}</h4>
            <h4>From: {article.source.name}</h4>
            <h4>By: {article.author}</h4>

            <p>{article.description}</p>
            <p>{article.content}</p>
        </div>
    )
}

export default Display;
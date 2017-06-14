import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {
    console.log({articles});
    const articleElements = articles.map(article =>
        <li key = {article.id}>
            <Article article = {article} comments = {article.comments}/>
        </li>
    )

    return (
        <ul>
            {articleElements}
        </ul>
    )
}
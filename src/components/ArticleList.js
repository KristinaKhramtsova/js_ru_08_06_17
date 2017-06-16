import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'

class ArticleList extends Component{
    static propTypes = {
        openArticleId: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        toggleOpenArticle: PropTypes.func.isRequired,
        articles: PropTypes.array.isRequired
    }

    render() {
        const {openArticleId, toggleOpenArticle, articles} = this.props

        const articleElements = articles.map(article =>
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openArticleId}
                    toggleOpen = {toggleOpenArticle(article.id)}
                />
            </li>
        )

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default Accordion(ArticleList)
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'

class ArticleList extends Component{
    static propTypes = {
        openItemId: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        toggleOpenItem: PropTypes.func,
        articles: PropTypes.array.isRequired
    }

    render() {
        const {openItemId, toggleOpenItem, articles} = this.props

        const articleElements = articles.map(article =>
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
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
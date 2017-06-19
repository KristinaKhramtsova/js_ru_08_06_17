import React, {Component as ReactComponent} from 'react'

export default (List) => class Accordion extends ReactComponent {
    state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
        openArticleId: null
    }

    render() {
        return <List
                {...this.props}
                openArticleId = {this.state.openArticleId}
                toggleOpenArticle = {this.toggleOpenArticle}
        />
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({
            openArticleId: (openArticleId !== this.state.openArticleId ? openArticleId : false)
        })
    }
}

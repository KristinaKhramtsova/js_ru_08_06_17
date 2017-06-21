import React, {Component as ReactComponent} from 'react'

export default (List) => class Accordion extends ReactComponent {
    state = {
        openItemId: null
    }

    render() {
        return <List
                {...this.props}
                openItemId = {this.state.openItemId}
                toggleOpenItem = {this.toggleOpenItem}
        />
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: (openItemId !== this.state.openItemId ? openItemId : null)
        })
    }
}
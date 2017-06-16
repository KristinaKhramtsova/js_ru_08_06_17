import React, {Component} from 'react'
import Comment from './Comment'

const styles = {
    none: {
        display: 'none'
    }
};

class CommentsList extends Component{
    static defaultProps = {
        comments: []
    }

    state = {
        isOpen: true
    }

    render(){
        const {comments} = this.props;
        const {isOpen} = this.state;

        return (
            <ul>
                {this.getComments()}
                <button style = {!comments.length ? styles.none : null} onClick = {this.toggleOpen}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
            </ul>
        )
    }

    getComments() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props
        if (!comments.length) return <p><i>No comments for this article found</i></p>

        return (
            <ul>
                {comments.map(comment =>
                    <Comment comment = {comment} key = {comment.id} />
                )}
            </ul>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentsList
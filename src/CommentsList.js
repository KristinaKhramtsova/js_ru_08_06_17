import React, {Component} from 'react'

const styles = {
    none: {
        display: 'none'
    }
};

export default class CommentsList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isOpenComment: true
        }
    }

    render(){
        const {comments} = this.props
        const {isOpenComment} = this.state
        let commentsElements;
        if (comments){
            commentsElements = comments.map(comment =>
                this.getComments(comment)
            )
        } else {
            commentsElements = <p><i>No comments for this article found</i></p>
        }

        return (
            <ul>
                {commentsElements}
                <button style = {!comments ? styles.none : null} onClick = {this.toggleOpen}>
                    {isOpenComment ? 'hide comments' : 'show comments'}
                </button>
            </ul>
        )
    }

    getComments(comment) {
        if (!this.state.isOpenComment) return null
        return (
            <div key = {comment.id} >
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
    }
}
import React, {Component} from 'react'

const styles = {
    none: {
        display: 'none'
    }
};

export default class CommentsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpenComment: true
        }
    }

    render(){
        const {comments} = this.props;
        const {isOpenComment} = this.state;

        return (
            <ul>
                {this.getComments(comments)}
                <button style = {!comments ? styles.none : null} onClick = {this.toggleOpen}>
                    {isOpenComment ? 'hide comments' : 'show comments'}
                </button>
            </ul>
        )
    }

    getComments(comments) {
        if (!this.state.isOpenComment) return null;
        let commentsElements;
        if (comments) {
            commentsElements = comments.map(comment =>
                <div key = {comment.id} >
                    <h4>{comment.user}</h4>
                    <p>{comment.text}</p>
                </div>
            )
        } else {
            commentsElements = <p><i>No comments for this article found</i></p>
        }

        return (
            <section>
                {commentsElements}
            </section>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
    }
}
import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

const styles = {
    none: {
        display: 'none'
    }
};

function CommentsList({comments = [], isOpen, toggleOpen}){
    return (
        <ul>
            {getComments(comments, isOpen)}
            <button style = {!comments.length ? styles.none : null} onClick = {toggleOpen}>
                {isOpen ? 'hide comments' : 'show comments'}
            </button>
        </ul>
    )
}

function getComments(comments, isOpen) {
    if (!isOpen) return null;
    if (!comments.length) return <p><i>No comments for this article found</i></p>

    return (
        <ul>
            {comments.map(comment =>
                <Comment comment = {comment} key = {comment.id} />
            )}
        </ul>
    )
}

export default toggleOpen(CommentsList)
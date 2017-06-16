import React from 'react';
import PropTypes from 'prop-types'

function Comment({comment}){
    return (
        <li>
            <p>{comment.text} <i>by <strong>{comment.user}</strong></i></p>
        </li>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    })
}

export default Comment
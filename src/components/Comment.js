import React from 'react';

function Comment({comment}){
    return (
        <li>
            <p>{comment.text} <i>by <strong>{comment.user}</strong></i></p>
        </li>
    )
}

export default Comment
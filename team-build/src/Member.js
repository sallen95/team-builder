import React from 'react'

function Member(props) {
    const { details } = props

    return (
        <div>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Member
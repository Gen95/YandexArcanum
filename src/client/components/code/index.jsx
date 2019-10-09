import React from 'react'
import './style.scss'

function Code() {
    return(
        <div className="code{%if mod %} code_{{ mod }}{% endif %}">{ content|e('html')|raw }</div>
    )
}

export default Code
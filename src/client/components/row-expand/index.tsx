import React from 'react'
const block = 'Row-expand'

export function RowExpand() {
    return(
        <div className={`${ block }`}>
            <span className={`${block}__info`}>/@@ -270, 160  +270, 161 @@</span>
            <span className={`${block}__below`}>Below 20 lines</span>
            <span className={`${block}__above`}>Above 20 lines</span>
        </div>
    )
}

export default RowExpand
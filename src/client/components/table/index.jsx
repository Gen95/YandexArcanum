import React from 'react';
const block = 'table';

export const Table = ({ data }) => {

    const renderRow = (item, index) => {
        return <div className={`${block}__row`} key={index}>
            {Object.values(item).map((cell, index) => <div
                key={index}
                className={`${block}__cell`}>
                {cell}
            </div>)}
        </div>
    }

    const renderHead = () => {
        return <div className={`${block}__row ${block}__head`}>
            {data.header.map((cell, index) => <div
                key={index}
                className={`${block}__cell${cell.width
                    ? ` ${block}__cell_${cell.width}`
                    : ''}`}>
                {cell.name}
            </div>)}
        </div>
    }

    return <div className={`${block}`}>
        {renderHead()}
        {data.items.map(renderRow)}
    </div>

}
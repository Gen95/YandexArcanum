import React from 'react';
const block = 'table';

type HeaderItem = {
    name: string,
    width?: number
}

type Item = {
    commitMessage: string,
    committer: string,
    lastCommit: string,
    name: string | React.ReactNode,
    updated: string
}

type Data = {
    header: Array<HeaderItem>,
    items: Array<Item>
}

type TableProps = {
    data: Data
}

export const Table = ({ data }: TableProps) => {

    const renderRow = (item: Item, index: number) => {
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
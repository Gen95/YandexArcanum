import React from 'react'
import './styles.scss'

const block = 'breadcrumbs'

export const Breadcrumbs = ({ items }) => {
    return (
        <div className={`${block}`}>
            {items.map((item, index) => {
                if (item.href) {
                    return <a
                        key={index}
                        href={item.href}
                        className={`${block}__item link`}>
                        {item.title}
                    </a>
                }
                return <div
                    key={index} 
                    className={`${block}__item ${block}__item_active`}>
                    {item.title}
                </div>
            })}
        </div>
    )
}
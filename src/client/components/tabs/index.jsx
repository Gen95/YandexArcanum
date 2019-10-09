import React from 'react'
import { NavLink } from 'react-router-dom';

const block = 'tabs';

export const Tabs = ({ items }) => {
    return <div className={block}>
        {items.map((tab, index) => {
            return <NavLink
                key={index}
                 to={tab.url}
                 activeClassName={`${block}__item_active`}
            
                className={`${block}__item`}>
                {tab.title}
            </NavLink>
        })}
    </div>
}
import React from 'react'
import { NavLink } from 'react-router-dom';

export type Tab = {
    component: React.ReactNode,
    path: string,
    title: string,
    url: string,
    exact: boolean
}

export type TabsProps = {
    items: Array<Tab>
}

const block = 'tabs';

export const Tabs = ({ items }: TabsProps) => {
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
import React from 'react'
import './styles.scss'

type Item = {
    href?: string,
    title: string
}

export type BreadcrumbsProps = {
    items: Array<Item>;
}

// type Test = string | number;
// type Function  = (arg: number) => void; 
// type AbsFunction<Type> = (args:Type) => Type
// type Test2 = Test & Item;

const block = 'breadcrumbs'

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
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
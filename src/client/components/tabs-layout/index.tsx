import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tabs } from '..';
import { TabsProps } from '../tabs'

export const TabsLayout = ({ items }: TabsProps) => {
    return <div className='tabs-layout'>
        <Tabs items={items} />
        <Switch>
            {items.map((item, index) => {
                return <Route
                    key={index}
                    path={item.path}>
                    {item.component}
                </Route>
            })}
        </Switch>
    </div>
}
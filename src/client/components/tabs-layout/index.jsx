import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tabs } from '../';

export const TabsLayout = ({ items }) => {
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
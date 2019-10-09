import React from 'react';

import { PageLayout, TabsLayout, FolderList } from '../../components'

const breadcrumbs = [
    { href: '#', title: 'root' },
    { href: '#', title: 'trunk' },
    { href: '#', title: 'arcadia' },
    { title: 'arcanum' },
]

const tabs = [
    {
        path: '/files/:repoId?/(tree)?/:commitHash?/:path?',
        url: '/files',
        title: 'FILES',
        component: <FolderList />,
        exact: true

    },
    {
        path: '/branches',
        url: '/branches',
        title: 'BRANCHES',
        component: <h1>BRANCHES</h1>

    }
]

export const IndexPage = () => {
    return <PageLayout breadcrumbs={breadcrumbs}>
        <div className="page__tabs">
            <TabsLayout items={tabs} />
            {/* <input className="js-filter" type="search" name="filter" placeholder="Поиск" /> */}
        </div>
    </PageLayout>
}

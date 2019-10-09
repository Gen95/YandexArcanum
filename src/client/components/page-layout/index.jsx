import React from 'react';
import { Header, Footer, RepositoryHead, Breadcrumbs } from '../';

export const PageLayout = ({ breadcrumbs, children }) => {
    return <div className='page'>
        <div className="page__header">
            <Header />
        </div>
        {breadcrumbs && <div className="page__path">
            <Breadcrumbs items={breadcrumbs} />
        </div>}
        <div className="page__info">
            <RepositoryHead />
        </div>
        <div className="page__content">
            {children}
        </div>
        <div className="page__footer">
            <Footer />
        </div>
    </div>

}
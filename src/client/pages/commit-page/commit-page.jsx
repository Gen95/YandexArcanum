import React from 'react';

import Header from '../components/header';
import RepositoryHead from '../components/repository-head';
import Footer from '../components/footer';
import Breadcrumbs from '../components/breadcrumbs';

function CommitPage() {
  const body = <section>body</section>
    return (
        <div className='page'>
            <div className="page__header">
                <Header />
            </div>

            <div className="page__content">
                <RepositoryHead />

                <DiffPreview />
            </div>


            <div className="page__footer">
                <Footer />
            </div>
        </div>
  )
}

export default CommitPage;

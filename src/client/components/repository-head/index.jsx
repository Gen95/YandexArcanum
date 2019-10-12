import React from 'react'
// import { FolderList } from '../folder-list'
const block = 'Repository-head'

export const RepositoryHead = () => {
    return(
        <div className={block}>
            <div className={`${block}__title`}>
                <h1 className={`${block}__name`}>Arcanum</h1>
                <div className={`${block}__switcher`}>
                    <Branch-dropdown />
                </div>
            </div>
            <div className={`${block}__info`}>Last commit 
                <a href="#" className="link"> c4d248 </a>
                 on 
                <a href="#" className="link"> 20 Oct 2017, 12:24 </a>
                 by 
                <span className="committer"> robot-srch-releaser </span>
            </div>
        </div>
    )
}
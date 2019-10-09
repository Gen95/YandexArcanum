import React from 'react'
import './style.scss'
const block = 'commit-history'

function CommitHistory() {
    return(
        <div className={`${block}`}>
    {for item in commits} {/*FIXME*/}
        <div className={`${block}__item`}>
            <div className={`${block}__date`}>{item.date}</div>
            <div className={`${block}__commitList`}>
                {for commit in item.list}
                    <div className={`${block}__commit`}>
                        <div className={`${block}__icon`}></div>
                        <div className={`${block}__meta`}>
                            <div className={`${block}__row`}>
                                <div className={`${block}__cell ${block}__cell_name ${block}__name`}>{commit.title }</div>
                                <div className={`${block}__cell ${block}__cell_hash`}><a className="link" href="#">{commit.hash}</a></div>
                                <div className={`${block}__cell`}><span className={`${block}__justin`}>&lt\&gt</span></div>
                            </div>
                            <div className={`${block}__info`}>
                                <div className={`${block}__message`}>{commit.message}</div>
                                <div className={`${block}__committer`}>
                                    <a href="#" className="link">{commit.hash}</a> by <span className="committer">{commit.author}</span>, {commit.date}
                                </div>
                            </div>
                        </div>
                    </div>
                {endfor}
                </div>
            </div>
        {endfor}
        </div>
    )
}

export default CommitHistory
import React from 'react'
const block = 'footer'

export const Footer = () => {
    return(
        <div className={block}>
            <div className={`${block}__address`}>Trade secrets of Yandex LLC. 16, Lev Tolstoy Str., Moscow, Russia, 119021</div>
            <div className={`${block}__copyright`}><span className={`${ block }__UI`}>UI: 0.1.15</span>© 2007—2019 
                <a className="link" href="https://yandex.ru/" target="_blank" rel="noopener noreferrer">Yandex</a>
            </div>
        </div>
        )
}
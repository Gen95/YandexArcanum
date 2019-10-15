import React from 'react';
import {RepoDropdown} from '..';
import logoYandex from '../../assets/img/logoYandex.svg';
import logoArcanum from '../../assets/img/logoArcanum.svg';

export const Header = () => {
    return(
        <div className="header">
            <div className="header__logo">
                <img className="header__img" src={logoYandex} alt="Yandex"/>
                <img className="header__img" src={logoArcanum} alt="Arcanum"/>
            </div>
            <RepoDropdown  />
        </div>
    )
}
import React from 'react';
import cx from 'classnames';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

import Palette from 'theme/Palette';

import Logo from 'components/Assets/Logo';
import Search from 'components/Assets/Search';

function Desktop() {
    const itemClasses = cx({
        [Styles.item]: true,
        [Styles.active]: true
    });

    const contentClasses = cx({
        [Styles.content]: true,
        [Grid.container]: true
    });

    return (
        <section className={ Styles.headerComponent }>
            <div className={ contentClasses }>
                <div className={ Styles.logoContainer }>
                    <Logo className={ Styles.logo } color={ Palette.darkGray }/>
                    <div className={ Styles.titles }>
                        <h1 className={ Styles.title }>Джерело життя</h1>
                        <h2 className={ Styles.subtitle }>христианское издательство</h2>
                    </div>
                </div>
                <div className={ Styles.menu }>
                    <a href="#" className={ itemClasses }>Книги</a>
                    <a href="#" className={ Styles.item }>Журналы</a>
                    <a href="#" className={ Styles.item }>Газеты</a>
                    <a href="#" className={ Styles.item }>Авторы</a>
                    <a href="#" className={ Styles.item }>Контакты</a>
                    <Search className={ Styles.search } color={ Palette.darkGray }/>
                </div>
            </div>
        </section>
    );
}

export default Desktop;

import React from 'react';
import Styles from './Styles/main.scss';

import Palette from 'theme/Palette';

import Arrow from 'components/Assets/Arrow';
import Logo from 'components/Assets/Logo';
import Hamburger from 'components/Assets/Hamburger';
import Search from 'components/Assets/Search';

function Mobile() {
    // if (window) {
    //     const $body = document.getElementsByTagName('body').item(0);
    //     const $content = document.getElementById('content');
    //
    //     if (isMenuVisible) {
    //         $content.style.height = 0;
    //         $content.style.overflow = 'hidden';
    //         $body.style.background = Palette.commonColor10;
    //     } else {
    //         $content.style.height = null;
    //         $content.style.overflow = null;
    //         $body.style.background = null;
    //     }
    // }

    return (
        <section className={ Styles.headerComponent }>
            <div className={ Styles.head }>
                <div className={ Styles.logoContainer }>
                    <Logo className={ Styles.logo } color={ Palette.darkGray }/>
                    <div className={ Styles.titles }>
                        <h1 className={ Styles.title }>Джерело життя</h1>
                        <h2 className={ Styles.subtitle }>христианское издательство</h2>
                    </div>
                </div>
                <Hamburger className={ Styles.hamburger } color={ Palette.darkGray }/>
            </div>
            <div className={ Styles.dynamicPart }>
                <div className={ Styles.searchBlock }>
                    <Search className={ Styles.searchIcon } color={ Palette.darkGray }/>
                    <input className={ Styles.searchField } placeholder="Поиск по сайту"/>
                </div>
                <div className={ Styles.menu }>
                    <a href="#" className={ Styles.item }>
                        Книги
                        <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
                    </a>
                    <a href="#" className={ Styles.item }>
                        Журналы
                        <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
                    </a>
                    <a href="#" className={ Styles.item }>
                        Газеты
                        <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
                    </a>
                    <a href="#" className={ Styles.item }>
                        Авторы
                        <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
                    </a>
                    <a href="#" className={ Styles.item }>
                        Контакты
                        <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Mobile;

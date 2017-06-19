import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/main.scss';

import Palette from 'theme/Palette';

import Arrow from 'components/Assets/Arrow';
import Logo from 'components/Assets/Logo';
import Hamburger from 'components/Assets/Hamburger';
import Search from 'components/Assets/Search';

function Mobile(props) {
    const { isMenuVisible, handleMenu } = props;
    if (window) {
        const $content = document.getElementById('content');

        if (isMenuVisible) {
            $content.style.height = 0;
            $content.style.overflow = 'hidden';
        } else {
            $content.style.height = null;
            $content.style.overflow = null;
        }
    }

    const headerComponentStyle = {
        position: isMenuVisible ? 'absolute' : 'static',
        height: isMenuVisible ? '100vh' : 'auto',
        border: isMenuVisible ? '0' : null
    };

    const dynamicPartStyle = {
        display: isMenuVisible ? 'flex' : 'none'
    };

    return (
        <section className={ Styles.headerComponent } style={ headerComponentStyle }>
            <div className={ Styles.head }>
                <div className={ Styles.logoContainer }>
                    <Logo className={ Styles.logo } color={ Palette.darkGray }/>
                    <div className={ Styles.titles }>
                        <h1 className={ Styles.title }>Джерело життя</h1>
                        <h2 className={ Styles.subtitle }>христианское издательство</h2>
                    </div>
                </div>
                <Hamburger
                    className={ Styles.hamburger }
                    color={ Palette.darkGray }
                    isMenuVisible={ isMenuVisible }
                    onClick={ handleMenu }
                />
            </div>
            <div className={ Styles.dynamicPart } style={ dynamicPartStyle }>
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

Mobile.propTypes = {
    isMenuVisible: PropTypes.bool.isRequired,
    handleMenu: PropTypes.func.isRequired
};

export default Mobile;

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Styles from './Styles/main.scss';

import Palette from 'theme/Palette';
import Arrow from 'components/Assets/Arrow';
import Logo from 'components/Assets/Logo';
import Search from 'components/Assets/Search';
import SearchTablet from 'components/Assets/SearchTablet';
import Hamburger from 'components/Assets/Hamburger';

function Tablet(props) {
    const { isMenuVisible, handleMenu } = props;

    if (window) {
        const $content = document.getElementById('content');

        if (isMenuVisible) {
            $content.style.transform = 'translateX(41.7%)';
        } else {
            $content.style.transform = null;
        }
    }

    const headerStyles = {
        border: isMenuVisible ? 0 : null
    };

    const logoContainer = cx({
        [Styles.openMenu]: isMenuVisible,
        [Styles.logoContainer]: true
    });

    const dynamicPartStyle = {
        boxShadow: isMenuVisible ? '0 0 87px 0 rgba(0, 0, 0, 0.1)' : null
    };

    return (
        <section className={ Styles.headerComponent } style={ headerStyles }>
            <Hamburger
                className={ Styles.hamburger }
                color={ Palette.darkGray }
                isMenuVisible={ isMenuVisible }
                onClick={ handleMenu }
            />
            <div className={ logoContainer } >
                <Logo className={ Styles.logo } color={ Palette.darkGray }/>
                <div className={ Styles.titles }>
                    <h1 className={ Styles.title }>Джерело життя</h1>
                    <h2 className={ Styles.subtitle }>христианское издательство</h2>
                </div>
            </div>
            <SearchTablet
                className={ Styles.searchTablet }
                color={ Palette.darkGray }
                onClick={ handleMenu }
            />
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

Tablet.propTypes = {
    isMenuVisible: PropTypes.bool.isRequired,
    handleMenu: PropTypes.func.isRequired
};

export default Tablet;

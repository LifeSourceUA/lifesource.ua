import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

import Palette from 'theme/Palette';

import Logo from 'components/Assets/Logo';
import Search from 'components/Assets/Search';

function Desktop(props) {
    const { items } = props;

    const menuItems = items.map((element) => {
        const itemClasses = cx({
            [Styles.item]: true,
            [Styles.active]: element.active
        });

        return (
            <a key={ element.id } href={ element.href } className={ itemClasses }>
                { element.title }
            </a>
        );
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
                    { menuItems }
                    <Search className={ Styles.search } color={ Palette.darkGray }/>
                </div>
            </div>
        </section>
    );
}

Desktop.propTypes = {
    items: PropTypes.array.isRequired
};

export default Desktop;

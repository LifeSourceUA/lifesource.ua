/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';
import Palette from 'theme/Palette';

/**
 * [IA]
 * Assets Import
 */
import Arrow from 'components/Assets/Arrow.js';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function Common(props) {
    const { mediaType } = props;

    return (
        <section className={ Styles.breadcrumbsComponent }>
            <ul className={ Styles.rowItems }>
                <li className={ Styles.item }><a href="#">Главная</a></li>
                <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
                <li className={ Styles.item }>
                    <a href="#">{ BP.isTabletPortrait(mediaType) ? 'Журналы' : 'Книги' }</a>
                </li>
                <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
                <li className={ Styles.item }>
                    <a href="#">{ BP.isTabletPortrait(mediaType) ? 'Дружболандия' : 'Здоровье и семья' }</a>
                </li>
                <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
                <li className={ Styles.item }><a href="#">Истории о настоящих героях</a></li>
            </ul>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

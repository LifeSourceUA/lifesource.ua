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

function Common(props) {
    const { breadcrumbs } = props;

    const arrow = (
        <Arrow className={ Styles.arrow } color={ Palette.midGray }/>
    );

    const items = breadcrumbs.map((item) => {
        if (item.url) {
            return (
                <li className={ Styles.item } key={ item.id }>
                    <a href={ item.url }>{ item.title }</a>
                </li>
            );
        }

        return (
            <li className={ Styles.item } key={ item.id }>
                { item.title }
            </li>
        );
    })
    .reduce((row, item, i, arr) => {
        row.push(item);
        if (i < arr.length - 1) {
            row.push(arrow);
        }

        return row;
    }, []);

    return (
        <section className={ Styles.breadcrumbsComponent }>
            <ul className={ Styles.rowItems }>
                { items }
            </ul>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Common.propTypes = {
    breadcrumbs: PropTypes.array.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

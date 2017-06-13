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
    const { mediaType, breadcrumbs } = props;
    const items = breadcrumbs.map((item) => {
        return (
            <li className={ Styles.item } key={ item.id }>
                <a href="#">{ item.title }</a>
            </li>
        );
    });

    const arrow = (<Arrow className={ Styles.arrow } color={ Palette.midGray }/>);

    return (
        <section className={ Styles.breadcrumbsComponent }>
            <ul className={ Styles.rowItems }>
                { items[0] }
                { arrow }
                { items[1] }
                { arrow }
                { items[2] }
                { BP.isPhonePortrait(mediaType) || BP.isTabletPortrait(mediaType) ? null : arrow }
                { BP.isPhonePortrait(mediaType) || BP.isTabletPortrait(mediaType) ? null : items[3] }
            </ul>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Common.propTypes = {
    mediaType: PropTypes.string.isRequired,
    breadcrumbs: PropTypes.array.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

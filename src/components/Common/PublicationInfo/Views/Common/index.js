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

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function Common(props) {
    const { mediaType, text, info } = props;
    const infoItems = info.map((item) => {
        return (
            <div className={ Styles.infoItem } key={ item.id }>
                <div className={ Styles.value }>
                    { item.value }
                </div>
                <div className={ Styles.attribute }>
                    { item.attribute }
                </div>
            </div>
        );
    });

    return (
        <section className={ Styles.publicationInfoComponent }>
            <h1 className={ Styles.title }>
                { BP.isTabletPortrait(mediaType) ? 'информация о книге' : 'о книге' }
            </h1>
            <div className={ Styles.mainContent }>
                <div className={ Styles.infoItems }>
                    { infoItems[0] }
                    { infoItems[1] }
                    { infoItems[2] }
                    { BP.isPhonePortrait(mediaType) ? null : infoItems[3] }
                </div>
                <div className={ Styles.text } dangerouslySetInnerHTML={ { __html: text } }/>
            </div>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Common.propTypes = {
    mediaType: PropTypes.string.isRequired,
    info: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

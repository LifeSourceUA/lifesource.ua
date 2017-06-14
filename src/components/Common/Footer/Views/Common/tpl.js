/**
 * [IL]
 * Library Import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
import Envelope from 'components/Assets/Envelope';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function Common(props) {
    const { mediaType } = props;

    const buttons = (
        <div className={ Styles.buttons }>
            <div className={ Styles.btnContacts }>
                <a className={ Styles.link } href="#">Контакты</a>
            </div>
            <div className={ Styles.btnWriteToUs }>
                <a className={ Styles.link } href="#">
                    {
                        BP.isPhonePortrait(mediaType) ? (
                            <Envelope className={ Styles.envelope } color={ Palette.midGray }/>
                        ) : 'Написать нам'
                    }
                </a>
            </div>
        </div>
    );
    const currentYear = new Date().getFullYear();

    return (
        <section className={ Styles.footerComponent }>
            { BP.isPhoneLandscape(mediaType) ? null : buttons }
            <div className={ Styles.copyright }>
                <span className={ Styles.bold }>© 2009 - { currentYear }. </span>
                Христианское издательство
                <span className={ Styles.bold }> «Джерело Життя»</span>
            </div>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Common.propTypes = {
    mediaType: PropTypes.string.isRequired
    // contacts: PropTypes.string.isRequired,
    // writeToUs: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

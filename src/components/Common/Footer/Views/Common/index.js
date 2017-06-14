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
                <a url="#">Контакты</a>
            </div>
            <div className={ Styles.btnWriteToUs }>
                <a url="#">
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
                © 2009 - { currentYear }.  Христианское издательство «Джерело Життя»
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
};

/**
 * [IE]
 * Export
 */
export default Common;

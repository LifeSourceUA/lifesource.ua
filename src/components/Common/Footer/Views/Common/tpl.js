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
        <div className={ Styles.btnRow }>
            <a className={ Styles.button.concat(' ', Styles.btnContacts) } href="#"> Контакты</a>
            <a className={ Styles.button.concat(' ', Styles.btnWriteToUs) } href="#">
                {
                    BP.isPhonePortrait(mediaType) ? (
                        <Envelope className={ Styles.envelope } color={ Palette.midGray }/>
                    ) : 'Написать нам'
                }
            </a>
        </div>
    );

    return (
        <section className={ Styles.footerComponent }>
            { BP.isPhoneLandscape(mediaType) ? null : buttons }
            <div className={ Styles.copyright }>
                <span className={ Styles.bold }>© 2009 - 2017. </span>
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
};

/**
 * [IE]
 * Export
 */
export default Common;
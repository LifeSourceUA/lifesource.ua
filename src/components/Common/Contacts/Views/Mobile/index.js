import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Styles/main.scss';

import Palette from 'theme/Palette';

import BP from 'lib/breakpoints';

import FlightsPhone from 'components/Assets/FlightsPhone';
import Envelope from 'components/Assets/Envelope';

function Mobile(props) {
    const { mediaType } = props;

    const rightBlock = BP.isPhoneLandscape(mediaType) ? (
        <div className={ Styles.rightBlock }>
            <a className={ Styles.contacts } href="#">Контакты</a>
            <a className={ Styles.message } href="#">
                <Envelope className={ Styles.envelope } color={ Palette.midGray }/>
            </a>
        </div>
    ) : null;

    return (
        <section className={ Styles.contactsComponent }>
            <FlightsPhone className={ Styles.backgroundLeft } color={ Palette.midGray }/>
            <div className={ Styles.content }>
                <div className={ Styles.leftBlock }>
                    <span className={ Styles.phoneNumber }>0 <strong>(</strong>800<strong>)</strong> 30 20 20</span>
                    <p className={ Styles.info }>Бесплатно с мобильных телефонов</p>
                </div>
                { rightBlock }
            </div>
            <FlightsPhone className={ Styles.backgroundRight } color={ Palette.midGray }/>
        </section>
    );
}

Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired
};

export default Mobile;

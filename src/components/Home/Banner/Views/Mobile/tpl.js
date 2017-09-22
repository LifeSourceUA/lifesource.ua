import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'vendor/Swipeable';

import Styles from './Styles/main.scss';

import BP from 'lib/breakpoints';

function Mobile(props) {
    const { mediaType } = props;

    const image = {
        backgroundImage: 'url(https://tv.hope.ua/wp-content/uploads/2017/07/Alex-Bol.jpg)'
    };

    const swipeParams = {
        containerWidth: BP.isPhonePortrait(mediaType) ? 100 : 70,
        containerMargin: BP.isPhonePortrait(mediaType) ? 0 : 0.88,
        resistance: true,
        initialAlign: 'left'
    };

    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.wrap }>
                <Swipeable { ...swipeParams }>
                    <a className={ Styles.item } style={ image }/>
                    <a className={ Styles.item } style={ image }/>
                    <a className={ Styles.item } style={ image }/>
                </Swipeable>
            </div>
        </section>
    );
}

Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired
};

export default Mobile;

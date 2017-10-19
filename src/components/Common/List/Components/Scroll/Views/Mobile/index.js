import React from 'react';
import Swipeable from 'vendor/Swipeable';
import PropTypes from 'prop-types';
import Styles from './Styles/main.scss';

import BP from 'lib/breakpoints';

function Mobile(props) {
    const { mediaType } = props;

    const swipeParams = {
        containerWidth: BP.isPhonePortrait(mediaType) ? 80 : 89,
        containerMargin: BP.isPhonePortrait(mediaType) ? -4.5 : -46.3,
        resistance: true
    };

    return (
        <section className={ Styles.scrollComponent }>
            <div className={ Styles.header }>
                <h1 className={ Styles.mainTitle }>Новинки</h1>
                <span className={ Styles.button }>Все книги</span>
            </div>
            <Swipeable { ...swipeParams }>
                <div className={ Styles.item }>
                    <div className={ Styles.book }/>
                    <h2 className={ Styles.title }>Единственная надежда</h2>
                    <span className={ Styles.author }>Марк Финли</span>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.book }/>
                    <h2 className={ Styles.title }>Единственная надежда</h2>
                    <span className={ Styles.author }>Марк Финли</span>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.book }/>
                    <h2 className={ Styles.title }>Единственная надежда</h2>
                    <span className={ Styles.author }>Марк Финли</span>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.book }/>
                    <h2 className={ Styles.title }>Единственная надежда</h2>
                    <span className={ Styles.author }>Марк Финли</span>
                </div>
            </Swipeable>
        </section>
    );
}

Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired
};

export default Mobile;

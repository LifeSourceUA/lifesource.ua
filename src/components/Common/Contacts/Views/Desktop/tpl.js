import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Styles from './Styles/main.scss';
// import Grid from 'theme/Grid.scss';

import Palette from 'theme/Palette';

import BP from 'lib/breakpoints';

import Arrows from 'components/Assets/Arrows';
import Flights from 'components/Assets/FlightsDesktop';

function Desktop(props) {
    const { mediaType } = props;

    const flightsClass = cx({
        [Styles.flights]: true,
        [Styles.leftFlights]: true
    });

    return (
        <section className={ Styles.contactsComponent }>
            <div className={ Styles.wrap }>
                {
                    BP.isTabletPortrait(mediaType) ?
                        null : (
                            <Flights className={ flightsClass } color={ Palette.midGray }/>
                        )
                }
                <div className={ Styles.content }>
                    <div className={ Styles.infoContainer }>
                        <span className={ Styles.phoneNumber }>0 <strong>(</strong>800<strong>)</strong> 30 20 20</span>
                        <h2 className={ Styles.title }>Гарячая линия</h2>
                        <p className={ Styles.info }>
                            Бесплатно с мобильных телефонов.
                            Каждый день: 07:00 – 22:00
                        </p>
                    </div>
                    <Arrows className={ Styles.arrows } color={ Palette.midGray }/>
                    <div className={ Styles.infoContainer }>
                        <span className={ Styles.phoneNumber }><strong>(</strong>044<strong>)</strong> 467 50 69</span>
                        <h2 className={ Styles.title }>Офис издательства</h2>
                        <p className={ Styles.info }>
                            Звонки, согласно тарифам оператора.
                            Будние дни: 10:00 – 17:00
                        </p>
                    </div>
                </div>
                {
                    BP.isTabletPortrait(mediaType) ?
                        null : (
                            <Flights className={ Styles.flights } color={ Palette.midGray }/>
                        )
                }
            </div>
        </section>
    );
}

Desktop.propTypes = {
    mediaType: PropTypes.string.isRequired
};

export default Desktop;

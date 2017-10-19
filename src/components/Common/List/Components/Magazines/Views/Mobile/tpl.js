import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styles from './Styles/main.scss';

// import Palette from 'theme/Palette';
//
import BP from 'lib/breakpoints';

function Mobile(props) {
    const yearClass = cx({
        [Styles.year]: true,
        [Styles.active]: true
    });

    const { mediaType } = props;

    const mainTitle = BP.isTabletPortrait(mediaType) ? null : (<h1 className={ Styles.title }>Знамения времени</h1>);
    const magazineTitle = BP.isMobile(mediaType) ? null : (
        <h3 className={ Styles.magazineTitle }>Знамения времени</h3>
    );

    return (
        <section className={ Styles.magazinesComponent }>
            { mainTitle }
            <div className={ Styles.years }>
                <span className={ yearClass }>
                    2016
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2015
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2014
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2013
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2012
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2011
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2010
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2009
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2008
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2007
                    <span className={ Styles.underLine }/>
                </span>
                <span className={ Styles.year }>
                    2006
                    <span className={ Styles.underLine }/>
                </span>
            </div>
            <div className={ Styles.list }>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (98) 2017</h2>
                    { magazineTitle }
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (98) 2017</h2>
                    { magazineTitle }
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (98) 2017</h2>
                    { magazineTitle }
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (98) 2017</h2>
                    { magazineTitle }
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (98) 2017</h2>
                    { magazineTitle }
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (98) 2017</h2>
                    { magazineTitle }
                </div>
            </div>
        </section>
    );
}

Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired
};

export default Mobile;

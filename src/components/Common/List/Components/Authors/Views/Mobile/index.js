import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Styles/main.scss';

import Sort from 'components/Assets/SortBy';

import Palette from 'theme/Palette';

import BP from 'lib/breakpoints';

function Mobile(props) {
    const { mediaType } = props;

    const description = BP.isPhoneLandscape(mediaType) ? (
        <p className={ Styles.description }>
            Вы когда-нибудь чувствовали, что ваши отношения рушатся? Задумывались ли вы,
            почему не можете найти того единственного и неповторимого?
            Если да, то этот путеводитель для вас.
        </p>
    ) : null;

    return (
        <section className={ Styles.authorsComponent }>
            <div className={ Styles.header }>
                <h1 className={ Styles.mainTitle }>Авторы</h1>
                <Sort className={ Styles.sort } color={ Palette.gray }/>
            </div>
            <div className={ Styles.list }>
                <div className={ Styles.item }>
                    <div className={ Styles.photo }/>
                    <div className={ Styles.info }>
                        <h2 className={ Styles.name }>Эллен Уайт</h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <div className={ Styles.quantityBooks }>
                            <span className={ Styles.number }>26</span>
                            <span className={ Styles.text }>книг на сайте</span>
                        </div>
                    </div>
                    { description }
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.photo }/>
                    <div className={ Styles.info }>
                        <h2 className={ Styles.name }>Эллен Уайт</h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <div className={ Styles.quantityBooks }>
                            <span className={ Styles.number }>26</span>
                            <span className={ Styles.text }>книг на сайте</span>
                        </div>
                    </div>
                    { description }
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.photo }/>
                    <div className={ Styles.info }>
                        <h2 className={ Styles.name }>Эллен Уайт</h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <div className={ Styles.quantityBooks }>
                            <span className={ Styles.number }>26</span>
                            <span className={ Styles.text }>книг на сайте</span>
                        </div>
                    </div>
                    { description }
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.photo }/>
                    <div className={ Styles.info }>
                        <h2 className={ Styles.name }>Эллен Уайт</h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <div className={ Styles.quantityBooks }>
                            <span className={ Styles.number }>26</span>
                            <span className={ Styles.text }>книг на сайте</span>
                        </div>
                    </div>
                    { description }
                </div>
            </div>
            <div className={ Styles.shown }>
                <span className={ Styles.icon }/>
                <span className={ Styles.text }>
                    Показано
                    <strong> 12 </strong>
                    авторов из
                    <strong> 160</strong>
                </span>
                <span className={ Styles.icon }/>
            </div>
            <div className={ Styles.showMore }>Показать еще 12</div>
        </section>
    );
}

Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired
};

export default Mobile;

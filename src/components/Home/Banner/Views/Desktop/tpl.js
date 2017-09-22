import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'vendor/Slider/SliderComponent';
import cx from 'classnames';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';
import BP from 'lib/breakpoints';
import Palette from 'theme/Palette';

import Book from 'components/Assets/Book';

function Desktop(props) {
    const { mediaType, nextIndex, prevIndex, dotIndex } = props;

    console.log(dotIndex);

    const titleClasses = cx({
        [Styles.title]: true,
        [Styles.label]: true
    });

    const containerClasses = cx({
        [Grid.container]: true,
        [Styles.content]: true
    });

    const dotsContainer = cx({
        [Styles.container]: true,
        [Styles.dots]: true
    });

    const image = {
        backgroundImage: 'url(https://tv.hope.ua/wp-content/uploads/2017/07/Alex-Bol.jpg)'
    };

    const description = BP.isTabletPortrait(mediaType) ? 'Книга, которая изменила сознание миллионов людей!'
            : 'Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце • '
            + 'Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику • '
            + 'Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •Начало взросления '
            + '• Тайна счастливой семейной жизни • Изжога • Инжир'
        ;

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    const dots = [];

    for (let i = 0; i < 5; i++) {
        const className = cx({
            [Styles.dot]: true,
            [Styles.active]: i === dotIndex
        });
        dots.push(
            <span key={ i } className={ className }/>
        );
    }

    return (
        <section className={ Styles.bannerComponent }>
            <Slider { ...properties } nextIndex={ nextIndex } prevIndex={ prevIndex }>
                <div className={ Styles.item } style={ image }>
                    <div className={ containerClasses }>
                        <h1 className={ titleClasses }>
                            История спасения
                            <span>Миссионерская книга</span>
                        </h1>
                        <p className={ Styles.description }>{ description }</p>
                        <div className={ Styles.goTo }>
                            <Book color={ Palette.green } className={ Styles.book }/>
                            Перейти к книге
                        </div>
                    </div>
                </div>
                <div className={ Styles.item } style={ image }>
                    <div className={ containerClasses }>
                        <h1 className={ titleClasses }>
                            История спасения
                            <span>Миссионерская книга</span>
                        </h1>
                        <p className={ Styles.description }>{ description }</p>
                        <div className={ Styles.goTo }>
                            <Book color={ Palette.green } className={ Styles.book }/>
                            Перейти к книге
                        </div>
                    </div>
                </div>
                <div className={ Styles.item } style={ image }>
                    <div className={ containerClasses }>
                        <h1 className={ titleClasses }>
                            История спасения
                            <span>Миссионерская книга</span>
                        </h1>
                        <p className={ Styles.description }>{ description }</p>
                        <div className={ Styles.goTo }>
                            <Book color={ Palette.green } className={ Styles.book }/>
                            Перейти к книге
                        </div>
                    </div>
                </div>
                <div className={ Styles.item } style={ image }>
                    <div className={ containerClasses }>
                        <h1 className={ titleClasses }>
                            История спасения
                            <span>Миссионерская книга</span>
                        </h1>
                        <p className={ Styles.description }>{ description }</p>
                        <div className={ Styles.goTo }>
                            <Book color={ Palette.green } className={ Styles.book }/>
                            Перейти к книге
                        </div>
                    </div>
                </div>
                <div className={ Styles.item } style={ image }>
                    <div className={ containerClasses }>
                        <h1 className={ titleClasses }>
                            История спасения
                            <span>Миссионерская книга</span>
                        </h1>
                        <p className={ Styles.description }>{ description }</p>
                        <div className={ Styles.goTo }>
                            <Book color={ Palette.green } className={ Styles.book }/>
                            Перейти к книге
                        </div>
                    </div>
                </div>
            </Slider>
            <div className={ Grid.container }>
                <div className={ dotsContainer }>
                    { dots }
                </div>
            </div>
        </section>
    );
}

Desktop.propTypes = {
    mediaType: PropTypes.string.isRequired,
    nextIndex: PropTypes.func.isRequired,
    prevIndex: PropTypes.func.isRequired,
    dotIndex: PropTypes.number.isRequired
};

export default Desktop;

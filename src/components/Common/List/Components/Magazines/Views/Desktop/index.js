import React from 'react';
import cx from 'classnames';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
// import Grid from 'theme/Grid.scss';

function Desktop() {
    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    const yearClass = cx({
        [Styles.year]: true,
        [Styles.active]: true
    });

    return (
        <section className={ Styles.magazinesComponent }>
            <div className={ Styles.years }>
                <Slider { ...properties }>
                    <span className={ Styles.year }>2016</span>
                    <span className={ Styles.year }>2015</span>
                    <span className={ Styles.year }>2014</span>
                    <span className={ yearClass }>2013</span>
                    <span className={ Styles.year }>2012</span>
                    <span className={ Styles.year }>2011</span>
                    <span className={ Styles.year }>2010</span>
                    <span className={ Styles.year }>2011</span>
                    <span className={ Styles.year }>2010</span>
                    <span className={ Styles.year }>2011</span>
                    <span className={ Styles.year }>2010</span>
                </Slider>
            </div>
            <div className={ Styles.listMagazines }>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.hoverBlock }>
                        <p className={ Styles.description }>
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                        </p>
                    </div>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.hoverBlock }>
                        <p className={ Styles.description }>
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                        </p>
                    </div>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.hoverBlock }>
                        <p className={ Styles.description }>
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                        </p>
                    </div>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.hoverBlock }>
                        <p className={ Styles.description }>
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                        </p>
                    </div>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.hoverBlock }>
                        <p className={ Styles.description }>
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                            Небесный горшечник • Я боюсь • Истинное богатство • Загляни в свое сердце
                            • Красивой быть не запретишь • Ищущая Божья любовь • Правильная реакция на критику •
                            Как снять напряжение • Симон – помощник по неволе • Как стать сильным за 10 дней •
                            Начало взросления • Тайна счастливой семейной жизни • Изжога • Инжир
                        </p>
                    </div>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
            </div>
        </section>
    );
}

export default Desktop;

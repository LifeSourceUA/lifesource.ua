import React from 'react';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

function Desktop() {
    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    return (
        <section className={ Grid.container }>
            <section className={ Styles.scrollComponent }>
                <div className={ Styles.header }>
                    <h1 className={ Styles.mainTitle }>новые выпуски</h1>
                </div>
                <Slider { ...properties }>
                    <div className={ Styles.item }>
                        <div className={ Styles.book }/>
                        <h2 className={ Styles.title }>Возвращение из ада</h2>
                        <span className={ Styles.author }>Олег Капацин</span>
                        <p className={ Styles.description }>
                            Опираясь на свою многолетнюю врачебную практику, личные теоретические знания и
                            известные достижения медицины в этой сфере, авторы предлагают читателям эффективные
                            советы в борьбе с самыми разными детскими болезнями. Причем эти советы
                            основаны исключительно на природных средствах лечения.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.book }/>
                        <h2 className={ Styles.title }>Возвращение из ада</h2>
                        <span className={ Styles.author }>Олег Капацин</span>
                        <p className={ Styles.description }>
                            Опираясь на свою многолетнюю врачебную практику, личные теоретические знания и
                            известные достижения медицины в этой сфере, авторы предлагают читателям эффективные
                            советы в борьбе с самыми разными детскими болезнями. Причем эти советы
                            основаны исключительно на природных средствах лечения.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.book }/>
                        <h2 className={ Styles.title }>Возвращение из ада</h2>
                        <span className={ Styles.author }>Олег Капацин</span>
                        <p className={ Styles.description }>
                            Опираясь на свою многолетнюю врачебную практику, личные теоретические знания и
                            известные достижения медицины в этой сфере, авторы предлагают читателям эффективные
                            советы в борьбе с самыми разными детскими болезнями. Причем эти советы
                            основаны исключительно на природных средствах лечения.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.book }/>
                        <h2 className={ Styles.title }>Возвращение из ада</h2>
                        <span className={ Styles.author }>Олег Капацин</span>
                        <p className={ Styles.description }>
                            Опираясь на свою многолетнюю врачебную практику, личные теоретические знания и
                            известные достижения медицины в этой сфере, авторы предлагают читателям эффективные
                            советы в борьбе с самыми разными детскими болезнями. Причем эти советы
                            основаны исключительно на природных средствах лечения.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.book }/>
                        <h2 className={ Styles.title }>Возвращение из ада</h2>
                        <span className={ Styles.author }>Олег Капацин</span>
                        <p className={ Styles.description }>
                            Опираясь на свою многолетнюю врачебную практику, личные теоретические знания и
                            известные достижения медицины в этой сфере, авторы предлагают читателям эффективные
                            советы в борьбе с самыми разными детскими болезнями. Причем эти советы
                            основаны исключительно на природных средствах лечения.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.book }/>
                        <h2 className={ Styles.title }>Возвращение из ада</h2>
                        <span className={ Styles.author }>Олег Капацин</span>
                        <p className={ Styles.description }>
                            Опираясь на свою многолетнюю врачебную практику, личные теоретические знания и
                            известные достижения медицины в этой сфере, авторы предлагают читателям эффективные
                            советы в борьбе с самыми разными детскими болезнями. Причем эти советы
                            основаны исключительно на природных средствах лечения.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.book }/>
                        <h2 className={ Styles.title }>Возвращение из ада</h2>
                        <span className={ Styles.author }>Олег Капацин</span>
                        <p className={ Styles.description }>
                            Опираясь на свою многолетнюю врачебную практику, личные теоретические знания и
                            известные достижения медицины в этой сфере, авторы предлагают читателям эффективные
                            советы в борьбе с самыми разными детскими болезнями. Причем эти советы
                            основаны исключительно на природных средствах лечения.
                        </p>
                    </div>
                </Slider>
            </section>
        </section>
    );
}

export default Desktop;

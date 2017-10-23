import React from 'react';
import cx from 'classnames';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

function Desktop() {
    const sortItemClass = cx({
        [Styles.item]: true,
        [Styles.active]: true
    });

    const filterItemClass = cx({
        [Styles.filterItem]: true,
        [Styles.active]: true
    });

    return (
        <section className={ Styles.bookComponent }>
            <div className={ Grid.container }>
                <div className={ Styles.header }>
                    <h1 className={ Styles.mainTitle }>Книги</h1>
                    <div className={ Styles.sort }>
                        <span className={ sortItemClass }>Сначала новые</span>
                        <span className={ Styles.item }>По алфавиту</span>
                    </div>
                </div>
            </div>
            <div className={ Styles.filters }>
                <div className={ Grid.container }>
                    <div className={ Styles.filterList }>
                        <span className={ filterItemClass }>
                            Все
                            <span className={ Styles.underLine }/>
                        </span>
                        <span className={ Styles.filterItem }>
                            Духовные
                            <span className={ Styles.underLine }/>
                        </span>
                        <span className={ Styles.filterItem }>
                            Здоровье и семья
                            <span className={ Styles.underLine }/>
                        </span>
                        <span className={ Styles.filterItem }>
                            Детские
                            <span className={ Styles.underLine }/>
                        </span>
                        <span className={ Styles.filterItem }>
                            Научные
                            <span className={ Styles.underLine }/>
                        </span>
                        <span className={ Styles.filterItem }>
                            Труды Эллен Уайт
                            <span className={ Styles.underLine }/>
                        </span>
                    </div>
                </div>
            </div>
            <div className={ Grid.container }>
                <div className={ Styles.list }>
                    <div className={ Styles.item }>
                        <div className={ Styles.hoverBlock }>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.circulation }>10 000<strong>тираж, экз.</strong></span>
                            </div>
                            <p className={ Styles.description }>
                                Эта книга расскажет о людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра. Эта книга расскажет о
                                людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра.
                            </p>
                        </div>
                        <div className={ Styles.book }>
                            <span className={ Styles.bookmarker }/>
                        </div>
                        <h2 className={ Styles.title }>Надежда для последнего</h2>
                        <span className={ Styles.author }>Марк Финли</span>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.hoverBlock }>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.circulation }>10 000<strong>тираж, экз.</strong></span>
                            </div>
                            <p className={ Styles.description }>
                                Эта книга расскажет о людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра. Эта книга расскажет о
                                людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра.
                            </p>
                        </div>
                        <div className={ Styles.book }>
                            <span className={ Styles.bookmarker }/>
                        </div>
                        <h2 className={ Styles.title }>Надежда для последнего времени</h2>
                        <span className={ Styles.author }>Марк Финли</span>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.hoverBlock }>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.circulation }>10 000<strong>тираж, экз.</strong></span>
                            </div>
                            <p className={ Styles.description }>
                                Эта книга расскажет о людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра. Эта книга расскажет о
                                людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра.
                            </p>
                        </div>
                        <div className={ Styles.book }>
                            <span className={ Styles.bookmarker }/>
                        </div>
                        <h2 className={ Styles.title }>Надежда для последнего времени</h2>
                        <span className={ Styles.author }>Марк Финли</span>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.hoverBlock }>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.circulation }>10 000<strong>тираж, экз.</strong></span>
                            </div>
                            <p className={ Styles.description }>
                                Эта книга расскажет о людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра. Эта книга расскажет о
                                людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра.
                            </p>
                        </div>
                        <div className={ Styles.book }>
                            <span className={ Styles.bookmarker }/>
                        </div>
                        <h2 className={ Styles.title }>Надежда для последнего времени</h2>
                        <span className={ Styles.author }>Марк Финли</span>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.hoverBlock }>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.circulation }>10 000<strong>тираж, экз.</strong></span>
                            </div>
                            <p className={ Styles.description }>
                                Эта книга расскажет о людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра. Эта книга расскажет о
                                людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра.
                            </p>
                        </div>
                        <div className={ Styles.book }>
                            <span className={ Styles.bookmarker }/>
                        </div>
                        <h2 className={ Styles.title }>Надежда для последнего времени</h2>
                        <span className={ Styles.author }>Марк Финли</span>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.hoverBlock }>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.circulation }>10 000<strong>тираж, экз.</strong></span>
                            </div>
                            <p className={ Styles.description }>
                                Эта книга расскажет о людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра. Эта книга расскажет о
                                людях, которые однажды оказались в непростых жизненных
                                обстоятельствах, но обрели надежду. Озаривший их свет помог им посмотреть в
                                будущее с уверенностью, понять, что существует светлое завтра.
                            </p>
                        </div>
                        <div className={ Styles.book }>
                            <span className={ Styles.bookmarker }/>
                        </div>
                        <h2 className={ Styles.title }>Надежда для последнего времени</h2>
                        <span className={ Styles.author }>Марк Финли</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Desktop;

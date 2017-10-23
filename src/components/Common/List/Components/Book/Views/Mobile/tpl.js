import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Styles from './Styles/main.scss';

import Filters from 'components/Assets/Filters';
import Sort from 'components/Assets/SortBy';

import Palette from 'theme/Palette';

import BP from 'lib/breakpoints';

function Mobile(props) {
    const {
        mediaType,
        isFiltersVisible,
        isSortVisible,
        showSort,
        showFilters
    } = props;

    const itemClasses = cx({
        [Styles.item]: true,
        [Styles.active]: true
    });

    const description = BP.isPhoneLandscape(mediaType) ? (
        <p className={ Styles.description }>
            Вы когда-нибудь чувствовали, что ваши отношения рушатся? Задумывались ли вы, почему не
            можете найти того единственного и неповторимого?
        </p>
    ) : null;

    const sortingStyle = {
        display: isSortVisible ? 'flex' : 'none'
    };

    const filtersBlockStyle = {
        display: isFiltersVisible ? 'flex' : 'none'
    };

    const sortIconFill = isSortVisible ? Palette.red : Palette.gray;
    const filtersIconFill = isFiltersVisible ? Palette.green : Palette.gray;

    return (
        <section className={ Styles.bookComponent }>
            <div className={ Styles.header }>
                <h1 className={ Styles.mainTitle }>Книги</h1>
                <div className={ Styles.settings }>
                    <Sort className={ Styles.sort } color={ sortIconFill } onClick={ showSort }/>
                    <Filters className={ Styles.filters } color={ filtersIconFill } onClick={ showFilters }/>
                </div>
            </div>
            <div className={ Styles.dynamicPart }>
                <div className={ Styles.sorting } style={ sortingStyle }>
                    <span className={ itemClasses }>
                        Сначала новые
                        <span className={ Styles.underLine }/>
                    </span>
                    <span className={ Styles.item }>
                        По алфавиту
                        <span className={ Styles.underLine }/>
                    </span>
                </div>
                <div className={ Styles.filtersBlock } style={ filtersBlockStyle }>
                    <span className={ itemClasses }>
                        Все
                        <span className={ Styles.underLine }/>
                    </span>
                    <span className={ Styles.item }>
                        Духовные
                        <span className={ Styles.underLine }/>
                    </span>
                    <span className={ Styles.item }>
                        Здоровье и семья
                        <span className={ Styles.underLine }/>
                    </span>
                    <span className={ Styles.item }>
                        Музыкальные
                        <span className={ Styles.underLine }/>
                    </span>
                </div>
            </div>
            <div className={ Styles.list }>
                <div className={ Styles.item }>
                    <div className={ Styles.book }/>
                    <div className={ Styles.info }>
                        <div className={ Styles.leftBlock }>
                            <h3 className={ Styles.title }>Единственная надежда</h3>
                            <span className={ Styles.author }>А. Буйон</span>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                            </div>
                        </div>
                        { description }
                    </div>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.book }/>
                    <div className={ Styles.info }>
                        <div className={ Styles.leftBlock }>
                            <h3 className={ Styles.title }>Единственная надежда</h3>
                            <span className={ Styles.author }>А. Буйон</span>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                            </div>
                        </div>
                        { description }
                    </div>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.book }/>
                    <div className={ Styles.info }>
                        <div className={ Styles.leftBlock }>
                            <h3 className={ Styles.title }>Единственная надежда</h3>
                            <span className={ Styles.author }>А. Буйон</span>
                            <div className={ Styles.tags }>
                                <span className={ Styles.new }>новинка</span>
                                <span className={ Styles.category }>здоровье и семья</span>
                            </div>
                            <div className={ Styles.characteristics }>
                                <span className={ Styles.quantityPages }>128<strong>стр.</strong></span>
                                <span className={ Styles.divider }/>
                                <span className={ Styles.binding }>мягкий<strong>переплет</strong></span>
                            </div>
                        </div>
                        { description }
                    </div>
                </div>
            </div>
        </section>
    );
}

Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired,
    isSortVisible: PropTypes.bool.isRequired,
    isFiltersVisible: PropTypes.bool.isRequired,
    showSort: PropTypes.func.isRequired,
    showFilters: PropTypes.func.isRequired
};

export default Mobile;

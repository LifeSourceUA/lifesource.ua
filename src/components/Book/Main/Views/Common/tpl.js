/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import BP from 'lib/breakpoints';

import Label from 'components/Assets/LifeSource/LabelEdge.js';
import Content from 'components/Assets/LifeSource/Content.js';
import Book from 'components/Assets/LifeSource/Book.js';
import Arrow from 'components/Assets/LifeSource/Arrow.js';
import Ua from 'components/Assets/LifeSource/UA.js';
// import Ru from 'components/Assets/LifeSource/RU.js';

function Common(props) {
    const { mediaType } = props;

    const seriesBooks = BP.isTabletPortrait(mediaType) || BP.isDesktop(mediaType) ? (
        <div className={ Styles.seriesBooks }>
            <Label className={ Styles.labelStart } color1={ '#a8b8bf' }/>
            серия книг
            <Label className={ Styles.labelEnd } color1={ '#a8b8bf' }/>
        </div>
    ) : null;

    const arrowBack = BP.isDesktop(mediaType) || BP.isTabletPortrait(mediaType) ? (
        <div className={ Styles.arrowBack }>
            <div className={ Styles.circle }>
                <Arrow color={ '#f0766d' }/>
            </div>
            { BP.isDesktop(mediaType) ? 'перейти к списку книг' : null }
        </div>
    ) : null;

    const language = BP.isDesktop(mediaType) || BP.isTabletPortrait(mediaType) ? (
        <div className={ Styles.language }>
            <Ua className={ Styles.flag }/>
            { BP.isDesktop(mediaType) ? (<span className={ Styles.text }>Історії про справжніх</span>) : null }
            { BP.isDesktop(mediaType) ? <Arrow className={ Styles.arrow } color={ '#707a80' }/> : null }
        </div>
    ) : null;

    const secondAuthor = BP.isTabletPortrait(mediaType) || BP.isDesktop(mediaType) ? (
        <h2 className={ Styles.author }>Лори Пекхем
            <label className={ Styles.dot }/>
        </h2>
    ) : null;

    const description = BP.isDesktop(mediaType) ? (
        <p className={ Styles.description }>Вы когда-нибудь чувствовали,
            что ваши отношения рушатся? Задумывались ли вы, почему не можете найти того единственного и неповторимого?
        </p>
    ) : null;

    const hoverBook = BP.isDesktop(mediaType) ? (
        <div className={ Styles.hoverBook }><Book className={ Styles.book } color={ '#65bf80' }/></div>
    ) : null;

    const popupClasses = cx({
        [Styles.popup]: true,
        [Styles.active]: true
    });

    const poapWindow = BP.isDesktop(mediaType) ? (
        <div className={ popupClasses }>
            <ul className={ Styles.list }>
                <li className={ Styles.item }>Вступление</li>
                <li className={ Styles.item }>Предисловие</li>
                <li className={ Styles.item }>
                    <ul className={ Styles.sublist }>
                        <li className={ Styles.item }>Как сносить удары судьбы</li>
                        <li className={ Styles.item }>Как бороться с ленью</li>
                        <li className={ Styles.item }>Что такое смерение</li>
                        <li className={ Styles.item }>Когда нужно уступать</li>
                        <li className={ Styles.item }>Компромисс</li>
                    </ul>
                </li>
                <li className={ Styles.item }>Умеем ли мы слушать?</li>
                <li className={ Styles.item }>Искусство слушать</li>
                <li className={ Styles.item }>Нехорошо быть одному</li>
                <li className={ Styles.item }>Умеем ли мы слушать?</li>
                <li className={ Styles.item }>Искусство слушать</li>
                <li className={ Styles.item }>Нехорошо быть одному</li>
                <li className={ Styles.item }>Умеем ли мы слушать?</li>
                <li className={ Styles.item }>Искусство слушать</li>
                <li className={ Styles.item }>Нехорошо быть одному</li>
            </ul>
        </div>
    ) : null;

    const content = BP.isTabletPortrait(mediaType) || BP.isDesktop(mediaType) ? (
        <a className={ Styles.tableOfContents }>
            <Content color={ '#707a80' }/>
            Оглавление
            { poapWindow }
        </a>
    ) : null;

    return (
        <section className={ Styles.mainComponent }>
            { arrowBack }
            <div className={ Styles.content }>
                <div className={ Styles.image }>
                    { hoverBook }
                    <div className={ Styles.topLayer }/>
                    <div className={ Styles.middleLayer }/>
                    <div className={ Styles.bottomLayer }/>
                    <span className={ Styles.labelNum }>
                        <Label className={ Styles.label } color1={ '#a8b8bf' }/>
                        5
                    </span>
                    <span className={ Styles.labelNew }>
                        <Label className={ Styles.label } color={ '#f0766d' } color1={ '#f0766d' }/>
                    </span>
                </div>
                <div className={ Styles.info }>
                    <h1 className={ Styles.title }>Истории о настоящих героях</h1>
                    <div className={ Styles.authors }>
                        { secondAuthor }
                        <h2 className={ Styles.author }>Алехандро Буйон</h2>
                    </div>
                    <div className={ Styles.tags }>
                        <div className={ Styles.new }>
                            <Label className={ Styles.labelStart } color={ '#f0766d' } color1={ '#f0766d' }/>
                            новинка
                            <Label className={ Styles.labelEnd } color={ '#f0766d' } color1={ '#f0766d' }/>
                        </div>
                        { seriesBooks }
                        <div className={ Styles.class }>здоровье и семья</div>
                    </div>
                    <div className={ Styles.buttons }>
                        { content }
                        <a className={ Styles.read }>
                            <Book className={ Styles.book } color={ '#65bf80' }/>
                            Читать фрагмент книги
                        </a>
                    </div>
                    { description }
                </div>
            </div>
            { language }
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

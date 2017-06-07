/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';
// import Grids from 'theme/Grid.scss';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function Common(props) {
    const { mediaType } = props;

    return (
        <section className={ Styles.publicationInfoComponent }>
            <h1 className={ Styles.title }>
                { BP.isTabletPortrait(mediaType) ? 'информация о книге' : 'о книге' }
            </h1>
            <div className={ Styles.mainContent }>
                <div className={ Styles.info }>
                    <div className={ Styles.pageCount }>
                        <div className={ Styles.value }>128</div>
                        <div className={ Styles.attribute }>стр.</div>
                    </div>
                    <div className={ Styles.editionYear }>
                        <div className={ Styles.value }>2016</div>
                        <div className={ Styles.attribute }>
                            { BP.isMobile(mediaType) ? 'год' : 'год издания' }
                        </div>
                    </div>
                    <div className={ Styles.editionCount }>
                        <div className={ Styles.value }>
                            { BP.isMobile(mediaType) ? '10 000' : '10 тыс.' }
                        </div>
                        <div className={ Styles.attribute }>
                            { BP.isMobile(mediaType) || BP.isTabletPortrait(mediaType) ? 'тираж, экз.' : 'тираж' }
                        </div>
                    </div>
                    {
                        !BP.isPhonePortrait(mediaType) ? (
                            <div className={ Styles.paper }>
                                <div className={ Styles.value }>
                                    { BP.isTabletPortrait(mediaType) ? 'мелованная, 80 г/м²' : 'мягкий' }
                                </div>
                                <div className={ Styles.attribute }>
                                    { BP.isTabletPortrait(mediaType) ? 'бумага, плотность' : 'переплет' }
                                </div>
                            </div>
                        ) : null
                    }
                </div>
                <div className={ Styles.text }>
                    <p>
                        Ты прочитаешь в этой книге об одном долларе, который умножился.
                        О молитве, написанной на воздушном змее. О дверях тюрьмы, которые открылись.
                        О радиаторе, который сам заработал и баке, который сам заполнился бензином.
                        Также ты найдешь истории о дожде, который проливался только на огороды миссионерской школы.
                        О книге, которая не сгорела. О часах, пробивших тринадцать. О манне с небес в Африке.
                        О поездке внутри торнадо и невидимых руках, державших автомобиль.
                        О многих таинственных незнакомцах, которых одни люди видели,
                        а другие нет, и которые всегда защищали, спасали и вызволяли из трудных ситуаций.
                    </p>
                </div>
            </div>
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

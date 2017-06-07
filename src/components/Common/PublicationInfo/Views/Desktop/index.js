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

function Desktop(props) {
    const { mediaType } = props;

    return (
        <section className={ Styles.publicationInfoComponent }>
            <h1 className={ Styles.header }>
                { BP.isTabletPortrait(mediaType) ? 'информация о книге' : 'о книге' }
            </h1>
            <div className={ Styles.mainContainer }>
                <div className={ Styles.information }>
                    <div className={ Styles.pageCount }>
                        <div className={ Styles.value1 }>128</div>
                        <div className={ Styles.attribute1 }>стр.</div>
                    </div>
                    <div className={ Styles.editionYear }>
                        <div className={ Styles.value2 }>2016</div>
                        <div className={ Styles.attribute2 }>год издания</div>
                    </div>
                    <div className={ Styles.editionCount }>
                        <div className={ Styles.value3 }>10 тыс.</div>
                        <div className={ Styles.attribute3 }>
                            { BP.isTabletPortrait(mediaType) ? 'тираж (экз.)' : 'тираж' }
                        </div>
                    </div>
                    <div className={ Styles.paper }>
                        <div className={ Styles.value4 }>
                            { BP.isTabletPortrait(mediaType) ? 'мелованная, 80 г/м²' : 'мягкий' }
                        </div>
                        <div className={ Styles.attribute4 }>
                            { BP.isTabletPortrait(mediaType) ? 'бумага, плотность' : 'переплет' }
                        </div>
                    </div>
                </div>
                <div className={ Styles.content }>
                    <p>
                        Ты прочитаешь в этой книге об одном долларе, который умножился.
                        О молитве, написанной на воздушном змее. О дверях тюрьмы, которые открылись.
                        О заработал и баке, который сам заполнился бензином.
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
Desktop.propTypes = {
    mediaType: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Desktop;

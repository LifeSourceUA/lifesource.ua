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

function Mobile(props) {
    const { mediaType } = props;

    return (
        <section className={ Styles.publicationInfoComponent }>
            <h1 className={ Styles.header }>о книге</h1>
            <div className={ Styles.information }>
                <div className={ Styles.pageCount }>
                    <div className={ Styles.value }>128</div>
                    <div className={ Styles.attribute }>стр.</div>
                </div>
                <div className={ Styles.editionYear }>
                    <div className={ Styles.value }>2016</div>
                    <div className={ Styles.attribute }>год издания</div>
                </div>
                <div className={ Styles.editionCount }>
                    <div className={ Styles.value }>10 тыс.</div>
                    <div className={ Styles.attribute }>тираж (экз.)</div>
                </div>
                {
                    BP.isPhoneLandscape(mediaType) ? (
                        <div className={ Styles.paper }>
                            <div className={ Styles.value }>мелованная, 80 г/м²</div>
                            <div className={ Styles.attribute }>бумага, плотность</div>
                        </div>
                    ) : null
                }
            </div>
            <div className={ Styles.content }>
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
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Mobile;

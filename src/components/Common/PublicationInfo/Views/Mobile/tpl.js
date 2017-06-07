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
            <div className={ Styles.mainContent }>
                <div className={ Styles.information }>
                    <div className={ Styles.pageCount }>
                        <div className={ Styles.value1 }>128</div>
                        <div className={ Styles.attribute1 }>стр.</div>
                    </div>
                    <div className={ Styles.editionYear }>
                        <div className={ Styles.value2 }>2016</div>
                        <div className={ Styles.attribute2 }>год</div>
                    </div>
                    <div className={ Styles.editionCount }>
                        <div className={ Styles.value3 }>10 000</div>
                        <div className={ Styles.attribute3 }>тираж (экз.)</div>
                    </div>
                    {
                        BP.isPhoneLandscape(mediaType) ? (
                            <div className={ Styles.paper }>
                                <div className={ Styles.value4 }>мягкий</div>
                                <div className={ Styles.attribute4 }>переплет</div>
                            </div>
                        ) : null
                    }
                </div>
                <div className={ Styles.content }>
                    «Итак, если есть какое утешение во Христе, если есть какая отрада любви,
                    если есть какое общение духа, если есть какое милосердие и сострадательность» (Флп. 2:1).
                    Оставалась неделя до Рождества. Ричард Осборн, президент колледжа «Пасифик Юнион».
                </div>
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

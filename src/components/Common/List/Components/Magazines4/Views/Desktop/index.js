import React from 'react';

import Styles from './Styles/main.scss';
// import Grid from 'theme/Grid.scss';

import Palette from 'theme/Palette';

import Arrow from 'components/Assets/Arrow';

function Desktop() {
    return (
        <section className={ Styles.magazinesComponent }>
            <div className={ Styles.header }>
                <h1 className={ Styles.title }>выпуски газет</h1>
                <div className={ Styles.showAll }>
                    Все газеты
                    <Arrow className={ Styles.arrow } color={ Palette.green }/>
                </div>
            </div>
            <div className={ Styles.listMagazines }>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.magazine }/>
                    <h2 className={ Styles.number }>№1 (1) 2013</h2>
                    <h3 className={ Styles.title }>Дружболандія</h3>
                </div>
            </div>
        </section>
    );
}

export default Desktop;

import React from 'react';
import Styles from './Styles/main.scss';

import Palette from 'theme/Palette';

import Arrow from 'components/Assets/LifeSource/Arrow';

function Mobile() {
    return (
        <section className={ Styles.authorsComponent }>
            <h1 className={ Styles.title }>об авторе</h1>
            <div className={ Styles.container }>
                <div className={ Styles.image }/>
                <div className={ Styles.info }>
                    <div className={ Styles.block }>
                        <h2 className={ Styles.name }>Алехандро Буйон</h2>
                        <span className={ Styles.subtitle }>евангелист</span>
                    </div>
                    <a href="#" className={ Styles.allBooks }>
                        все книги автора
                        <Arrow className={ Styles.arrow } color={ Palette.green }/>
                    </a>
                </div>
            </div>
            <p className={ Styles.description }>
                Родился в Перу, работал более
                сорока лет в Южной Америке. В настоящее время живет в Бразилии.
                Евангелист, выступает на радио и телевидении. Является автором
                несколькних книг и статей.
            </p>
        </section>
    );
}

export default Mobile;

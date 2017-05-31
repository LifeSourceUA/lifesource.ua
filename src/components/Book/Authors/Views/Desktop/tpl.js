import React from 'react';
import Styles from './Styles/main.scss';

import Label from 'components/Assets/LifeSource/LabelEdge.js';

function Desktop() {
    return (
        <section className={ Styles.authorsComponent }>
            <div className={ Styles.container }>
                <h1 className={ Styles.title }>об авторе</h1>
                <div className={ Styles.content }>
                    <div className={ Styles.leftBlock }>
                        <h2 className={ Styles.name }>Алехандро Буйон</h2>
                        <span className={ Styles.subtitle }>евангелист</span>
                        <p className={ Styles.description }>
                            Родился в Перу, работал более
                            сорока лет в Южной Америке. В настоящее время живет в Бразилии.
                            Евангелист, выступает на радио и телевидении. Является автором
                            несколькних книг и статей.
                        </p>
                        <a href="#" className={ Styles.allBooks }>
                            Все книги автора
                        </a>
                    </div>
                    <div className={ Styles.rightBlock }>
                        <div className={ Styles.image }/>
                        <div className={ Styles.number }>
                            <Label className={ Styles.labelStart } color1={ '#f0766d' }/>
                            26
                            <Label className={ Styles.labelEnd } color1={ '#f0766d' }/>
                        </div>
                        <span className={ Styles.booksOnWebsite }>книг на сайте</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Desktop;

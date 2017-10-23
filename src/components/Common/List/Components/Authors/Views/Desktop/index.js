import React from 'react';
import cx from 'classnames';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

function Desktop() {
    const sortItemClass = cx({
        [Styles.item]: true,
        [Styles.active]: true
    });

    return (
        <section className={ Styles.authorsComponent }>
            <div className={ Grid.container }>
                <div className={ Styles.header }>
                    <h1 className={ Styles.mainTitle }>Авторы</h1>
                    <div className={ Styles.sort }>
                        <span className={ sortItemClass }>По популярности</span>
                        <span className={ Styles.item }>По алфавиту</span>
                    </div>
                </div>
            </div>
            <div className={ Grid.container }>
                <div className={ Styles.list }>
                    <div className={ Styles.item }>
                        <div className={ Styles.photo }>
                            <span className={ Styles.quantity }>6</span>
                        </div>
                        <h2 className={ Styles.author }>
                            <span className={ Styles.name }>Эллен</span>
                            &nbsp;
                            <span className={ Styles.surname }>Уайт</span>
                        </h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <p className={ Styles.description }>
                            Родился в Перу, работал более сорока лет в Южной Америке. В настоящее время живет в...
                            Бразилии. Евангелист, выступает на радио и телевидении. Является автором нескольких
                            книг и статей.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.photo }>
                            <span className={ Styles.quantity }>6</span>
                        </div>
                        <h2 className={ Styles.author }>
                            <span className={ Styles.name }>Эллен</span>
                            &nbsp;
                            <span className={ Styles.surname }>Уайт</span>
                        </h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <p className={ Styles.description }>
                            Родился в Перу, работал более сорока лет в Южной Америке. В настоящее время живет в...
                            Бразилии. Евангелист, выступает на радио и телевидении. Является автором нескольких
                            книг и статей.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.photo }>
                            <span className={ Styles.quantity }>6</span>
                        </div>
                        <h2 className={ Styles.author }>
                            <span className={ Styles.name }>Эллен</span>
                            &nbsp;
                            <span className={ Styles.surname }>Уайт</span>
                        </h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <p className={ Styles.description }>
                            Родился в Перу, работал более сорока лет в Южной Америке. В настоящее время живет в...
                            Бразилии. Евангелист, выступает на радио и телевидении. Является автором нескольких
                            книг и статей.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.photo }>
                            <span className={ Styles.quantity }>6</span>
                        </div>
                        <h2 className={ Styles.author }>
                            <span className={ Styles.name }>Эллен</span>
                            &nbsp;
                            <span className={ Styles.surname }>Уайт</span>
                        </h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <p className={ Styles.description }>
                            Родился в Перу, работал более сорока лет в Южной Америке. В настоящее время живет в...
                            Бразилии. Евангелист, выступает на радио и телевидении. Является автором нескольких
                            книг и статей.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.photo }>
                            <span className={ Styles.quantity }>6</span>
                        </div>
                        <h2 className={ Styles.author }>
                            <span className={ Styles.name }>Эллен</span>
                            &nbsp;
                            <span className={ Styles.surname }>Уайт</span>
                        </h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <p className={ Styles.description }>
                            Родился в Перу, работал более сорока лет в Южной Америке. В настоящее время живет в...
                            Бразилии. Евангелист, выступает на радио и телевидении. Является автором нескольких
                            книг и статей.
                        </p>
                    </div>
                    <div className={ Styles.item }>
                        <div className={ Styles.photo }>
                            <span className={ Styles.quantity }>6</span>
                        </div>
                        <h2 className={ Styles.author }>
                            <span className={ Styles.name }>Эллен</span>
                            &nbsp;
                            <span className={ Styles.surname }>Уайт</span>
                        </h2>
                        <h3 className={ Styles.activities }>христианский писатель</h3>
                        <p className={ Styles.description }>
                            Родился в Перу, работал более сорока лет в Южной Америке. В настоящее время живет в...
                            Бразилии. Евангелист, выступает на радио и телевидении. Является автором нескольких
                            книг и статей.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Desktop;

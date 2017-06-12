import React, { Component } from 'react';
import Helmet from 'react-helmet';

import * as Book from 'components/Book';
import Meta from './Meta';

export default class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Book.Main/>
                <Book.Authors/>
            </div>
        );
    }
}

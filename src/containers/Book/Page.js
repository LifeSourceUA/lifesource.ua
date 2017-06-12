import React, { Component } from 'react';
import Helmet from 'react-helmet';

import * as Book from 'components/Book';
import Meta from './Meta';
import * as Common from 'components/Common';

export default class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Book.Main/>
                <Book.Authors/>
                <Common.Breadcrumbs/>
            </div>
        );
    }
}

import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Book from 'components/Book';
import * as Common from 'components/Common';
import breadcrumbs from './Mock/Breadcrumbs.json';

export default class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Book.Main/>
                <Book.Authors/>
                <Common.Breadcrumbs breadcrumbs={ breadcrumbs }/>
            </div>
        );
    }
}

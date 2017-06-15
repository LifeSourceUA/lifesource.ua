import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Book from 'components/Book';
import * as Common from 'components/Common';

import breadcrumbs from './Mock/Breadcrumbs.json';
import info from './Mock/PublicationInfo.json';
import urlsFeedback from './Mock/Footer.json';

class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Book.Main/>
                <Common.PublicationInfo { ...info }/>
                <Book.Authors/>
                <Common.Breadcrumbs breadcrumbs={ breadcrumbs }/>
                <Common.Footer { ...urlsFeedback }/>
            </div>
        );
    }
}

export default BookPage;

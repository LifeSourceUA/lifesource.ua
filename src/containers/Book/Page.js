import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Book from 'components/Book';
import * as Common from 'components/Common';

import breadcrumbs from './Mock/Breadcrumbs.json';
import info from './Mock/PublicationInfo.json';
import headerMenuItems from './Mock/HeaderMenu.json';

class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Common.Header items={ headerMenuItems }/>
                <Book.Main/>
                <Common.PublicationInfo { ...info }/>
                <Book.Authors/>
                <Common.List type={ 'book' }/>
                <Common.Breadcrumbs breadcrumbs={ breadcrumbs }/>
                <Common.Contacts/>
                <Common.Footer/>
            </div>
        );
    }
}

export default BookPage;

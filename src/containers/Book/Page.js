import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Book from 'components/Book';
import * as Common from 'components/Common';
import info from './Mock/PublicationInfo.json';

class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Book.Main/>
                <Common.PublicationInfo { ...info }/>
                <Book.Authors/>
            </div>
        );
    }
}

export default BookPage;

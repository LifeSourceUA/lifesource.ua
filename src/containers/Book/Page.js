import React, { Component } from 'react';
import Helmet from 'react-helmet';

import * as Book from 'components/Book';
import Meta from './Meta';
import * as Common from 'components/Common';
import data from './data.json';

class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Common.PublicationInfo { ...data }/>
                <Book.Main/>
                <Book.Authors/>
            </div>
        );
    }
}

export default BookPage;

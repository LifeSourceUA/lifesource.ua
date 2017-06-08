import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Common from 'components/Common';

class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <div>Book Page</div>
                <Common.PublicationInfo/>
            </div>
        );
    }
}

export default BookPage;

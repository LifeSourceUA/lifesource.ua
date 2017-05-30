import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';

export default class BookPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <div>Book Page</div>
            </div>
        );
    }
}

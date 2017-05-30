import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';

import Meta from './Meta';

@asyncConnect(
    [],
    ({ browser }) => {
        return { browser };
    }
)
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <div>Home Page test2</div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import * as Common from 'components/Common';

import Meta from './Meta';

@asyncConnect(
    [],
    ({ browser }) => {
        return { browser };
    }
)
/* eslint-disable react/prefer-stateless-function */
class ListPage extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Common.List type={ 'magazines4' }/>
            </div>
        );
    }
}

export default ListPage;

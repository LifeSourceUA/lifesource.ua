import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import * as Home from 'components/Home';
import * as Common from 'components/Common';

import headerMenuItems from './Mock/HeaderMenu.json';

import Meta from './Meta';

@asyncConnect(
    [],
    ({ browser }) => {
        return { browser };
    }
)
/* eslint-disable react/prefer-stateless-function */
class HomePage extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Common.Header items={ headerMenuItems }/>
                <Home.Banner/>
                <Common.List type={ 'book' }/>
                <Common.List type={ 'magazines' }/>
                <Common.List type={ 'magazines4' }/>
                <Common.Contacts/>
                <Common.Footer/>
            </div>
        );
    }
}

export default HomePage;

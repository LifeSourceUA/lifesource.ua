import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Common from 'components/Common';

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
                {/* <div>Home Page</div> */}
                <Common.PublicationInfo/>
            </div>
        );
    }
}

export default HomePage;

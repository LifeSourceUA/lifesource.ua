import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
// import * as Book from 'components/Book';
import * as Common from 'components/Common';

import breadcrumbs from './Mock/Breadcrumbs.json';
import headerMenuItems from './Mock/HeaderMenu.json';

class AuthorsListPage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Common.Header items={ headerMenuItems }/>
                <Common.List type={ 'authors' }/>
                <Common.Breadcrumbs breadcrumbs={ breadcrumbs }/>
                <Common.Contacts/>
                <Common.Footer/>
            </div>
        );
    }
}

export default AuthorsListPage;

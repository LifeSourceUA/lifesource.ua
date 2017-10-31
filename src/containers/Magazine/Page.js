import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Common from 'components/Common';

import breadcrumbs from './Mock/Breadcrumbs.json';
import info from './Mock/PublicationInfo.json';
import headerMenuItems from './Mock/HeaderMenu.json';

class MagazinePage extends Component {
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Common.Header items={ headerMenuItems }/>
                <Common.List type={ 'magazines' }/>
                <Common.PublicationInfo { ...info }/>
                <Common.Breadcrumbs breadcrumbs={ breadcrumbs }/>
                <Common.Contacts/>
                <Common.Footer/>
            </div>
        );
    }
}

export default MagazinePage;

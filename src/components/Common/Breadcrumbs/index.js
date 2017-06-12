/**
 * [IL]
 * Library Import
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Common from './Views/Common';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})
class Breadcrumbs extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { mediaType } = this.props;

        /**
         * [RR]
         * Return Component
         */
        return <Common mediaType={ mediaType }/>;
    }
}

/**
 * [IE]
 * Export
 */
export default Breadcrumbs;

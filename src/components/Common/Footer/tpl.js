/**
 * [IL]
 * Library Import
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Common from './Views/Common/tpl';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import PixelPerfect from 'vendor/PixelPerfect/component';

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
class Footer extends Component {
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
        /**
         * [RCD]
         * Config destructuring
         */
        const { id } = config;

        /**
         * [RV]
         * View
         */
        const view = <Common { ...this.props }/>;

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect component={ id }>
                { view }
            </PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Footer;

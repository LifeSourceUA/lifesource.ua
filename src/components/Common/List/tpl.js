/**
 * [IL]
 * Library Import
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Book from './Components/Book/tpl';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import PixelPerfect from 'vendor/PixelPerfect/component';
import BP from 'lib/breakpoints';

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
class Contacts extends Component {
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
        /**
         * [RPD]
         * Props destructuring
         */
        // const { mediaType } = this.props;

        /**
         * [RCD]
         * Config destructuring
         */
        const { id } = config;

        // const state = 'filters';
        const templates = [
            {
                name: BP.phonePortrait.name,
                states: ['books', 'row']
            },
            {
                name: BP.phoneLandscape.name,
                states: ['books', 'row']
            },
            {
                name: BP.tabletPortrait.name,
                states: ['books', 'row']
            },
            {
                name: BP.tabletLandscape.name,
                states: ['books', 'row']
            }
        ];

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect component={ id } templates={ templates }>
                <Book/>
            </PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Contacts;

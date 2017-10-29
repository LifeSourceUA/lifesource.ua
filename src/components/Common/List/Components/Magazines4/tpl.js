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
import Desktop from './Views/Desktop/tpl';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import BP from 'lib/breakpoints';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})
class Magazines4 extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        /**
         * [RPD]
         * Props destructuring
         */
        const { mediaType } = this.props;

        /**
         * [RR]
         * Return Component
         */
        return BP.isDesktop(mediaType) ? (<Desktop/>) : null;
    }
}

/**
 * [IE]
 * Export
 */
export default Magazines4;

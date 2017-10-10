/**
 * [IL]
 * Library Import
 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Book from './Components/Book';

/**
 * [IBP]
 * Breakpoints
 */
// import BP from 'lib/breakpoints';

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
    // static propTypes = {
    //     mediaType: PropTypes.string.isRequired,
    //     items: PropTypes.array.isRequired
    // };

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
        // const { mediaType, items } = this.props;

        /**
         * [RR]
         * Return Component
         */
        return <Book/>;
    }
}

/**
 * [IE]
 * Export
 */
export default Contacts;

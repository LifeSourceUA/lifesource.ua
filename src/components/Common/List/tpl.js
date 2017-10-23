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
// import Magazines from './Components/Magazines/tpl';
// import Authors from './Components/Authors/tpl';
// import Scroll from './Components/Scroll/tpl';

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

    state = {
        isSortVisible: false,
        isFiltersVisible: false
    };

    showSort = () => {
        this.setState({
            isFiltersVisible: false,
            isSortVisible: !this.state.isSortVisible
        });
    };

    showFilters = () => {
        this.setState({
            isSortVisible: false,
            isFiltersVisible: !this.state.isFiltersVisible
        });
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
        // const { type } = this.props;

        /**
         * [RCD]
         * Config destructuring
         */
        const { id } = config;

        // const state = 'filters';
        const templates = [
            {
                name: BP.phonePortrait.name,
                states: ['authors', 'row']
            },
            {
                name: BP.phoneLandscape.name,
                states: ['authors', 'row']
            },
            {
                name: BP.tabletPortrait.name,
                states: ['authors', 'row']
            },
            {
                name: BP.tabletLandscape.name,
                states: ['authors', 'row']
            }
        ];

        // let view;
        //
        // if (type === 'book') {
        //     view = (<Book/>);
        // } else if (type === 'magasines') {
        //     view = (<Magazines/>);
        // } else if (type === 'authors') {
        //     view = (<Authors/>)
        // } else if (type === <Scroll/>) {
        //     view = (<Scroll/>)
        // }

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect component={ id } templates={ templates }>
                <Book
                    showSort={ this.showSort }
                    showFilters={ this.showFilters }
                    isSortVisible={ this.state.isSortVisible }
                    isFiltersVisible={ this.state.isFiltersVisible }
                />
            </PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Contacts;

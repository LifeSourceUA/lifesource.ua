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
import Mobile from './Views/Mobile';
import Desktop from './Views/Desktop';

/**
 * [IBP]
 * Breakpoints
 */
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
        mediaType: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    state = {
        dotIndex: 0
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    nextIndex = () => {
        this.setState({ dotIndex: this.state.dotIndex + 1 });
    };

    prevIndex = () => {
        if (this.state.dotIndex < 0) {
            return;
        }
        this.setState({ dotIndex: this.state.dotIndex - 1 });
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
        const { mediaType, items } = this.props;

        /**
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile
                    mediaType={ mediaType }
                    items={ items }
                />
            );
        } else {
            view = (
                <Desktop
                    mediaType={ mediaType }
                    items={ items }
                    dotIndex={ this.state.dotIndex }
                    nextIndex={ this.nextIndex }
                    prevIndex={ this.prevIndex }
                />
            );
        }

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

/**
 * [IE]
 * Export
 */
export default Contacts;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import App from '../components';

class AppContainer extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
        const state = store.getState();

        return (
            <App {...state}
                
            />
        );
    }
};

AppContainer.contextTypes = {
    store: PropTypes.object
};

export default AppContainer;

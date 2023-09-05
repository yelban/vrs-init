import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

console.log('AppContext.jsx');

// 建立一個 Context
const AppContext = createContext({});

export function AppProvider({ children, value }) {
    console.log('↳ AppContext.jsx');

    console.log('%c AppProvider({ children, value })', 'color:#B50');

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppValue() {
    return useContext(AppContext);
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.object.isRequired,
};

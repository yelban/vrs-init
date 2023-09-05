import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { AppProvider } from './AppContext';
import Dark from './Dark';
import About from './pages/About';

console.log('AppWrap.jsx');

const router = createBrowserRouter([
    {
        path: '/', // 首頁
        element: <App />,
    },
    {
        path: '/about', // 功能頁面
        element: <About />,
    },
]);

const AppWrap = () => {
    console.log('↳ AppWrap.jsx');

    const [currentUser, setCurrentUser] = useState(null);

    // * AppContext.jsx / About.jsx / Home.jsx / App.jsx / index.js
    // * App() -> AppContext() -> Home() [ | About() ]
    // * useEffect(,[]) <Home> -> useEffect(,[]) <App>
    useEffect(() => {
        console.log('useEffect(,[]) <AppWrap>');

        const storageCurrentUser = localStorage.getItem('current-user');

        if (storageCurrentUser) {
            setCurrentUser(storageCurrentUser);
        }
    }, []);

    useEffect(() => {
        console.log('useEffect(,[currentUser]) <AppWrap>', currentUser);
    }, [currentUser]);

    return (
        <AppProvider value={{ currentUser, setCurrentUser }}>
            <Dark />
            <RouterProvider router={router} />
        </AppProvider>
    );
};

export default AppWrap;

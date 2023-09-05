import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppValue } from '../AppContext';

const Home = () => {
    // 使用 setCurrentUser 設定 Context 的值
    const { setCurrentUser } = useAppValue();

    useEffect(() => {
        setCurrentUser('Home');
    }, []);

    return (
        <>
            <div>Home</div>
            <nav>
                <Link to='/about'>About</Link>
            </nav>
        </>
    );
};

export default Home;

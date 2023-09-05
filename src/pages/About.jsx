import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppValue } from '../AppContext';
import { getGlobal } from '../globals';

const About = () => {
    // 使用 useContext 取得 Context 的值
    const { currentUser } = useAppValue();

    useEffect(() => {
        console.log('useEffect(,[]) <About>');

        localStorage.setItem('current-user', 'App');

        const zoo = getGlobal('zoo');
        console.log('zoo', zoo);

        if (!zoo) {
            window.location.href = '/';
        }
    }, []);

    useEffect(() => {
        console.log('useEffect(,[currentUser]) <About>', currentUser);
    }, [currentUser]);

    return (
        <div className='grid h-screen place-items-center'>
            <div className='text-center text-lg dark:text-white'>
                <div className='font-sans'>About 草莓蘋果檸檬</div>
                <nav>
                    <Link to='/' className='font-serif'>
                        App
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default About;

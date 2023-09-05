import './App.css';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import viteLogo from '/vite.svg';

import { useAppValue } from './AppContext';
import reactLogo from './assets/react.svg';
import { setGlobal } from './globals';

console.log('App.jsx');

function App() {
    console.log('↳ App.jsx');

    // 使用 useState 設定 count 的初始值為 0
    const [count, setCount] = useState(0);

    setGlobal({ zoo: ['alpacas', 'unicorns'] });

    // 使用 setCurrentUser 設定 Context 的值
    const { currentUser, setCurrentUser } = useAppValue();

    useEffect(() => {
        console.log('useEffect(,[]) <App>');

        setCurrentUser('App');
        localStorage.setItem('current-user', 'App');
    }, []);

    useEffect(() => {
        console.log('useEffect(,[currentUser]) <App>', currentUser);
    }, [currentUser]);

    return (
        <div className='grid h-screen place-items-center'>
            <div className='text-center text-lg dark:text-white'>
                <div className='flex gap-10'>
                    <div className='flex flex-1 items-center justify-end'>
                        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
                            <img src={viteLogo} className='w-20' alt='Vite logo' />
                        </a>
                    </div>
                    <div className='flex flex-1 items-center justify-start'>
                        <a href='https://react.dev' target='_blank' rel='noreferrer'>
                            <img src={reactLogo} className='w-20' alt='React logo' />
                        </a>
                    </div>
                </div>
                <h1 className='m-5 font-display text-5xl'>Vite + React</h1>
                <div className='card '>
                    <button
                        className='rounded bg-zinc-900 px-5 py-2  text-zinc-100'
                        onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p className='m-2'>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className='m-5 text-zinc-500'>Click on the Vite and React logos to learn more</p>

                <nav>
                    <Link to='/about' className='font-serif'>
                        About 草莓蘋果檸檬
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default App;

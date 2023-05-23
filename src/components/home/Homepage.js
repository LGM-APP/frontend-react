import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Betlist from './betlist/Betlist';
import Cart from './cart/Cart';

const Homepage = () => {
    return (
        <div className='grid grid-cols-[1fr_3fr_1fr] m-6 gap-6'>
            <Sidebar />
            <Betlist />
            <Cart />
        </div>
    );
};

export default Homepage;
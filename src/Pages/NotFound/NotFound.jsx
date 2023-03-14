import React from 'react';
import notFoundImage from '../../assets/icons/404.svg'

const NotFound = () => {
    return (
        <section className='py-44'>
            <div className="container flex justify-center items-center">
                <img className='max-w-xs md:max-w-md' src={notFoundImage} alt="" />
            </div>
        </section>
    );
};

export default NotFound;
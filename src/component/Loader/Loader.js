import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className='handle-preloader'>
            <div className='animation-preloader'>
                {/* <div className="btn-shine">Capital Trust Bank</div> */}
                <div className='spinner'></div>
                <div className='text-loading'>
                    <span data-text-preloader="capital" className='letters-loading'>Capital</span>
                    <span data-text-preloader="trust" className='letters-loading'>Trust</span>
                    <span data-text-preloader="bank" className='letters-loading'>Bank</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
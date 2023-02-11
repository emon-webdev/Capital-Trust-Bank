import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Banner2Slide = ({ data }) => {
    const { title, img, content, btn, link } = data;
    return (
        <div className='slide-wrapper'
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
                fontSize: '50px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // height: '100vh',
                margin: '0px',
                width: '100%',
            }}
        >
            <div className='container flex items-center h-[80vh]'>
                <div className='max-w-[500px] py-7'>
                    <div>
                        <h1 className='banner2 font-semibold'>{title}</h1>
                        <p className='banner2 py-[30px]'>{content}</p>
                        <Link to={link} className='banner2 btn-sm primary-btn'>
                            {btn}
                        </Link>
                    </div>                  
                </div>
            </div>
        </div>
    );
};

export default Banner2Slide;
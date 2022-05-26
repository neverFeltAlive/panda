import React from 'react';

import {FaInstagram, FaTelegramPlane, FaViber, FaVk, FaWhatsapp} from "react-icons/fa";

const MediaLinks = () => {
    return (
        <>
            <a href='app/src/components/MediaLinks/MediaLinks' className='me-4 text-reset'>
                <FaTelegramPlane/>
            </a>
            <a href='app/src/components/MediaLinks/MediaLinks' className='me-4 text-reset'>
                <FaWhatsapp/>
            </a>
            <a href='app/src/components/MediaLinks/MediaLinks' className='me-4 text-reset'>
                <FaInstagram/>
            </a>
            <a href='app/src/components/MediaLinks/MediaLinks' className='me-4 text-reset'>
                <FaVk/>
            </a>
            <a href='app/src/components/MediaLinks/MediaLinks' className='text-reset'>
                <FaViber/>
            </a>
        </>
    );
};

export default MediaLinks;
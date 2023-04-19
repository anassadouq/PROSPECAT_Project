import React, { useState } from 'react';

export default function WhatProspecat() {
    const [text, setText] = useState('');
    const handleButtonClick = (buttonText) => {
        setText(buttonText);
    }
    return (
        <div className='my-5'>        
            <h2 className="text-center my-5" style={{"fontWeight":"bold"}}>What Is Prospecat ?</h2>
            <p className='text-secondary text-center' id="text">Prospecat is a B2B prospecting platform. Use it to find email addresses and build a quality B2B Data for your sales funnel.</p>
            <div className='row'>
                <div className='col' id="left">
                    <ul type="none">
                        <li className='my-4'>
                            <button className='btn btn-primary form-control' onClick={() => handleButtonClick('Use our search engine to find new and up-to-date B2B leads that matches your search criterion.')}>Find new leads </button>
                            {text === 'Use our search engine to find new and up-to-date B2B leads that matches your search criterion.' && <p>{text}</p>}
                        </li>
                        <li className='my-4'>
                            <button className='btn btn-primary form-control' onClick={() => handleButtonClick('Use our  engine to find new and up-to-date B2B leads that matches your search criterion.')}>Easy to use and flexible</button>
                            {text === 'Use our  engine to find new and up-to-date B2B leads that matches your search criterion.' && <p>{text}</p>}
                        </li>
                        <li className='my-4'>
                            <button className='btn btn-primary form-control' onClick={() => handleButtonClick('Use our search  to find new and up-to-date B2B leads that matches your search criterion.')}>Find emails </button>
                            {text === 'Use our search  to find new and up-to-date B2B leads that matches your search criterion.' && <p>{text}</p>}
                        </li>
                        <li className='my-4'>
                            <button className='btn btn-primary form-control' onClick={() => handleButtonClick('Use our search engine to find  and up-to-date B2B leads that matches your search criterion.')}>Linkedin Integration</button>
                            {text === 'Use our search engine to find  and up-to-date B2B leads that matches your search criterion.' && <p>{text}</p>}
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <img src="./images/WhatProspecat.png" id="imgWhatProspecat"/>
                </div>
                <span className="my-4"></span>
            </div>
        </div>
    );
}
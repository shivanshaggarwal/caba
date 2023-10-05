import React, { useState } from 'react';

const countries = [
    { code: '+91', name: 'India', flag: require('../india.png') },
];

const PhoneInput = (props) => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div >
            <div className="input-group">
                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={selectedCountry.flag} width="20" height="15" className='me-2'></img>{selectedCountry.code}
                </button>
                <ul className="dropdown-menu">
                    {countries.map((country, index) => (
                        <li key={index}>
                            <a className="dropdown-item" href="#" onClick={() => handleCountrySelect(country)}>
                                <img src={country.flag} alt={`${country.code} flag`} width="20" height="15" /> {country.code}
                            </a>
                        </li>
                    ))}
                </ul>
                <input type="number" className="form-control" aria-label="Text input with segmented dropdown button" />
            </div>
            <p className='my-0 text-start fw-lighter fs-6 fst-italic '>{props.info}</p>         
        </div>
    );
};

export default PhoneInput;

import React from 'react'
import Address from './Address'
import ImageInputs from '../ImageInputs'
import FullName from './FullName';

const ParentDetails = (props) => {
    const { formik, setGuardianAdhaarImage, countries, selectedCountry, setSelectedCountry } = props;
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };
    return (
        <>
            <div className="row parentDetails">
                <div className="card-title text-start col-3 text-success ">
                    <h4>Parent / Guardian Details</h4>
                </div>
                <hr />
                <div className="row fullname m-0 mb-4">
                    <label htmlFor="fullName" className="text-start col-3">
                        <b>Guardian Name <span className='text-danger'>*</span></b>
                    </label>
                    <FullName formik={formik} />
                </div>

                <div className="row relationship m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-3"><b>Relationship</b></label>
                    <div className="offset-2 col-3 p-0">
                        <select id="inputState" className="form-select p-1" value={formik.values.relationShip} onChange={(e) => formik.setFieldValue('relationShip', e.target.value)} aria-label=''>
                            <option selected className='fs-6 fw-lighter'>-Select-</option>
                            <option>Father</option>
                            <option>Mother</option>
                            <option>Brother</option>
                            <option>Sister</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="row address m-0 mb-4 g-3">
                    <label for="inputAddress" class="ps-3 form-label col-3 text-start"><b>Your Address</b></label>
                    <div className='offset-2 col-7 p-0'>
                        <Address formik={formik} />
                        <p className='text-start fs-6 fw-lighter'>Address of your Guardian</p>
                    </div>
                </div>

                <div className="row phone m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-3"><b>Guardian Phone</b></label>
                    <div className="offset-2 col-4 p-0">
                        {/* <PhoneInput info="Father / Mother Phone" /> */}
                        <div >
                            <div className="input-group">
                                <button type="button" style={{ borderColor: '#dee2e6' }} className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <input type="number" className={`form-control ${formik.errors.guardianMobileNumber && formik.touched.guardianMobileNumber ? "border-danger" : ""}`} id="guardianMobileNumber" onBlur={formik.handleBlur('guardianMobileNumber')} value={formik.values.guardianMobileNumber} onChange={(e) => formik.setFieldValue('guardianMobileNumber', e.target.value)} aria-label="Text input with segmented dropdown button" />
                            </div>
                            {formik.errors.guardianMobileNumber && formik.touched.guardianMobileNumber ? (
                                <div className='text-danger text-start'>{formik.errors.guardianMobileNumber}</div>
                            ) : null}
                            <p className='my-0 text-start fw-lighter fs-6 fst-italic '>Your Mobile</p>
                        </div>
                    </div>
                </div>

                <div className="row email m-0 mb-4">
                    <label htmlFor="guardianEmail" className="text-start col-3"><b>Guardian Email</b></label>
                    <div className="offset-2 col-4 p-0">
                        <input type="text" className={`form-control ${formik.errors.guardianEmail && formik.touched.guardianEmail ? "border-danger" : ""}`} id="guardianEmail" onBlur={formik.handleBlur('guardianEmail')} value={formik.values.guardianEmail} onChange={(e) => formik.setFieldValue('guardianEmail', e.target.value)} />
                        {formik.errors.guardianEmail && formik.touched.guardianEmail ? (
                            <div className='text-danger text-start'>{formik.errors.guardianEmail}</div>
                        ) : null}
                    </div>
                </div>

                <div className="row guardianAdhar mx-0  mb-4">
                    <label htmlFor="photo" className="text-start col-3"><b>Guardian Aadhar</b></label>
                    <ImageInputs id='fileName' setGuardianAdhaarImage={setGuardianAdhaarImage} value="guardianAdhaar" info="Copy of Father / Mother Aadhaar Copy. Should be JPG format less than 5 MB" />
                </div>
            </div>
        </>
    )
}

export default ParentDetails
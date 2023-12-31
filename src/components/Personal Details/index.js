import React from 'react'
import FullName from './FullName';
import ImageInputs from '../ImageInputs';
import Address from './Address';

const PersonalDetails = (props) => {
    const { formik, photoImage, setPhotoImage, adhaarImage, setAdhaarImage, tenthCertificateImage, setTenthCertificateImage, twelthCertificateImage, setTwelthCertificateImage, graduationImage, setGraduationImage, selectedCountry, setSelectedCountry, countries, setIsPhotoImage, setIsAdhaarImage, setIsTenthCertificateImage, setIsTwelthCertificateImage, setIsGraduationImage } = props;
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };

    return (
        <>
            <div className="row personalDetails">
                <div className="card-title text-start col-12 text-primary "><h3>Personal Details</h3></div><hr />
                <div className="row photo m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-md-3"><b>Your Photo</b></label>
                    <ImageInputs setIsPhotoImage={setIsPhotoImage} photoImage={photoImage} idOfImage='photo' setPhotoImage={setPhotoImage} value="photo" info="Passport Size Photo in JPG format - JPG/PNG format less than 5 MB" />
                </div>
                <div className="row fullname m-0 mb-4">
                    <label htmlFor="fullName" className="text-start col-md-3 ps-1">
                        <b>Full Name <span className='text-danger'>*</span></b>
                    </label>
                    <FullName formik={formik} />
                </div>
                <div className="row email m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-md-3 mb-2 ps-1"><b>Email</b></label>
                    <div className="col-md-7 offset-md-2 p-0">
                        <input type="text" className={`form-control ${formik.errors.email && formik.touched.email ? "border-danger" : ""}`} id="email" onBlur={formik.handleBlur('email')} value={formik.values.email} onChange={(e) => formik.setFieldValue('email', e.target.value)} />
                        {formik.errors.email && formik.touched.email ? (
                            <div className='text-danger text-start'>{formik.errors.email}</div>
                        ) : null}
                    </div>
                </div>
                <div className="row phone m-0 mb-4">
                    <label htmlFor="mobileNumber" className="text-start col-md-3 mb-2 ps-1"><b>Mobile</b></label>
                    <div className="col-md-7 offset-md-2 p-0">
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
                                <input type="text" className={`form-control ${formik.errors.mobileNumber && formik.touched.mobileNumber ? "border-danger" : ""}`} id="mobileNumber" onBlur={formik.handleBlur('mobileNumber')} value={formik.values.mobileNumber} onChange={(e) => formik.setFieldValue('mobileNumber', e.target.value)} aria-label="Text input with segmented dropdown button" />
                            </div>
                            {formik.errors.mobileNumber && formik.touched.mobileNumber ? (
                                <div className='text-danger text-start'>{formik.errors.mobileNumber}</div>
                            ) : null}
                            <p className='my-0 text-start fw-lighter fs-6 fst-italic '>Your Mobile</p>
                        </div>
                    </div>
                </div>
                <div className="row phone m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-md-3 mb-2 ps-1"><b>Any Other Phone</b></label>
                    <div className="col-md-7 offset-md-2 p-0">
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
                                <input type="text" className={`form-control ${formik.errors.otherMobileNumber && formik.touched.otherMobileNumber ? "border-danger" : ""}`} id="otherMobileNumber" onBlur={formik.handleBlur('otherMobileNumber')} value={formik.values.otherMobileNumber} onChange={(e) => formik.setFieldValue('otherMobileNumber', e.target.value)} aria-label="Text input with segmented dropdown button" />
                            </div>
                            {formik.errors.otherMobileNumber && formik.touched.otherMobileNumber ? (
                                <div className='text-danger text-start'>{formik.errors.otherMobileNumber}</div>
                            ) : null}
                            <p className='my-0 text-start fw-lighter fs-6 fst-italic '>Any Other Phone</p>
                        </div>
                    </div>
                </div>

                <div className="row adhar m-0  mb-4">
                    <label htmlFor="photo" className="text-start col-md-3 mb-2 ps-1"><b>Self Aadhar</b></label>
                    <ImageInputs setIsAdhaarImage={setIsAdhaarImage} adhaarImage={adhaarImage} idOfImage='adhaar' setAdhaarImage={setAdhaarImage}
                        value="adhaar" info="Your Adhaar Copy Upload. JPG/PNG format less than 5 MB" />
                </div>
                <div className="row tenth m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-md-3 mb-2 ps-1"><b>10th Certificate</b></label>
                    <ImageInputs setIsTenthCertificateImage={setIsTenthCertificateImage} tenthCertificateImage={tenthCertificateImage} idOfImage='tenthCertificate'
                        setTenthCertificateImage={setTenthCertificateImage}
                        value="tenthCertificate" info="Copy of your 10th Board Certificate. JPG/PNG format less than 10 MB" />
                </div>
                <div className="row twelth m-0  mb-4">
                    <label htmlFor="photo" className="text-start col-md-3 mb-2 ps-1"><b>12th Certificate</b></label>
                    <ImageInputs setIsTwelthCertificateImage={setIsTwelthCertificateImage} twelthCertificateImage={twelthCertificateImage} idOfImage='twelthCertificate'
                        setTwelthCertificateImage={setTwelthCertificateImage}
                        value="twelthCertificate" info="12th Certificate Copy Upload. JPG/PNG format less than 10 MB" />
                </div>
                <div className="row graduation m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-md-3 mb-2 ps-1"><b>Graduation Certificate</b></label>
                    <ImageInputs setIsGraduationImage={setIsGraduationImage} graduationImage={graduationImage} idOfImage='graduation'
                        setGraduationImage={setGraduationImage} value="graduation" info="Copy of Graduation Degree (if finished). JPG/PNG format less than 10 MB" />
                </div>
                <div className="row address m-0  mb-4 g-3">
                    <label htmlFor="inputAddress" className="text-start col-md-3 ps-1"><b>Your Address</b></label>
                    <div className='col-md-7 offset-md-2 p-0'>
                        <Address formik={formik} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalDetails

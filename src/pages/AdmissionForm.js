import React, { useRef, useState } from 'react'
import ImageInputs from '../components/ImageInputs'
import PhoneInput from '../components/PhoneInput'
import FullName from '../components/FullName'
import Address from '../components/Address'
import SignatureCanvas from 'react-signature-canvas';
// import { Formik, Form, Field } from 'formik';
import { useFormik } from 'formik'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email address. (eg: yourname@domain.com)').required('Enter a value for this field.')
});

function AdmissionForm() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: ''
        },
        validationSchema,
        onSubmit: async (values, formik) => {
            console.log(values);
        }
    });

    const { errors, values, touched, handleBlur, handleSubmit, setFieldValue, setFieldTouched } = formik;

    const signatureRef = useRef();
    const [captchaText, setCaptchaText] = useState('');

    const handleClear = () => {
        signatureRef.current.clear();
    };

    const handleSave = () => {
        const signatureDataUrl = signatureRef.current.toDataURL();
        // Now you can use `signatureDataUrl` as the user's drawn signature
        console.log(signatureDataUrl);
    };

    // Generate a random CAPTCHA string
    function generateCaptcha() {
        const captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const captchaLength = 6;
        let captcha = '';
        for (let i = 0; i < captchaLength; i++) {
            const randomIndex = Math.floor(Math.random() * captchaChars.length);
            captcha += captchaChars.charAt(randomIndex);
        }
        return captcha;
    }

    // Display the generated CAPTCHA
    function displayCaptcha() {
        // const captchaText = document.getElementById('captchaText');
        const captcha = generateCaptcha();
        setCaptchaText(captcha);
        // captchaText.textContent = captcha;
    }

    // Validate the user's input
    function validateCaptcha() {
        const userInput = document.getElementById('captchaInput').value;
        const captchaText = document.getElementById('captchaText').textContent;

        if (userInput.toLowerCase() === captchaText.toLowerCase()) {
            alert('CAPTCHA is correct!'); // Replace with your validation logic
            // Optionally, generate a new CAPTCHA for the next challenge
            displayCaptcha();
        } else {
            alert('CAPTCHA is incorrect. Please try again.');
            // Optionally, refresh the CAPTCHA for another attempt
            displayCaptcha();
        }
    }

    const handleReloadCaptcha = () => {
        displayCaptcha();
    };
    // Initialize the CAPTCHA on page load
    window.onload = function () {
        displayCaptcha();
    };

    const [photoImage, setPhotoImage] = useState('')
    const [adhaarImage, setAdhaarImage] = useState('')
    const [tenthCertificateImage, setTenthCertificateImage] = useState('')
    const [twelthCertificateImage, setTwelthCertificateImage] = useState('')
    const [graduationImage, setGraduationImage] = useState('')

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">Caba Innovatives Admission Form</div>
                <div className="card-subtitle">Student Admission Form</div>
                <div className="card-body">
                    <div className="row personalDetails">
                        <div className="card-title text-start col-3 text-primary "><h3>Personal Details</h3></div><hr />
                        <div className="row photo m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Your Photo</b></label>
                            <ImageInputs id='fileName' setPhotoImage={setPhotoImage} value="photo" info="Your Adhaar Copy Upload. JPG/PNG format less than 5 MB" />
                            {photoImage}
                        </div>
                        <div className="row fullname m-0 mb-4">
                            <label htmlFor="fullName" className="text-start col-3">
                                <b>Full Name <span className='text-danger'>*</span></b>
                            </label>
                            <FullName />
                        </div>
                        <div className="row email m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Email</b></label>
                            <div className="offset-2 col-4 p-0">
                                <input type="text" className={`form-control ${errors.email && touched.email ? "border-danger" : ""}`} id="email" onBlur={handleBlur('email')} value={values.email} onChange={(e) => setFieldValue('email', e.target.value)} />
                                {errors.email && touched.email ? (
                                    <div className='text-danger text-start'>{errors.email}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="row phone m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Mobile</b></label>
                            <div className="offset-2 col-4 p-0">
                                <PhoneInput info="Your Mobile" />
                            </div>
                        </div>
                        <div className="row phone m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Mobile</b></label>
                            <div className="offset-2 col-4 p-0">
                                <PhoneInput info="Any Other Phone" />
                            </div>
                        </div>

                        <div className="row adhar m-0  mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Self Aadhar</b></label>
                            <ImageInputs id='fileName' setAdhaarImage={setAdhaarImage}
                                value="adhaar" info="Your Adhaar Copy Upload. JPG/PNG format less than 5 MB" />
                            {adhaarImage}
                        </div>
                        <div className="row tenth m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>10th Certificate</b></label>
                            <ImageInputs id='fileName'
                                setTenthCertificateImage={setTenthCertificateImage}
                                value="tenthCertificate" info="Copy of your 10th Board Certificate. JPG/PNG format less than 10 MB" />
                            {tenthCertificateImage}
                        </div>
                        <div className="row twelth m-0  mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>12th Certificate</b></label>
                            <ImageInputs id='fileName'
                                setT welthCertificateImage={setTwelthCertificateImage}
                                value="twelthCertificate" info="12th Certificate Copy Upload. JPG/PNG format less than 10 MB" />
                            {twelthCertificateImage}
                        </div>
                        <div className="row graduation m-0  mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Graduation Certificate</b></label>
                            <ImageInputs id='fileName'
                                setGraduationImage={setGraduationImage} value="graduation" info="Copy of Graduation Degree (if finished). JPG/PNG format less than 10 MB" />
                            {graduationImage}
                        </div>
                        <div className="row address m-0  mb-4 g-3">
                            <label for="inputAddress" class="ps-3 form-label col-3 text-start"><b>Your Address</b></label>
                            <div className='offset-2 col-7 p-0'>
                                <Address />
                            </div>
                        </div>
                    </div>

                    <div className="row parentDetails">
                        <div className="card-title text-start col-3 text-success ">
                            <h4>Parent / Guardian Details</h4>
                        </div>
                        <hr />
                        <div className="row fullname m-0 mb-4">
                            <label htmlFor="fullName" className="text-start col-3">
                                <b>Guardian Name <span className='text-danger'>*</span></b>
                            </label>
                            <FullName />
                        </div>

                        <div className="row relationship m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Relationship</b></label>
                            <div className="offset-2 col-3 p-0">
                                <select id="inputState" className="form-select p-1" aria-label=''>
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
                                <Address />
                                <p className='text-start fs-6 fw-lighter'>Address of your Guardian</p>
                            </div>
                        </div>

                        <div className="row phone m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Guardian Phone</b></label>
                            <div className="offset-2 col-4 p-0">
                                <PhoneInput info="Father / Mother Phone" />
                            </div>
                        </div>

                        <div className="row email m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Guardian Email</b></label>
                            <div className="offset-2 col-4 p-0">
                                <input type="email" className="form-control" id="specificSizeInputName" />
                            </div>
                        </div>

                        <div className="row guardianAdhar mx-0  mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Guardian Aadhar</b></label>
                            <ImageInputs id='fileName' info="Copy of Father / Mother Aadhaar Copy. Should be JPG format less than 5 MB" />
                        </div>



                    </div>

                    <div className="row courseDetails">
                        <div className="card-title text-start col-3 text-danger ">
                            <h4>Course Details</h4>
                        </div>
                        <hr />
                        <div className="row email m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Roll Number</b></label>
                            <div className="offset-2 col-4 p-0">
                                <input type="text" className="form-control" id="specificSizeInputName" placeholder='Official Use Only' />
                            </div>
                        </div>
                        <div className="row date m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Date Of Joining</b></label>
                            <div className="offset-2 col-4 p-0">
                                <input type="text" className="form-control" id="specificSizeInputName" placeholder='Official Use Only' />
                            </div>
                        </div>
                        <div className="row trainingType m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Training Type</b></label>
                            <div className="offset-2 col-4 p-0">
                                <select id="inputState" className="form-select p-1" aria-label=''>
                                    <option selected className='fs-6 fw-lighter'>-Select-</option>
                                    <option>Online</option>
                                    <option>Offline</option>
                                </select>
                                <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Type of Training</p>
                            </div>
                        </div>

                        <div className="row courseOpted m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3">
                                <b>Course Opted</b>
                            </label>
                            <div className="offset-2 col-4 p-0">
                                <select id="inputState" className="form-select p-1" aria-label=''>
                                    <option selected className='fs-6 fw-lighter'>-Select-</option>
                                    <option>6 Months Graphic Design</option>
                                    <option>6 Months Video Editing</option>
                                    <option>8 Months Web Designing</option>
                                    <option>8 Months Web Development</option>
                                    <option>10 Months Motion Graphics</option>
                                    <option>12 Months Digital Marketing</option>
                                    <option>12 Months Web Design & Development</option>
                                    <option>12 Months Motion Graphics & Social Media</option>
                                    <option>14 Months Motion Graphics & Web Design</option>
                                    <option>14 Months Motion Graphics & SEO</option>
                                    <option>18 Months Motion Graphics</option>
                                    <option>24 Months Full Advanced Course in Digital Media</option>
                                    <option>Customised</option>
                                    <option>Other</option>
                                </select>
                                <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Select the Course for Admission</p>
                            </div>
                        </div>

                        <div className="row daysOpted m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Days Opted</b></label>
                            <div className="offset-2 col-4 p-0">
                                <select id="inputState" className="form-select p-1" aria-label=''>
                                    <option selected className='fs-6 fw-lighter'>-Select-</option>
                                    <option>Mon-Wed-Fri</option>
                                    <option>Tue-Thurs-Sat</option>
                                    <option>Fast Track (Mon-Fri)</option>
                                </select>
                                <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Training Days</p>
                            </div>
                        </div>

                        <div className="row bacth m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Batch</b></label>
                            <div className="offset-2 col-4 p-0">
                                <select id="inputState" className="form-select p-1" aria-label=''>
                                    <option selected className='fs-6 fw-lighter'>-Select-</option>
                                    <option>8:00 AM - 10:00 AM</option>
                                    <option>10:00 AM - 10:00 AM</option>
                                    <option>12:00 PM - 2:00 PM</option>
                                    <option>2:00 PM - 4:00 PM</option>
                                    <option>4:00 PM - 6:00 PM</option>
                                    <option>6:00 PM - 8:00 PM</option>
                                </select>
                                <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Course Timing</p>
                            </div>
                        </div>
                    </div>
                    <div className="row courseDetails">
                        <div className="card-title text-start col-3 text-danger ">
                            <h4>Fee Details</h4>
                        </div>
                        <hr />
                        <div className="row m-0 mb-4">
                            <label htmlFor="" className="text-start col-3"><b>Total Course Fee</b></label>
                            <div className="offset-2 col-4 p-0">
                                <input type="text" className="form-control" id="totalCourseFees" />
                            </div>
                        </div>
                        <div className="row m-0 mb-4">
                            <label htmlFor="" className="text-start col-3"><b>Admission Fee</b></label>
                            <div className="offset-2 col-7 p-0">
                                <input type="text" className="form-control" id="admissionFee" />
                            </div>
                        </div>
                        <div className="row m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Montly Installment</b></label>
                            <div className="offset-2 col-7 p-0">
                                <input type="text" className="form-control" id="montlyInstallment" />
                            </div>
                        </div>
                        <div className="row trainingType m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Fee Mode</b></label>
                            <div className="offset-2 col-4 p-0">
                                <select id="inputState" className="form-select p-1" aria-label=''>
                                    <option selected className='fs-6 fw-lighter'>Installments or One Time</option>
                                    <option>Installments</option>
                                    <option>Online</option>
                                    <option>2 Part</option>
                                </select>
                                <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Installment Plan - 15000 Admission Fee 6000 Montly from Next Month</p>
                            </div>
                        </div>
                        <div className="row m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Signature</b></label>
                            <div className="offset-2 col-7 p-0" style={{ width: '50%' }}>
                                <SignatureCanvas
                                    ref={signatureRef}
                                    canvasProps={{ height: '150', className: 'signatureCanvas', style: { width: '100%', border: '2px solid #dee2e6' } }}
                                />
                                <div>
                                    <p style={{ color: 'blue', textDecoration: 'underline', display: 'flex', cursor: 'pointer' }} onClick={handleClear}>Clear</p>
                                    {/* <button onClick={handleSave}>Save Signature</button> */}
                                </div>
                            </div>
                        </div>
                        <div id="captchaContainer" className="row m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Verification Code</b></label>
                            <div className="offset-2 col-4 p-2" style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', border: '1px solid #dee2e6', backgroundColor: '#efebeb' }}>
                                <p>Enter the text in the box below</p>
                                <div style={{ display: 'flex' }}>
                                    <input style={{ borderRadius: 0, width: '75%' }} className="form-control" type="text" id="captchaInput" placeholder="Enter CAPTCHA" />
                                    {/* <span onClick={handleReloadCaptcha} className='ms-3 material-symbols-outlined' style={{ cursor: 'pointer' }}></span> */}
                                    <span onClick={handleReloadCaptcha} class="ms-3 mt-1 material-symbols-outlined" style={{ cursor: 'pointer' }}>
                                        move
                                    </span>
                                </div>
                                <div id="captchaText" className='mt-2' style={{ border: '1px solid #dee2e6', padding: 16, letterSpacing: '4px', fontWeight: 'bold', textDecoration: 'line-through', textAlign: 'center' }}>
                                    {captchaText}
                                </div>
                                {/* <button onclick="validateCaptcha()">Submit</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdmissionForm
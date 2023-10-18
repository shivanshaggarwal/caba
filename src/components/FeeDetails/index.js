import React, { useEffect, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const FeeDetails = (props) => {
    let { formik, captchaText, setCaptchaText, reloadcaptcha, setSignature } = props;
    const signatureRef = useRef();

    const handleBlur = () => {
        const signatureDataUrl = signatureRef.current.toDataURL();
        setSignature(signatureDataUrl); // Update the state with the signature data URL
    };

    const handleClear = () => {
        signatureRef.current.clear();
    };

    useEffect(() => {
        displayCaptcha()
    }, [reloadcaptcha]);

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

    // const [signature, setSignature] = useState('');

    const handleReloadCaptcha = () => {
        displayCaptcha();
        document.getElementById('captchaInput').value='';
        
    };
    // Initialize the CAPTCHA on page load
    window.onload = function () {
        displayCaptcha();
    };

    const handleSignatureChange = () => {
        const signatureCanvas = signatureRef.current;
        const signatureDataUrl = signatureCanvas.toDataURL(); // Get the signature data URL
        console.log("signature", signatureDataUrl)
        // formik.setFieldValue('signature', signatureDataUrl); // Set the signature value in Formik
    };

    return (
        <>
            <div className="row feeDetails">
                <div className="card-title text-start col-12 text-danger " >
                    <h4>Fee Details</h4>
                </div>
                <hr style={{border: "2px dashed", margin: "0px"}}/>
                <div className="bg-secondary-subtle m-0 mt-1 mb-1 p-2">
                    <div className="row m-0 mb-4">
                        <label htmlFor="" className="text-start col-12 mb-2 ps-1 col-sm-3"><b>Total Course Fee</b></label>
                        <div className="offset-sm-2 col-sm-4 p-0">
                            <div className='d-flex align-items-center'>
                                <input disabled type="text" className={`form-control ${formik.errors.courseFee && formik.touched.courseFee ? "border-danger" : ""}`} id="courseFee" onBlur={formik.handleBlur('courseFee')} value={formik.values.courseFee} onChange={(e) => formik.setFieldValue('courseFee', e.target.value)} />
                                <h5 className='ms-3'>INR</h5>
                            </div>
                            {formik.errors.courseFee && formik.touched.courseFee ? (
                                <div className='text-danger text-start'>{formik.errors.courseFee}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="row m-0 mb-4">
                        <label htmlFor="" className="text-start col-12 mb-2 ps-1 col-sm-3"><b>Admission Fee</b></label>
                        <div className="offset-sm-2 col-sm-7 p-0">
                            <input disabled type="text" className={`form-control ${formik.errors.admissionFee && formik.touched.admissionFee ? "border-danger" : ""}`} id="admissionFee" onBlur={formik.handleBlur('admissionFee')} value={formik.values.admissionFee} onChange={(e) => formik.setFieldValue('admissionFee', e.target.value)} />
                            {formik.errors.admissionFee && formik.touched.admissionFee ? (
                                <div className='text-danger text-start'>{formik.errors.admissionFee}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="row m-0 mb-4">
                        <label htmlFor="photo" className="text-start col-12 mb-2 ps-1 col-sm-3"><b>Montly Installment</b></label>
                        <div className="offset-sm-2 col-sm-7 p-0">
                            <input disabled type="text" className={`form-control ${formik.errors.monthlyInstallment && formik.touched.monthlyInstallment ? "border-danger" : ""}`} id="monthlyInstallment" onBlur={formik.handleBlur('monthlyInstallment')} value={formik.values.monthlyInstallment} onChange={(e) => formik.setFieldValue('monthlyInstallment', e.target.value)} />
                            {formik.errors.monthlyInstallment && formik.touched.monthlyInstallment ? (
                                <div className='text-danger text-start'>{formik.errors.monthlyInstallment}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="row trainingType m-0 mb-4">
                        <label htmlFor="photo" className="text-start col-3"><b>Fee Mode</b></label>
                        <div className="offset-2 col-4 p-0">
                            <select disabled id="inputState" className="form-select p-1" value={formik.values.feeMode} onChange={(e) => formik.setFieldValue('feeMode', e.target.value)} aria-label=''>
                                <option selected className='fs-6 fw-lighter'>Installments or One Time</option>
                                <option>Installments</option>
                                <option>Online</option>
                                <option>2 Part</option>
                            </select>
                            <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Installment Plan - 15000 Admission Fee 6000 Montly from Next Month</p>
                        </div>
                    </div>
                </div>
                <hr style={{border: "2px dashed"}}/>
                <div className="row m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-12 mb-2 ps-1 col-sm-3"><b>Signature</b></label>
                    <div className="w-100 offset-sm-2 col-sm-7 p-0">
                        <SignatureCanvas
                            ref={signatureRef}
                            canvasProps={{ height: '150', className: 'signatureCanvas', style: { width: '100%', border: '2px solid #dee2e6' } }}
                            onEnd={handleBlur}
                        />
                        <div>
                            <p style={{ color: 'blue', textDecoration: 'underline', display: 'flex', cursor: 'pointer' }} onClick={handleClear}>Clear</p>
                        </div>
                    </div>
                </div>
                <div id="captchaContainer" className="row m-0 mb-4">
                    <label htmlFor="photo" className="text-start col-12 mb-2 ps-1 col-sm-3"><b>Verification Code</b></label>
                    <div className="col-12 offset-sm-2 col-sm-4 p-2" style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', border: '1px solid #dee2e6', backgroundColor: '#efebeb' }}>
                        <p>Enter the text in the box below</p>
                        <div style={{ display: 'flex' }}>
                            <input style={{ borderRadius: 0, width: '75%' }} className="form-control" type="text" id="captchaInput" placeholder="Enter CAPTCHA" />
                            {/* <span onClick={handleReloadCaptcha} className='ms-3 material-symbols-outlined' style={{ cursor: 'pointer' }}></span> */}
                            <span onClick={handleReloadCaptcha} className="ms-3 mt-1 material-symbols-outlined" style={{ cursor: 'pointer' }}>
                                move
                            </span>
                        </div>
                        <div id="captchaText" className='mt-2' style={{ border: '1px solid #dee2e6', padding: 16, letterSpacing: '4px', fontWeight: 'bold', textDecoration: 'line-through', textAlign: 'center' }}>
                            {captchaText}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default FeeDetails

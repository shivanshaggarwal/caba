import React from 'react'

function Address(props) {
    const { formik } = props;
    return (
        <>
            <div className="row m-0 p-0">
                <div className="p-0">
                    <input type="text" className={`form-control ${formik.errors.guardianStreetAddress && formik.touched.guardianStreetAddress ? "border-danger" : ""}`} id="guardianStreetAddress" onBlur={formik.handleBlur('guardianStreetAddress')} value={formik.values.guardianStreetAddress} onChange={(e) => formik.setFieldValue('guardianStreetAddress', e.target.value)} />
                    <p className='text-start fs-6 fw-lighter'>Street Adress</p>
                </div>
                <div className="mt-2 p-0">
                    <input type="text" className={`form-control ${formik.errors.guardianAddress && formik.touched.guardianAddress ? "border-danger" : ""}`} id="guardianAddress" onBlur={formik.handleBlur('guardianAddress')} value={formik.values.guardianAddress} onChange={(e) => formik.setFieldValue('guardianAddress', e.target.value)} />
                    <p className='text-start fs-6 fw-lighter'>Adress Line 2</p>
                </div>
                <div className="col-12 mt-2 p-0">
                    <div className="row m-0 p-0 ">
                        <div className="col-6 ps-0">
                            <input type="text" className={`form-control ${formik.errors.guardianCity && formik.touched.guardianCity ? "border-danger" : ""}`} id="guardianCity" onBlur={formik.handleBlur('guardianCity')} value={formik.values.guardianCity} onChange={(e) => formik.setFieldValue('guardianCity', e.target.value)} />
                            <p className='text-start fs-6 fw-lighter'>City</p>
                        </div>
                        <div className="col-6 p-0">
                            <input type="text" className={`form-control ${formik.errors.guardianState && formik.touched.guardianState ? "border-danger" : ""}`} id="guardianState" onBlur={formik.handleBlur('guardianState')} value={formik.values.guardianState} onChange={(e) => formik.setFieldValue('guardianState', e.target.value)} />
                            <p className='text-start fs-6 fw-lighter'>State/Region/Province</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2 p-0">
                    <div className="row m-0 p-0 ">
                        <div className="col-6 ps-0">
                            <input type="text" className={`form-control ${formik.errors.guardianPincode && formik.touched.guardianPincode ? "border-danger" : ""}`} id="guardianPincode" onBlur={formik.handleBlur('guardianPincode')} value={formik.values.guardianPincode} onChange={(e) => formik.setFieldValue('guardianPincode', e.target.value)} />
                            <p className='text-start fs-6 fw-lighter'>Postal / Zip Code</p>
                        </div>
                        <div className="col-6 p-0">
                            <input type="text" className={`form-control ${formik.errors.guardianCountry && formik.touched.guardianCountry ? "border-danger" : ""}`} id="guardianCountry" onBlur={formik.handleBlur('guardianCountry')} value={formik.values.guardianCountry} onChange={(e) => formik.setFieldValue('guardianCountry', e.target.value)} />
                            <p className='text-start fs-6 fw-lighter'>Country</p>
                        </div>
                    </div>
                </div>
            </div>
            {((formik.errors.guardianStreetAddress && formik.touched.guardianStreetAddress) || (formik.errors.guardianAddress && formik.touched.guardianAddress) || (formik.errors.guardianCity && formik.touched.guardianCity) || (formik.errors.guardianState && formik.touched.guardianState) || (formik.errors.guardianPincode && formik.touched.guardianPincode) || (formik.errors.guardianCountry && formik.touched.guardianCountry)) ? (
                <div className='text-danger text-start'>{formik.errors.guardianStreetAddress}</div>
            ) : null}
        </>
    )
}

export default Address

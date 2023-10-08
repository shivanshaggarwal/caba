import React from 'react'

function Address(props) {
    const { formik } = props;
    return (
        <>
            <div className="row m-0 p-0">
                <div className="p-0">
                    <input type="text" className={`form-control ${formik.errors.streetAddress && formik.touched.streetAddress ? "border-danger" : ""}`} id="streetAddress" onBlur={formik.handleBlur('streetAddress')} value={formik.values.streetAddress} onChange={(e) => formik.setFieldValue('streetAddress', e.target.value)} />
                    <p className='text-start fs-6 fw-lighter'>Street Adress</p>
                </div>
                <div className="mt-2 p-0">
                    <input type="text" className={`form-control ${formik.errors.address && formik.touched.address ? "border-danger" : ""}`} id="address" onBlur={formik.handleBlur('address')} value={formik.values.address} onChange={(e) => formik.setFieldValue('address', e.target.value)} />
                    <p className='text-start fs-6 fw-lighter'>Adress Line 2</p>
                </div>
                <div className="col-12 mt-2 p-0">
                    <div className="row m-0 p-0 ">
                        <div className="col-6 ps-0">
                            <input type="text" className={`form-control ${formik.errors.city && formik.touched.city ? "border-danger" : ""}`} id="city" onBlur={formik.handleBlur('city')} value={formik.values.city} onChange={(e) => formik.setFieldValue('city', e.target.value)} />
                            <p className='text-start fs-6 fw-lighter'>City</p>
                        </div>
                        <div className="col-6 p-0">
                            <input type="text" className={`form-control ${formik.errors.state && formik.touched.state ? "border-danger" : ""}`} id="state" onBlur={formik.handleBlur('state')} value={formik.values.state} onChange={(e) => formik.setFieldValue('state', e.target.value)} />
                            <p className='text-start fs-6 fw-lighter'>State/Region/Province</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2 p-0">
                    <div className="row m-0 p-0 ">
                        <div className="col-6 ps-0">
                            <input type="text" className={`form-control ${formik.errors.pincode && formik.touched.pincode ? "border-danger" : ""}`} id="pincode" onBlur={formik.handleBlur('pincode')} value={formik.values.pincode} onChange={(e) => formik.setFieldValue('pincode', e.target.value)} />
                            <p className='text-start fs-6 fw-lighter'>Postal / Zip Code</p>
                        </div>
                        <div className="col-6 p-0">
                            <input type="text" className={`form-control ${formik.errors.country && formik.touched.country ? "border-danger" : ""}`} id="country" onBlur={formik.handleBlur('country')} value={formik.values.country} onChange={(e) => formik.setFieldValue('country', e.target.country)} />
                            <p className='text-start fs-6 fw-lighter'>Country</p>
                        </div>
                    </div>
                </div>
            </div>
            {((formik.errors.streetAddress && formik.touched.streetAddress) || (formik.errors.address && formik.touched.address) || (formik.errors.city && formik.touched.city) || (formik.errors.state && formik.touched.state) || (formik.errors.pincode && formik.touched.pincode) || (formik.errors.country && formik.touched.country)) ? (
                <div className='text-danger text-start'>{formik.errors.streetAddress}</div>
            ) : null}
        </>
    )
}

export default Address

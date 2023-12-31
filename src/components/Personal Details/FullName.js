import React from 'react'

function FullName(props) {
    const { formik } = props;

    return (
        <div className="offset-md-2 col-md-7 p-0">
            <div className="row gy-2 m-0">
                <div className="col-md-3 p-1 text-start">
                    <select id="salutation" className="form-select p-1" aria-label='' value={formik.values.salutation} onChange={(e) => formik.setFieldValue('salutation', e.target.value)}>
                        <option selected className='fs-6 fw-lighter'
                        >-Select-</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                    </select>
                    <label className="m-1" htmlFor="salutation">Title</label>
                </div>
                <div className="col-md-3 p-1 text-start">
                    <input type="text" className={`form-control ${formik.errors.firstName && formik.touched.firstName ? "border-danger" : ""}`} id="firstName" onBlur={formik.handleBlur('firstName')} value={formik.values.firstName} onChange={(e) => formik.setFieldValue('firstName', e.target.value)} />
                    <label htmlFor="firstName">First</label>
                </div>
                <div className="col-md-3 p-1 text-start">
                    <input type="text" className="form-control" value={formik.values.middleName} onChange={(e) => formik.setFieldValue('middleName', e.target.value)} />
                    <label htmlFor="middleName">Middle</label>
                </div>
                <div className="col-md-3 p-1 text-start">
                    <input type="text" className="form-control" value={formik.values.lastName} onChange={(e) => formik.setFieldValue('lastName', e.target.value)} />
                    <label htmlFor="lastName">Last</label>
                </div>
            </div>
            {
                (formik.errors.firstName && formik.touched.firstName) ? (
                    <div className='text-danger text-start'>{formik.errors.firstName}</div>
                ) : null
            }
        </div >
    )
}

export default FullName

import React from 'react'

function FullName(props) {
    const { formik } = props;

    return (
        <div className="col-12  p-0">
            <div className="row gy-2 m-0">
                <div className="col-6 col-sm-2 p-1 text-start">
                    <select id="guardianSalutation" className="form-select p-1" aria-label='' value={formik.values.guardianSalutation} onChange={(e) => formik.setFieldValue('guardianSalutation', e.target.value)}>
                        <option selected className='fs-6 fw-lighter'>-Select-</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                    </select>
                    <label className="m-1" htmlFor="guardianSalutation">Title</label>
                </div>
                <div className="col-sm-3 p-1 text-start">
                    <input type="text" className={`form-control ${formik.errors.guardianFirstName && formik.touched.guardianFirstName ? "border-danger" : ""}`} id="guardianFirstName" onBlur={formik.handleBlur('guardianFirstName')} value={formik.values.guardianFirstName} onChange={(e) => formik.setFieldValue('guardianFirstName', e.target.value)} />
                    <label htmlFor="guardianFirstName">First</label>
                </div>
                <div className="col-sm-3 p-1 text-start">
                    <input type="text" className="form-control" id="guardianMiddleName" value={formik.values.guardianMiddleName} onChange={(e) => formik.setFieldValue('guardianMiddleName', e.target.value)} />
                    <label htmlFor="guardianMiddleName">Middle</label>
                </div>
                <div className="col-sm-4 p-1 text-start">
                    <input type="text" className={`form-control ${formik.errors.guardianLastName && formik.touched.guardianLastName ? "border-danger" : ""}`} id="guardianLastName" onBlur={formik.handleBlur('guardianLastName')} value={formik.values.guardianLastName} onChange={(e) => formik.setFieldValue('guardianLastName', e.target.value)} />
                    <label htmlFor="guardianLastName">Last</label>
                </div>
            </div>
            {((formik.errors.guardianFirstName && formik.touched.guardianFirstName) || (formik.errors.guardianLastName && formik.touched.guardianLastName)) ? (
                <div className='text-danger text-start'>{formik.errors.guardianFirstName}</div>
            ) : null}
        </div>
    )
}

export default FullName

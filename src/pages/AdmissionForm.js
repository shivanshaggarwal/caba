import React from 'react'
import ImageInputs from '../components/ImageInputs'

function AdmissionForm() {
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">Caba Innovatives Admission Form</div>
                <div className="card-subtitle">Student Admission Form</div>
                <div className="card-body">
                    <div className="row">
                        <div className="card-title text-start col-3 text-primary "><h3>Personal Details</h3></div><hr />
                    </div>

                    <div className="row photo mb-4">
                        <label htmlFor="photo" className="text-start col-3"><b>Your Photo</b></label>
                        <ImageInputs id='fileName'/>
                    </div>
                    <div className="row fullname">
                        <label htmlFor="fullName" className="text-start col-3">
                            <b>Full Name <span className='text-danger'>*</span></b>
                            </label>
                        <div className="offset-2 col-7 p-0">
                            <div className="row gy-2 m-0">
                                <div className="col-6 col-md-3 p-1 ">
                                    <select id="inputState" className="form-select p-1" aria-label=''>
                                        <option selected className='fs-6 fw-lighter'>-Select-</option>
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                    </select>
                                </div>
                                <div className="col-md-3 p-1 text-start">
                                    <input type="text" className="form-control" id="specificSizeInputName" />
                                    <label htmlFor="specificSizeInputName">First</label>
                                </div>
                                <div className="col-md-3 p-1 text-start">
                                    <input type="text" className="form-control" id="specificSizeInputName" />
                                    <label htmlFor="specificSizeInputName">Middle</label>
                                </div>
                                <div className="col-md-3 p-1 text-start">
                                    <input type="text" className="form-control" id="specificSizeInputName" />
                                    <label htmlFor="specificSizeInputName">Last</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mail">
                        <label htmlFor="photo" className="text-start col-3"><b>Email</b></label>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AdmissionForm
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

                    <div className="row photo">
                        <label htmlFor="photo" className="text-start col-3"><b>Your Photo</b></label>
                        <ImageInputs />

                    </div>
                    <div className="row fullname">
                        <label htmlFor="fullName" className="text-start col-3"><b>Full Name <span className='text-danger'>*</span></b></label>
                        <div className="offset-3 col-6">
                            <div className="row gx-3">
                                <div class="col-sm-2 p-0 ">
                                    <select id="inputState" className="form-select " aria-label=''>
                                        <option selected>-Select-</option>
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                    </select>
                                </div>
                                <div class="col-sm-3 ">
                                    <input type="text" class="form-control" id="specificSizeInputName" />
                                    <label for="specificSizeInputName">First</label>
                                </div>
                                <div class="col-sm-3 ">
                                    <input type="text" class="form-control" id="specificSizeInputName" />
                                    <label for="specificSizeInputName">Middle</label>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="specificSizeInputName" />
                                    <label for="specificSizeInputName">Last</label>
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
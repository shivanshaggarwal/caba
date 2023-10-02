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
                        <ImageInputs/>     
                                     
                    </div>
                    <div className="row fullname">
                        <label htmlFor="photo" className="text-start col-3"><b>Full Name <span className='text-danger'>*</span></b></label>
                        <div className="offset-3 col-6 bg-danger p-3">
                            <div className="row">
                                <div class="col-md-3 ">
                                    <select id="inputState" className="form-select ">
                                        <option selected >-Select-</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <input type='text' className="col"></input>
                                <input type='text' className="col"></input>
                                <input type='text' className="col"></input>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdmissionForm
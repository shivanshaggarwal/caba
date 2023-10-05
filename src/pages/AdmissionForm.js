import React from 'react'
import ImageInputs from '../components/ImageInputs'
import PhoneInput from '../components/PhoneInput'

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

                    <div className="row photo m-0 p-0 mb-4">
                        <label htmlFor="photo" className="text-start col-3"><b>Your Photo</b></label>
                        <ImageInputs id='fileName' info="Your Adhaar Copy Upload. JPG/PNG format less than 5 MB" />
                    </div>
                    <div className="row fullname m-0 mb-4">
                        <label htmlFor="fullName" className="text-start col-3">
                            <b>Full Name <span className='text-danger'>*</span></b>
                        </label>
                        <div className="offset-2 col-7 p-0">
                            <div className="row gy-2 m-0">
                                <div className="col-6 col-md-3 p-1 text-start">
                                    <select id="inputState" className="form-select p-1" aria-label=''>
                                        <option selected className='fs-6 fw-lighter'>-Select-</option>
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                    </select>
                                    <label className="m-1" htmlFor="specificSizeInputName">Title</label>
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
                    <div className="row email m-0 mb-4">
                        <label htmlFor="photo" className="text-start col-3"><b>Email</b></label>
                        <div className="offset-2 col-4 p-0">
                            <input type="text" className="form-control" id="specificSizeInputName" />
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

                    <div className="row adhar m-0 p-0 mb-4">
                        <label htmlFor="photo" className="text-start col-3"><b>Self Aadhar</b></label>
                        <ImageInputs id='fileName' />
                    </div>
                    <div className="row tenth m-0 p-0 mb-4">
                        <label htmlFor="photo" className="text-start col-3"><b>10th Certificate</b></label>
                        <ImageInputs id='fileName' info="Copy of your 10th Board Certificate. JPG/PNG format less than 10 MB" />
                    </div>
                    <div className="row twelth m-0 p-0 mb-4">
                        <label htmlFor="photo" className="text-start col-3"><b>12th Certificate</b></label>
                        <ImageInputs id='fileName' info="12th Certificate Copy Upload. JPG/PNG format less than 10 MB" />
                    </div>
                    <div className="row graduation m-0 p-0 mb-4">
                        <label htmlFor="photo" className="text-start col-3"><b>Graduation Certificate</b></label>
                        <ImageInputs id='fileName' info="Copy of Graduation Degree (if finished). JPG/PNG format less than 10 MB" />
                    </div>
                    <div className="row address m-0 p-0 mb-4 g-3">
                        <label for="inputAddress" class="form-label col-3 text-start"><b>Your Address</b></label>
                        <div className="offset-2 col-7 p-0">
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="offset-5 col-7 p-0">
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="offset-5 col-7 p-0">
                            <div className="row m-0 p-0 ">
                                <div className="col-6 ps-0">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="col-6 p-0">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </div>
                        </div>
                        <div className="offset-5 col-7 p-0">
                            <div className="row m-0 p-0 ">
                                <div className="col-6 ps-0">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="col-6 p-0">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                            </div>
                        </div>
                        
                    </div>


                </div>
            </div>

        </div>

    )
}

export default AdmissionForm
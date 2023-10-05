import React from 'react'
import ImageInputs from '../components/ImageInputs'
import PhoneInput from '../components/PhoneInput'
import FullName from '../components/FullName'
import Address from '../components/Address'

function AdmissionForm() {
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
                            <ImageInputs id='fileName' info="Your Adhaar Copy Upload. JPG/PNG format less than 5 MB"/>
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

                        <div className="row adhar m-0  mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Self Aadhar</b></label>
                            <ImageInputs id='fileName' info="Your Adhaar Copy Upload. JPG/PNG format less than 5 MB"/>
                        </div>
                        <div className="row tenth m-0 mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>10th Certificate</b></label>
                            <ImageInputs id='fileName' info="Copy of your 10th Board Certificate. JPG/PNG format less than 10 MB" />
                        </div>
                        <div className="row twelth m-0  mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>12th Certificate</b></label>
                            <ImageInputs id='fileName' info="12th Certificate Copy Upload. JPG/PNG format less than 10 MB" />
                        </div>
                        <div className="row graduation m-0  mb-4">
                            <label htmlFor="photo" className="text-start col-3"><b>Graduation Certificate</b></label>
                            <ImageInputs id='fileName' info="Copy of Graduation Degree (if finished). JPG/PNG format less than 10 MB" />
                        </div>
                        <div className="row address m-0  mb-4 g-3">
                            <label for="inputAddress" class="ps-3 form-label col-3 text-start"><b>Your Address</b></label>
                            <div className='offset-2 col-7 p-0'>
                                <Address/>
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
                                <Address/>
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
                            <ImageInputs id='fileName' info="Copy of Father / Mother Aadhaar Copy. Should be JPG format less than 5 MB"/>
                        </div>
                        

                        
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AdmissionForm
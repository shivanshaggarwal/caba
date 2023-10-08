import React from 'react'

const CourseDetails = (props) => {
    const { formik } = props;

    return (
        <>
            <div className="row courseDetails">
                <div className="card-title text-start col-3 text-danger ">
                    <h4>Course Details</h4>
                </div>
                <hr />
                <div className="row rollNumber m-0 mb-4">
                    <label htmlFor="rollNumber" className="text-start col-3"><b>Roll Number</b></label>
                    <div className="offset-2 col-4 p-0">
                        <input type="number" className={`form-control ${formik.errors.rollNumber && formik.touched.rollNumber ? "border-danger" : ""}`} id="rollNumber" onBlur={formik.handleBlur('rollNumber')} value={formik.values.rollNumber} onChange={(e) => formik.setFieldValue('rollNumber', e.target.value)} placeholder='Official Use Only' />
                        {formik.errors.rollNumber && formik.touched.rollNumber ? (
                            <div className='text-danger text-start'>{formik.errors.rollNumber}</div>
                        ) : null}
                    </div>
                </div>
                <div className="row date m-0 mb-4">
                    <label htmlFor="dateOfJoining" className="text-start col-3"><b>Date Of Joining</b></label>
                    <div className="offset-2 col-4 p-0">
                        <input type="date" className={`form-control ${formik.errors.dateOfJoining && formik.touched.dateOfJoining ? "border-danger" : ""}`} id="dateOfJoining" onBlur={formik.handleBlur('dateOfJoining')} value={formik.values.dateOfJoining} onChange={(e) => formik.setFieldValue('dateOfJoining', e.target.value)} placeholder='Official Use Only' />
                        {formik.errors.dateOfJoining && formik.touched.dateOfJoining ? (
                            <div className='text-danger text-start'>{formik.errors.dateOfJoining}</div>
                        ) : null}
                    </div>
                </div>
                <div className="row trainingType m-0 mb-4">
                    <label htmlFor="trainingType" className="text-start col-3"><b>Training Type</b></label>
                    <div className="offset-2 col-4 p-0">
                        <select id="trainingType" className="form-select p-1" value={formik.values.trainingType} onChange={(e) => formik.setFieldValue('trainingType', e.target.value)} aria-label=''>
                            <option selected className='fs-6 fw-lighter'>-Select-</option>
                            <option>Online</option>
                            <option>Offline</option>
                        </select>
                        <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Type of Training</p>
                    </div>
                </div>

                <div className="row courseOpted m-0 mb-4">
                    <label htmlFor="courseOpted" className="text-start col-3">
                        <b>Course Opted</b>
                    </label>
                    <div className="offset-2 col-4 p-0">
                        <select id="courseOpted" className="form-select p-1" value={formik.values.courseOpted} onChange={(e) => formik.setFieldValue('courseOpted', e.target.value)} aria-label=''>
                            <option selected className='fs-6 fw-lighter'>-Select-</option>
                            <option>6 Months Graphic Design</option>
                            <option>6 Months Video Editing</option>
                            <option>8 Months Web Designing</option>
                            <option>8 Months Web Development</option>
                            <option>10 Months Motion Graphics</option>
                            <option>12 Months Digital Marketing</option>
                            <option>12 Months Web Design & Development</option>
                            <option>12 Months Motion Graphics & Social Media</option>
                            <option>14 Months Motion Graphics & Web Design</option>
                            <option>14 Months Motion Graphics & SEO</option>
                            <option>18 Months Motion Graphics</option>
                            <option>24 Months Full Advanced Course in Digital Media</option>
                            <option>Customised</option>
                            <option>Other</option>
                        </select>
                        <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Select the Course for Admission</p>
                    </div>
                </div>

                <div className="row daysOpted m-0 mb-4">
                    <label htmlFor="daysOpted" className="text-start col-3"><b>Days Opted</b></label>
                    <div className="offset-2 col-4 p-0">
                        <select id="daysOpted" className="form-select p-1" value={formik.values.daysOpted} onChange={(e) => formik.setFieldValue('daysOpted', e.target.value)} aria-label=''>
                            <option selected className='fs-6 fw-lighter'>-Select-</option>
                            <option>Mon-Wed-Fri</option>
                            <option>Tue-Thurs-Sat</option>
                            <option>Fast Track (Mon-Fri)</option>
                        </select>
                        <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Training Days</p>
                    </div>
                </div>

                <div className="row bacth m-0 mb-4">
                    <label htmlFor="batch" className="text-start col-3"><b>Batch</b></label>
                    <div className="offset-2 col-4 p-0">
                        <select id="batch" className="form-select p-1" value={formik.values.batch} onChange={(e) => formik.setFieldValue('batch', e.target.value)} aria-label=''>
                            <option selected className='fs-6 fw-lighter'>-Select-</option>
                            <option>8:00 AM - 10:00 AM</option>
                            <option>10:00 AM - 10:00 AM</option>
                            <option>12:00 PM - 2:00 PM</option>
                            <option>2:00 PM - 4:00 PM</option>
                            <option>4:00 PM - 6:00 PM</option>
                            <option>6:00 PM - 8:00 PM</option>
                        </select>
                        <p className='my-0 text-start fw-lighter fs-6 fst-italic'>Course Timing</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetails

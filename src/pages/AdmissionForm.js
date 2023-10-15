import React, { useRef, useState } from 'react'
import ImageInputs from '../components/ImageInputs'
import FullName from '../components/Personal Details/FullName'
import Address from '../components/Personal Details/Address'
// import { Formik, Form, Field } from 'formik';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import PersonalDetails from '../components/Personal Details'
import ParentDetails from '../components/ParentDetails'
import CourseDetails from '../components/CourseDetails'
import FeeDetails from '../components/FeeDetails'
import dividerImage from './divider-2461548_640.png';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Enter the value for this field"),
    email: Yup.string().email('Enter a valid email address. (eg: yourname@domain.com)').required('Enter a value for this field.'),
    mobileNumber: Yup.string()
        .matches(/^[0-9]+$/, {
            message: 'Enter numbers only',
            excludeEmptyString: true
        })
        .min(10, 'You must enter at least 10 digits')
        .required('Enter a number for this field'),
    otherMobileNumber: Yup.string()
        .matches(/^[0-9]+$/, {
            message: 'Enter numbers only',
            excludeEmptyString: true
        })
        .min(10, 'You must enter at least 10 digits'),
    streetAddress: Yup.string().required('Enter a value for this field'),
    address: Yup.string().required('Enter a value for this field'),
    city: Yup.string().required('Enter a value for this field'),
    state: Yup.string().required('Enter a value for this field'),
    pincode: Yup.string().required('Enter a value for this field'),
    country: Yup.string().required('Enter a value for this field'),
    guardianFirstName: Yup.string().required("Enter the value for this field"),
    guardianLastName: Yup.string().required("Enter the value for this field"),
    guardianStreetAddress: Yup.string().required('Enter a value for this field'),
    guardianAddress: Yup.string().required('Enter a value for this field'),
    guardianCity: Yup.string().required('Enter a value for this field'),
    guardianState: Yup.string().required('Enter a value for this field'),
    guardianPincode: Yup.string().required('Enter a value for this field'),
    guardianCountry: Yup.string().required('Enter a value for this field'),
    guardianMobileNumber: Yup.string()
        .matches(/^[0-9]+$/, {
            message: 'Enter numbers only',
            excludeEmptyString: true
        })
        .min(10, 'You must enter at least 10 digits')
        .required('Enter a number for this field'),
    guardianEmail: Yup.string().email('Enter a valid email address. (eg: yourname@domain.com)').required('Enter a value for this field.'),
    rollNumber: Yup.string().required('Enter a number for this field'),
    dateOfJoining: Yup.string().required('Choose a date'),
    courseFee: Yup.string().required('Enter a number for this field'),
    admissionFee: Yup.string().required('Enter a number for this field'),
    monthlyInstallment: Yup.string().required('Enter a number for this field'),
});

const countries = [
    { code: '+91', name: 'India', flag: require('../india.png') },
];

function AdmissionForm() {
    const [photoImage, setPhotoImage] = useState('')
    const [adhaarImage, setAdhaarImage] = useState('')
    const [tenthCertificateImage, setTenthCertificateImage] = useState('')
    const [twelthCertificateImage, setTwelthCertificateImage] = useState('')
    const [graduationImage, setGraduationImage] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [guardianAdhaarImage, setGuardianAdhaarImage] = useState('');

    const [captchaText, setCaptchaText] = useState('Please reload for the captcha');
    const [reloadcaptcha, setReloadCaptcha] = useState('false');
    const [signature, setSignature] = useState(''); // State to store the signature value


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            salutation: '',
            firstName: '',
            middleName: '',
            lastName: '',
            mobileNumber: '',
            otherMobileNumber: '',
            streetAddress: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            country: '',
            photoImage: photoImage,
            adhaarImage: adhaarImage,
            tenthCertificateImage: tenthCertificateImage,
            twelthCertificateImage: twelthCertificateImage,
            graduationImage: graduationImage,
            selectedCountry: selectedCountry.name,
            guardianAdhaarImage: guardianAdhaarImage,
            guardianSalutation: '',
            guardianFirstName: '',
            guardianMiddleName: '',
            guardianLastName: '',
            relationShip: '',
            guardianStreetAddress: '',
            guardianAddress: '',
            guardianCity: '',
            guardianState: '',
            guardianPincode: '',
            guardianCountry: '',
            guardianMobileNumber: '',
            guardianEmail: '',
            rollNumber: '',
            dateOfJoining: '',
            trainingType: '',
            courseOpted: '',
            daysOpted: '',
            batch: '',
            courseFee: '',
            admissionFee: '',
            monthlyInstallment: '',
            feeMode: '',
            signature: signature,
            captcha: '',
        },
        validationSchema,
        onSubmit: async (values, formik) => {
            validateCaptcha(values)
        }
    });

    const { errors, values, touched, handleBlur, handleSubmit, setFieldValue, setFieldTouched } = formik;
    // Validate the user's input
    const validateCaptcha = async (values) => {
        const userInput = document.getElementById('captchaInput').value;
        const captchaText = document.getElementById('captchaText').textContent;
        if (userInput === captchaText) {
            console.log('userInput', userInput)
            values.captcha = userInput;
            console.log(values);
        } else {
            alert('CAPTCHA is incorrect. Please try again.');
            values.captcha = '';
            console.log(values)
            setReloadCaptcha(true)
        }
    }

    // Initialize the CAPTCHA on page load
    // window.onload = function () {
    //     displayCaptcha();
    // };

    return (
        
            <div className='container col-12 col-md-6'>
                <div className="card">
                    <div className="card-header fs-1">Caba Innovatives Admission Form</div>
                    <div className="card-subtitle m-4 fs-2 fw-light">Student Admission Form</div>
                    <div className="card-body">
                        <PersonalDetails formik={formik} setPhotoImage={setPhotoImage} setAdhaarImage={setAdhaarImage} setTenthCertificateImage={setTenthCertificateImage} setTwelthCertificateImage={setTwelthCertificateImage} setGraduationImage={setGraduationImage} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} countries={countries} />
                        <ParentDetails formik={formik} countries={countries} setGuardianAdhaarImage={setGuardianAdhaarImage} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                        <CourseDetails formik={formik} />
                        <FeeDetails setSignature={setSignature} formik={formik} reloadcaptcha={reloadcaptcha} captchaText={captchaText} setCaptchaText={setCaptchaText} />
                        {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
                        <button type="submit" onClick={handleSubmit} class="btn btn-primary mb-3">Submit</button>
                    </div>
                </div>
            </div>     
    )
}

export default AdmissionForm
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

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Enter the value for this field"),
    middleName: Yup.string().required("Enter the value for this field"),
    lastName: Yup.string().required("Enter the value for this field"),
    email: Yup.string().email('Enter a valid email address. (eg: yourname@domain.com)').required('Enter a value for this field.'),
    mobileNumber: Yup.string().min(10, 'You must enter at least 10 digits').required('Enter a number for this field'),
    streetAddress: Yup.string().required('Enter a value for this field'),
    address: Yup.string().required('Enter a value for this field'),
    city: Yup.string().required('Enter a value for this field'),
    state: Yup.string().required('Enter a value for this field'),
    pincode: Yup.string().required('Enter a value for this field'),
    country: Yup.string().required('Enter a value for this field'),
    guardianFirstName: Yup.string().required("Enter the value for this field"),
    guardianMiddleName: Yup.string().required("Enter the value for this field"),
    guardianLastName: Yup.string().required("Enter the value for this field"),
    guardianStreetAddress: Yup.string().required('Enter a value for this field'),
    guardianAddress: Yup.string().required('Enter a value for this field'),
    guardianCity: Yup.string().required('Enter a value for this field'),
    guardianState: Yup.string().required('Enter a value for this field'),
    guardianPincode: Yup.string().required('Enter a value for this field'),
    guardianCountry: Yup.string().required('Enter a value for this field'),
    guardianMobileNumber: Yup.string().min(10, 'You must enter at least 10 digits').required('Enter a number for this field'),
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
    const [guardianAdhaarImage, setGuardianAdhaarImage] = useState('')

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
            signature: '',
        },
        validationSchema,
        onSubmit: async (values, formik) => {
            console.log("mfrnf")
            validateCaptcha()
            console.log(selectedCountry)
            console.log(values);
        }
    });

    const { errors, values, touched, handleBlur, handleSubmit, setFieldValue, setFieldTouched } = formik;

    const [captchaText, setCaptchaText] = useState('');
    const signatureRef = useRef();

    const handleSave = () => {
        const signatureDataUrl = signatureRef.current.toDataURL();
        // Now you can use `signatureDataUrl` as the user's drawn signature
        console.log(signatureDataUrl);
    };

    function generateCaptcha() {
        const captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const captchaLength = 6;
        let captcha = '';
        for (let i = 0; i < captchaLength; i++) {
            const randomIndex = Math.floor(Math.random() * captchaChars.length);
            captcha += captchaChars.charAt(randomIndex);
        }
        return captcha;
    }

    // Display the generated CAPTCHA
    function displayCaptcha() {
        // const captchaText = document.getElementById('captchaText');
        const captcha = generateCaptcha();
        setCaptchaText(captcha);
        // captchaText.textContent = captcha;
    }

    // Validate the user's input
    function validateCaptcha() {
        const userInput = document.getElementById('captchaInput').value;
        const captchaText = document.getElementById('captchaText').textContent;

        if (userInput.toLowerCase() === captchaText.toLowerCase()) {
            alert('CAPTCHA is correct!'); // Replace with your validation logic
            // Optionally, generate a new CAPTCHA for the next challenge
            displayCaptcha();
        } else {
            alert('CAPTCHA is incorrect. Please try again.');
            setCaptchaText('')
            // Optionally, refresh the CAPTCHA for another attempt
            displayCaptcha();
        }
    }

    const handleReloadCaptcha = () => {
        displayCaptcha();
    };
    // Initialize the CAPTCHA on page load
    window.onload = function () {
        displayCaptcha();
    };

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">Caba Innovatives Admission Form</div>
                <div className="card-subtitle">Student Admission Form</div>
                <div className="card-body">
                    <PersonalDetails formik={formik} setPhotoImage={setPhotoImage} setAdhaarImage={setAdhaarImage} setTenthCertificateImage={setTenthCertificateImage} setTwelthCertificateImage={setTwelthCertificateImage} setGraduationImage={setGraduationImage} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} countries={countries} />
                    <ParentDetails formik={formik} countries={countries} setGuardianAdhaarImage={setGuardianAdhaarImage} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                    <CourseDetails formik={formik} />
                    <FeeDetails formik={formik} captchaText={captchaText} setCaptchaText={setCaptchaText} />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>

    )
}

export default AdmissionForm
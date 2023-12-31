
import React, { useState, useRef } from 'react';
import { Modal, Button } from "react-bootstrap";


const ImageInputs = (props) => {
    let { photoImage, setPhotoImage, adhaarImage, setAdhaarImage, tenthCertificateImage, setTenthCertificateImage, twelthCertificateImage, setTwelthCertificateImage, graduationImage, setGraduationImage, guardianAdhaarImage, setGuardianAdhaarImage, value, idOfImage, setIsPhotoImage, setIsAdhaarImage, setIsTenthCertificateImage, setIsTwelthCertificateImage, setIsGraduationImage, setIsGuardianAdhaarImage } = props;
    const [selectedFile, setSelectedFile] = useState(null);
    const [divBorderHovered, setDivBorderHovered] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile({
                    preview: reader.result,
                    name: file.name,
                    size: file.size
                });
            };
            reader.readAsDataURL(file);
            try {
                if (value == "photo") {
                    setPhotoImage(file);
                    setIsPhotoImage(true);
                } else if (value == "adhaar") {
                    setAdhaarImage(file);
                    setIsAdhaarImage(true);
                } else if (value == "tenthCertificate") {
                    setTenthCertificateImage(file);
                    setIsTenthCertificateImage(true);
                } else if (value == "twelthCertificate") {
                    setTwelthCertificateImage(file);
                    setIsTwelthCertificateImage(true);
                } else if (value == "graduation") {
                    setGraduationImage(file);
                    setIsGraduationImage(true);
                } else if (value == "guardianAdhaar") {
                    setGuardianAdhaarImage(file);
                    setIsGuardianAdhaarImage(true);
                } else {
                    handleClose();
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            setSelectedFile(null);
        }
    };
    const handleDelete = (event) => {

        if (selectedFile) {
            setSelectedFile(null)
        }
    }
    const [isCameraVisible, setIsCameraVisible] = useState(false);
    const videoRef = useRef(null);

    const openCamera = () => {

        setIsCameraVisible(true);
        handleShow();
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then((stream) => {
                        videoRef.current.srcObject = stream;
                    })
                    .catch((error) => {
                        console.error('Error accessing the camera:', error);
                    });
            } else {
                throw "Not working"
            }
        } catch (error) {
            console.log(error)
        }
    };

    const captureImage = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const imageDataURL = canvas.toDataURL('image/png');
        try {
            if (value === "photo") {
                setPhotoImage(imageDataURL);
                setIsPhotoImage(false);
            } else if (value === "adhaar") {
                setAdhaarImage(imageDataURL);
                setIsAdhaarImage(false);
            } else if (value === "tenthCertificate") {
                setTenthCertificateImage(imageDataURL);
                setIsTenthCertificateImage(false);
            } else if (value === "twelthCertificate") {
                setTwelthCertificateImage(imageDataURL);
                setIsTwelthCertificateImage(false);
            } else if (value === "graduation") {
                setGraduationImage(imageDataURL);
                setIsGraduationImage(false);
            } else if (value === "guardianAdhaar") {
                setGuardianAdhaarImage(imageDataURL);
                setIsGuardianAdhaarImage(false);
            } else {
                handleClose();
            }
            throw "Empty Image"
        } catch (error) {
            console.log(error)
        }


        //   Save the captured image in local storage
        localStorage.setItem('capturedImage', imageDataURL);

        //   Stop the camera stream
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());

        //   Hide the camera
        setIsCameraVisible(false);
        handleClose();
    };

    return (
        <>
            <div className="col-md-7 offset-md-2 photocontainer p-0">
                <div className="col-12 bg-light rounded-2">
                    <div className='row m-0' style={{ border: divBorderHovered ? '1px dashed gray' : '' }} onMouseEnter={() => setDivBorderHovered(true)}
                        onMouseLeave={() => setDivBorderHovered(false)}>
                        <div
                            className="col-6 p-3 fs-6 fw-lighter"
                            htmlFor={idOfImage}
                            onClick={() => document.getElementById(idOfImage).click()}
                        >
                            Choose File
                            <input
                                type="file" name="" id={idOfImage}
                                className='d-none' onChange={handleFileChange}
                                accept=".jpg, .jpeg, .png"
                            />
                        </div>
                        <div className='col-6'>
                            <span
                                onClick={() => document.getElementById(idOfImage).click()}
                                className="material-symbols-outlined m-2 bg-secondary-subtle p-2 rounded-circle outline-none"
                                onMouseEnter={(e) => e.target.style.cursor = "pointer"}
                            >
                                upload
                            </span>
                            <span
                                className="material-symbols-outlined m-2 bg-secondary-subtle p-2 rounded-circle outline-none"
                                onMouseEnter={(e) => e.target.style.cursor = "pointer"}
                                onClick={openCamera}
                            >
                                photo_camera
                            </span>

                            {isCameraVisible && (
                                //   <div style={{ position: 'absolute', width: 200, height: 200, top: 50 }}>
                                //       <video style={{ width: '100%', height: '100%' }} ref={videoRef} autoPlay />
                                //       <button onClick={captureImage}>Capture Image</button>
                                //   </div>
                                <Modal show={show} onHide={handleClose}>
                                    {/* <Modal.Header closeButton>
                                     <Modal.Title>Modal heading</Modal.Title>
                                 </Modal.Header> */}
                                    <Modal.Body className='p-0' >
                                        <video style={{ width: '100%', height: '100%' }} ref={videoRef} autoPlay />
                                    </Modal.Body>
                                    <Modal.Footer className='d-flex justify-content-center m-0 p-0'>
                                        <Button className='btn btn-secondary' onClick={handleClose}>
                                            Close
                                        </Button>
                                        <span
                                            className=" btn material-symbols-outlined m-2 bg-secondary text-light p-2 rounded-circle outline-none"
                                            onClick={captureImage}
                                        >
                                            photo_camera
                                        </span>
                                    </Modal.Footer>
                                </Modal>

                            )}

                        </div>
                    </div>
                    {selectedFile && (
                        <div className="preview-container text-start p-0 m-0 fw-lighter">
                            <span className='mx-2 mt-0 outline-none'>File Name: {selectedFile.name}</span>
                            <span className='mx-2 outline-none'>File Size: {(selectedFile.size / (1024)).toFixed(2)} KB</span> ✅ <span onMouseEnter={(e) => e.target.style.cursor = "pointer"} onClick={handleDelete}>❌</span>
                        </div>
                    )}
                    {(photoImage || adhaarImage || tenthCertificateImage || twelthCertificateImage || graduationImage || guardianAdhaarImage) && (
                        <div className="preview-container text-start p-0 m-0 fw-lighter">
                            <span className='mx-2 mt-0 outline-none text-success fw-bold'>Your image has submitted</span>
                        </div>
                    )}
                </div>
                <p className='my-0 text-start' style={{ fontSize: "0.8rem", fontWeight: "lighter" }}>{props.info}</p>
            </div >
        </>
    );
};

export default ImageInputs;

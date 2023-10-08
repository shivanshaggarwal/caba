
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form'


const ImageInputs = (props) => {
    let { setPhotoImage, setAdhaarImage, setTenthCertificateImage, setTwelthCertificateImage, setGraduationImage, value } = props;
    const [selectedFile, setSelectedFile] = useState(null);
    const [divBorderHovered, setDivBorderHovered] = useState(false);

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
        console.log("mfejrnbfjreb")
        setIsCameraVisible(true);
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                })
                .catch((error) => {
                    console.error('Error accessing the camera:', error);
                });
        } else {
            console.log("lwfnjke")
        }
    };

    const captureImage = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const imageDataURL = canvas.toDataURL('image/png');
        if (value == "photo") {
            setPhotoImage(imageDataURL);
        } else if (value == "adhaar") {
            setAdhaarImage(imageDataURL)
        } else if (value == "tenthCertificate") {
            setTenthCertificateImage(imageDataURL)
        } else if (value == "twelthCertificate") {
            setTwelthCertificateImage(imageDataURL)
        } else if (value == "graduation") {
            setGraduationImage(imageDataURL)
        }

        // Save the captured image in local storage
        // localStorage.setItem('capturedImage', imageDataURL);

        // Stop the camera stream
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());

        // Hide the camera
        setIsCameraVisible(false);
    };

    return (
        <div className="offset-2 col-7 photocontainer p-0">
            <div className="col-12 bg-light rounded-2">
                <div className='row m-0' style={{ border: divBorderHovered ? '1px dashed gray' : '' }} onMouseEnter={() => setDivBorderHovered(true)}
                    onMouseLeave={() => setDivBorderHovered(false)}>
                    <div
                        className="col-12 col-sm-6 p-3 fs-6 fw-lighter"
                        htmlFor="fileName"
                        onClick={() => document.getElementById('fileName').click()}
                    >
                        Choose File
                        <input
                            type="file" name="" id="fileName"
                            className='d-none' onChange={handleFileChange}
                            accept=".jpg, .jpeg, .png"
                        />
                    </div>
                    <div className='col-12 col-sm-6'>
                        <span
                            onClick={() => document.getElementById('fileName').click()}
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
                            <div style={{ position: 'absolute', width: 200, height: 200, top: 50 }}>
                                <video style={{ width: '100%', height: '100%' }} ref={videoRef} autoPlay />
                                <button onClick={captureImage}>Capture Image</button>
                            </div>
                        )}

                    </div>
                </div>
                {selectedFile && (
                    <div className="preview-container text-start p-0 m-0 fw-lighter">
                        <span className='mx-2 mt-0 outline-none'>File Name: {selectedFile.name}</span>
                        <span className='mx-2 outline-none'>File Size: {(selectedFile.size / (1024)).toFixed(2)} KB</span> ✅ <span onMouseEnter={(e) => e.target.style.cursor = "pointer"} onClick={handleDelete}>❌</span>
                    </div>
                )}
            </div>
            <p className='my-0 text-start fw-lighter fs-6 fst-italic'>{props.info}</p>
        </div >
    );
};

export default ImageInputs;






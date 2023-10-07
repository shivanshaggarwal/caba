
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'


const ImageInputs = (props) => {

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
    function openCamera() {

        const cameraStream = document.getElementById('cameraStream');

        // Check if the getUserMedia API is available in the user's browser
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true }) // Request access to the camera
                .then((stream) => {
                    // Display the camera stream in a video element
                    cameraStream.srcObject = stream;
                    cameraStream.style.display = 'block';
                })
                .catch((error) => {
                    console.error('Error accessing the camera:', error);
                });
        } else {
            console.error('getUserMedia is not supported in this browser');
        }
    }

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






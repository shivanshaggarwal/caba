
import React, { useState } from 'react';

const ImageInputs = () => {
    const [selectedFile, setSelectedFile] = useState(null);

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

    return (
        <div className="offset-3 col-6 photocontainer p-0">
        <div className="col-12 bg-light">
            <div className="text-start p-3" htmlFor="fileName" onClick={() => document.getElementById('fileName').click()}>
                Choose File
                <input type="file" name="" id="fileName" style={{ display: 'none' }} onChange={handleFileChange} accept=".jpg, .jpeg, .png"/>
            </div>
            {selectedFile && (
                <div className="preview-container text-start p-0 pb-3 m-0">
                    <div className="container"><hr/></div>
                    <small className='mx-2 mt-0'><span>File Name: {selectedFile.name}</span></small>
                    <small className='mx-2'><span>File Size: {(selectedFile.size/(1024)).toFixed(2)} KB</span> ✅ <span onMouseEnter={(e)=>e.target.style.cursor="pointer"} oncli>❌</span></small>
                </div>
            )}
        </div>
            <p className='my-0 text-start fw-lighter ' style={{fontSize: "15px"}}><i>Passport Size Photo in JPG format - JPG/PNG format less than 5 MB</i></p> 
        </div>  
    );
};

export default ImageInputs;




{/* function openCamera() {
  const cameraStream = document.getElementById('cameraStream');
  
  // Check if the getUserMedia API is available in the user's browser
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true }) // Request access to the camera
      .then((stream) => {
        // Display the camera stream in a video element
        cameraStream.style.display = 'block';
        cameraStream.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  } else {
    console.error('getUserMedia is not supported in this browser');
  }
}  */}

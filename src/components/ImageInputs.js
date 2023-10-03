
import React, { useState } from 'react';
import {useForm} from 'react-hook-form'


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
    const handleDelete =(event) =>{
        
        if(selectedFile){
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
              cameraStream.style.display = 'block';
              cameraStream.srcObject = stream;
            })
            .catch((error) => {
              console.error('Error accessing the camera:', error);
            });
        } else {
          console.error('getUserMedia is not supported in this browser');
        }
      }  

    return (
        <div className="offset-3 col-6 photocontainer p-0" onMouseEnter={(e)=>e.target.style.outline="none"}>
            <div className="col-12 bg-light" >
                <div 
                    className="text-start p-3 d-flex justify-content-between fs-4 align-items-center fw-lighter" 
                    htmlFor="fileName" 
                    onClick={() => document.getElementById('fileName').click()} 
                    onMouseEnter={(e)=>e.target.style.outline="1px dashed grey"} 
                    onMouseLeave={(e)=>e.target.style.outline="none"}>
                        Choose File
                    <div >
                        <span 
                            className="material-symbols-outlined m-2 bg-secondary-subtle p-2 rounded-circle outline-none" 
                            onMouseEnter={(e)=>e.target.style.cursor="pointer"}
                        >
                            upload
                        </span>
                        <span 
                            className="material-symbols-outlined m-2 bg-secondary-subtle p-2 rounded-circle outline-none" 
                            onMouseEnter={(e)=>e.target.style.cursor="pointer"} 
                            onClick={openCamera}
                        >
                            photo_camera 
                        </span>
                    </div>
                    <input 
                        type="file" name="" id="fileName" 
                        style={{ display: 'none' }} onChange={handleFileChange} 
                        accept=".jpg, .jpeg, .png"
                    />
                </div>
                {selectedFile && (
                    <div className="preview-container text-start p-0 m-0 fw-lighter">
                        <span className='mx-2 mt-0 outline-none'>File Name: {selectedFile.name}</span>
                        <span className='mx-2 outline-none'>File Size: {(selectedFile.size/(1024)).toFixed(2)} KB</span> ✅ <span onMouseEnter={(e)=>e.target.style.cursor="pointer"} onClick={handleDelete}>❌</span>
                    </div>
                )}
            </div>
            <p className='my-0 text-start fw-lighter ' style={{fontSize: "15px"}}><i>Passport Size Photo in JPG format - JPG/PNG format less than 5 MB</i></p> 
        </div>  
    );
};

export default ImageInputs;






import React, { useState} from 'react'

function ImageUpload() {

    function convertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    }
    return (
        <div className="auth-wrapper" >
            <div className="auth-inner" styles={{width: "auto"}}>
                Let's Upload page
                <input
                accept="image/*"
                type="file"
                onChange={convertToBase64}
                />
            </div>
        </div>
    )
}

export default ImageUpload;
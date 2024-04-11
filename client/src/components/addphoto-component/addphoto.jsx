import addPhotoStyle from './addphoto.module.css';
import React, { useState } from 'react';

const AddPhoto = ({children, className}) => {

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
      <div>
          <input
                id="file-input"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }} // Hide the file input
          />
          {!file && (<label htmlFor="file-input" className={addPhotoStyle.button}>
            Add Photo
          </label>
          )}
          {file && <img src={file} className={addPhotoStyle.photo} />}
              <img src={file} />
      </div>
  );
}

  export default AddPhoto;
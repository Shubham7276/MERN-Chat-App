import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { ToastContainer, toast } from 'react-toastify';

const Emailtemp = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState(undefined)

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
      const reader = new FileReader();
      reader.readAsDataURL(setSelectedFile);
      
  }

  return (
      <div>
          <input type='file' onChange={onSelectFile} />
          {console.log(selectedFile)}
          
          {selectedFile &&  <img src={preview} /> }
          <button onClick={()=>{toast.success("kkkk")}}>Pop that toast!</button>
          <ToastContainer/>
      </div>
  )
}

export default Emailtemp
import React, { useEffect, useState } from 'react'
import { TbCameraUp } from "react-icons/tb";
import axios from 'axios';

const ProjectImg08 = () => {
    const [file,setFile] = useState()
    const [image ,setImage] = useState()
    const userId = '65e9c1567e4390d1f3fb924b';

     const handleUpload = () =>{
     const formData = new FormData();
     formData.append('file',file);

     axios.put(`http://localhost:5000/api/update/${userId}`,formData)
     .then(res =>console.log(res))
     
     .catch(err =>console.log(err))
    }

  
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])

 

  return (
    <>
    <div className='relative'><img className='absolute top-[1500px] left-[375px] w-[300px] transition duration-200 hover:scale-105' src={`http://localhost:5000/`+image} alt="kk" />
    <div className='absolute top-[1900px] left-[525px] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer'>
    <label className='button pr-3'>
    <TbCameraUp />
        <input hidden type='file' onChange={e =>setFile(e.target.files[0])} />
    </label>
      <button onClick={handleUpload}>Edit Photo</button>
    
    </div>
    </div>
    </>
  )
}

export default ProjectImg08
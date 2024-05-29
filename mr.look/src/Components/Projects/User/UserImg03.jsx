import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserImg03 = () => {
    const [image ,setImage] = useState()
    const userId = '65e980a0e75b80533f98adb4';

  
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])
    
 

  return (
    <>
    <div className='relative'><img className='absolute top-0 left-[50px] w-[750px] transition duration-200 hover:scale-105 z-0' src={`http://localhost:5000/`+image} alt="kk" />
    
    </div>
    </>
  )
}

export default UserImg03;



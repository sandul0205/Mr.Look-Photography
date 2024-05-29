import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserImgMiddle = () => {

    const [image ,setImage] = useState()
    const userId = '65e9886f6b5476f6fcaa172e';

    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])
    
 

  return (
    <>
    <div className='relative'><img className='absolute top-[300px] left-[650px] w-[350px] transition duration-200 hover:scale-105 z-10' src={`http://localhost:5000/`+image} alt="kk" />
   
    </div>
    </>
  )
}

export default UserImgMiddle;



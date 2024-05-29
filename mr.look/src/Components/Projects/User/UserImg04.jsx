import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserImg04 = () => {
    const [image ,setImage] = useState()
    const userId = '65e9915e0a4093155ece3f67';

   
    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])

 

  return (
    <>
    <div className='relative'><img className='absolute right-[50px] top-[50px] w-[450px] transition duration-200 hover:scale-105' src={`http://localhost:5000/`+image} alt="kk" />
    
    </div>
    </>
  )
}

export default UserImg04
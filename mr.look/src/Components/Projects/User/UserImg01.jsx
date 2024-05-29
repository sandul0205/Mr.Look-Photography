import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserImg01 = () => {
    const [image ,setImage] = useState()
    const userId = '65e61342f5af9efa58016daa';

  
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])
    
 

  return (
    <>
    <div className='relative'><img className='w-[900px] transition duration-200 hover:scale-105' src={`http://localhost:5000/`+image} alt="kk" />
    
    </div>
    </>
  )
}

export default UserImg01

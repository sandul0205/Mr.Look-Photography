import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserImg11 = () => {
    const [image ,setImage] = useState()
    const userId = '65e9c3a17e4390d1f3fb924d';

    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])

 

  return (
    <>
    <div className='relative'><img className='absolute top-[2500px] right-[50px] w-[600px] transition duration-200 hover:scale-105' src={`http://localhost:5000/`+image} alt="kk" />
   
    </div>
    </>
  )
}

export default UserImg11
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserImg07 = () => {
    const [image ,setImage] = useState()
    const userId = '65e9c06f7e4390d1f3fb924a';

  
    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])

 

  return (
    <>
    <div className='relative'><img className='absolute top-[1450px] left-[50px] w-[300px] transition duration-200 hover:scale-105' src={`http://localhost:5000/`+image} alt="kk" />
   
    </div>
    </>
  )
}

export default UserImg07
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserImg09 = () => {
    const [image ,setImage] = useState()
    const userId = '65e9bd5b7e4390d1f3fb9249';

    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/view/${userId}`)
        .then(result => setImage(result.data.image))
        
        .catch(err => console.log(err))
    }, [])

 

  return (
    <>
    <div className='relative'><img className='absolute top-[1550px] right-[50px] w-[600px] transition duration-200 hover:scale-105' src={`http://localhost:5000/`+image} alt="kk" />
   
    </div>
    </>
  )
}

export default UserImg09
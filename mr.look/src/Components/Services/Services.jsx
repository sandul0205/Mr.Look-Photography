import React from 'react'
import img1 from '../Services/Images/Img1.jpg'
import img2 from '../Services/Images/Img2.jpg'
import img3 from '../Services/Images/Img3.jpg'
import img4 from '../Services/Images/Img4.jpg'
import NavBar from '../NavBar/NavBar'

export default function Services() {
  return (
    <div>
        <NavBar/>
    <div class="bg-white h-screen h-full py-6 sm:py-8 lg:py-12 ">
    <div class="mt-[100px] mx-auto max-w-screen-2xl px-4 md:px-8">
       

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
  
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={img1} loading="lazy" alt="kk" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Wedding Photography</span>
            </div>
       
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={img2} loading="lazy" alt="kk" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Album Designing</span>
            </div>
    
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={img4} loading="lazy" alt="kk" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Birthday Shoot</span>
            </div>
    
            <div
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={img3} loading="lazy" alt="kk" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Model</span>
            </div>
          
        </div>
    </div>
</div>
</div>
  )
}

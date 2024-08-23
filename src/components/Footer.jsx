import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        {/* flex flex-row    */}
        <div className='flex flex-row sm:grid sm:grid-cols-[3fr_1fr_1fr] justify-between gap-14 my-10 mt-32 text-sm '>
            <div className=''>
            <img src={assets.logo} className='mb-5 w-36' alt='' />
            <p className=' md:w-2/3 text-gray-600'>
                Lorem se Your Housedflkdfsdl dfsdkfjsdl dsfjsdfsdf Rent
                Allowance(HRA) If you are a salar employee dfksdfodsjfosdf dfjsd
                dfodjsd doifjdsofsd dsifjsdok dsfkdslfsd fdofjsdo djnsd diofjsd
                difjsds iwedid sdsdf9sdhi
            </p>
            </div>
            <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600 '>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>

            <div>
            <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
            <ul>
                <li>+91-708-083-5190</li>
                <li>contact@foreveryou</li>
            </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center '>
            {' '}
            Copyright 2024@ modassriimran.com - All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer

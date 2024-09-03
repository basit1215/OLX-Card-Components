import React from 'react'
import Button from './Button'

const Card = ({ url, price, description, address, time, alt }) => {
    return (
        <>
            <div className='card   w-[400px] bg-white border rounded-2xl  border-black border-[2px] mb-[35px]	 '>
                <div className='img-div'>
                    <img src={url} alt={alt} className='imgs w-[400px] h-[300px] rounded-t-2xl  border-black border-b-[1px]' />
                </div>
                <div className='all-details mx-[25px] my-[20px]  	 ' >
                    <div>
                        <p className='price text-[18px]  my-[15px]  '> <b>PRICE:</b> {price}PKR</p>
                    </div>
                    <div >
                        <p className='description text-[18px] mb-[6px]   leading-5	'><b>ABOUT:</b> {description}</p>
                    </div>
                    <div>
                        <p className='address text-[18px] mb-[5px]  '><b>LOCATION:</b> {address}</p>
                    </div>
                    <div>
                        <p className='time text-[14px] mb-[6px]  '>{time} </p>
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
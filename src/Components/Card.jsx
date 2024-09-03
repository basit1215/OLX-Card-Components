import React from 'react'
import Button from './Button'

const Card = ({ url, price, description, address, time, alt }) => {
    return (
        <>
            <div className='card   w-[400px]  bg-sky-400 border rounded-2xl  border-black border-[2px] mb-[35px]	 '  >
                <div className='img-div'>
                    <img src={url} alt={alt}   className='imgs w-[400px] h-[300px] rounded-t-2xl  border-black border-b-[1px]' />
                </div>
                <div className='all-details mx-[25px] my-[20px]  leading-8	 ' >
                    <div>
                        <p className='price text-[18px]  mb-[6px]   leading-6  '> <b> PRICE: <span  className='text-pink-700'>{price}PKR</span></b></p>
                    </div>
                    <div >
                        <p className='description text-[18px] mb-[6px]   leading-6	'><b>ABOUT:<span  className='text-pink-700'> {description}</span></b></p>
                    </div>
                    <div>
                        <p className='address text-[18px] mb-[5px]  leading-6'><b>LOCATION: <span  className='text-pink-700'>{address}</span></b></p>
                    </div>
                    <div>
                        <p className='time text-[14px] mb-[6px]  '>{time} </p>
                    </div>
                    <div>
                        <Button name="Add to Card" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
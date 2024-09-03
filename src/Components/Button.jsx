import React from 'react'

const Button = ({name}) => {
    return (
        <div className=''>
            <button className=' nav-btns border rounded-xl w-[120px] border-black border-[2px] h-10  bg-gradient-to-r from-purple-600 to-pink-600 '>{name}</button>
        </div>
    )
}

export default Button
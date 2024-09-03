import React from 'react';
import Button from './Button';

const NavBar = () => {
    return (
        <nav className='navbar flex h-[80px] justify-between px-4 md:px-8 items-center bg-sky-400'>
            <div>
                <p className='text-black font-serif text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-bold'>OLX</p>
            </div>
            <div className='flex gap-2 sm:gap-4 md:gap-8 items-center text-white'>
                <Button className="nav-btns text-[12px] px-2 py-1 sm:text-[14px] sm:px-3 sm:py-2 md:text-[16px] md:px-4 md:py-2" name="Log in" />
                <Button className="nav-btns text-[12px] px-2 py-1 sm:text-[14px] sm:px-3 sm:py-2 md:text-[16px] md:px-4 md:py-2" name="Sign Up" />
            </div>
        </nav>
    );
}

export default NavBar;




// import React from 'react'
// import Button from './Button'

// const NavBar = () => {
//     return (
//         <nav className=' navbar flex  h-[80px] justify-between px-[40px] items-center   bg-sky-400'>
//             <div>
//                 <p className='text-black font-serif text-[40px] font-bold'>OLX</p>
//             </div>
//             <div className='gap-12 flex text-white text-[20px]'>
//                 <Button className="nav-btns" name="Log in" />
//                 <Button  className="nav-btns" name="Sign Up" />
//             </div>
//         </nav>
//     )
// }

// export default NavBar

 

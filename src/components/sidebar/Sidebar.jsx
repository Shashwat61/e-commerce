import React from 'react'
// import {BsDot} from 'react-icons/bs'

function Sidebar() {
    return (
        <div className="w-48 pt-10 ">
            <h2 className="text-4xl font-bold ">Simple.</h2>
            <ul className="pt-12 ">
                <li className="py-3 border-t border-b cursor-pointer ">Home</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Accessories</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Denim</li>
                <li  className="py-3 border-t border-b cursor-pointer ">FootWear</li> 
                <li  className="py-3 border-t border-b cursor-pointer ">Jeans</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Outwear</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Pants</li>
                <li  className="py-3 border-t border-b cursor-pointer ">Shirts</li>
                <li  className="py-3 border-t border-b cursor-pointer ">T-shirts</li>
            </ul>
        </div>
    )
}

export default Sidebar

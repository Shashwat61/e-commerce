import React from 'react'
import Header from '../header/Header'
import {IoBagCheckOutline} from 'react-icons/all'
import { useHistory } from 'react-router-dom'
function Success() {
    const history=useHistory()
    return (
        <div className="h-screen mx-4 text-xs sm:text-sm md:text-base">
            <Header/>
            <div className="grid h-full p-8 place-content-center place-items-center">
                <div className="flex items-center">
                    <IoBagCheckOutline size={32}/>
                    <h2 className="pl-2 text-base font-medium sm:text-lg md:text-2xl">Thank You, your order has been confirmed!</h2>
                </div>
                <p className="py-4 font-medium md:w-3/5">Thank you for shopping with us.We&apos;ll send a confirmation once your order has been shipped. If you would like to buy more items please press the link below</p>

                <div className="grid place-items-center sm:block md:mt-4 ">
                {/* <button className="p-2 my-4 text-gray-100 bg-black rounded focus:outline-none sm:mr-4">Go to Order's Page</button> */}
                <button onClick={()=>history.push('/')} className="p-2 text-gray-100 bg-black rounded focus:outline-none ">Go to Home Page</button>
                </div>
            </div>
            
            
        </div>
    )
}

export default Success

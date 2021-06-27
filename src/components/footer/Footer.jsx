import React from 'react'
import {FaCcVisa,FaCcMastercard,FaCcPaypal,FaCcDiscover} from 'react-icons/fa'
import {SiAmericanexpress} from 'react-icons/si'
function Footer() {
    return (
        <div className="mx-4 ">
        <div className="grid py-8 border-t border-gray-300 md:grid-cols-2 lg:place-content-center ">
            <div className="col-span-1">
               <h2 className="pb-4 text-lg font-medium">Link</h2>
               <ul className="space-y-1">
                   <li>Search</li>
                   <li>Our Story</li>
                   <li>News</li>
                   <li>Contact Us</li>
               </ul> 
            </div>
            <div className="col-span-1 pt-8 lg:p-0">
                <h2 className="pb-4 text-lg font-medium">Get to Know</h2>
                <div>

                <p>Promotions new products and sales.Direclty to your inbox</p>
                <form className="flex w-full">
                    <input className="w-full p-2 bg-gray-100 border border-gray-400 rounded rounded-r-none" type="text"  placeholder="Your Email"/>
                    <button className="p-2 font-medium text-gray-200 bg-gray-900 rounded rounded-l-none">Subscribe</button>
                </form>
                </div>
            </div>
        </div>
            <div className="grid pt-8 border-t place-content-center">
               <p>Copyright © 2021, Simple. Made with ♥</p>
            <div className="flex items-center justify-around py-4">
               <FaCcVisa size={26}/><FaCcMastercard size={26}/><SiAmericanexpress size={26}/>
               <FaCcDiscover size={26}/><FaCcPaypal size={26}/> 
            </div>
            </div>
        </div>
    )
}

export default Footer

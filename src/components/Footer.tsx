import React from 'react'
import { FaFacebookF , FaTwitter , FaLinkedin , FaYoutube, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-[#f4f4f4] mt-10'>
        <div className='max-w-[1550px] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-4'>
            {/* --------------- Doc-1 [start] ---------------- */}
                <div className='flex items-center'>
                    <img src={require('../assets/images/doc1.png')} alt="" />
                    <div>
                        <h3 className='font-bold'>FAST SHIPPING ACROSS PAKISTAN</h3>
                        <p>Flat PKR 150/- Delivery Charges</p>

                    </div>
                </div>
            {/* --------------- Doc-1 [end] ---------------- */}
            {/* --------------- Doc-2 [start] ---------------- */}
                <div className='flex items-center'>
                    <img src={require('../assets/images/doc2.png')} alt="" />
                    <div>
                        <h3 className='font-bold'>TRACK YOUR ORDER</h3>
                        <p>Track your order for quick updates</p>

                    </div>
                </div>
            {/* --------------- Doc-2 [end] ---------------- */}
            {/* --------------- Doc-3 [start] ---------------- */}
                <div className='flex items-center'>
                    <img src={require('../assets/images/doc3.png')} alt="" />
                    <div>
                        <h3 className='font-bold'>CUSTOMER SUPPORT</h3>
                        <p>Live Chat Support & Call</p>

                    </div>
                </div>
            {/* --------------- Doc-3 [end] ---------------- */}
            {/* --------------- Doc-4 [start] ---------------- */}
                <div className='flex items-center'>
                    <img src={require('../assets/images/doc4.png')} alt="" />
                    <div>
                        <h3 className='font-bold'>RETURN & EXCHANGES</h3>
                        <p>14 Days Easy Return</p>

                    </div>
                </div>
            {/* --------------- Doc-4 [end] ---------------- */}
            </div>

        </div>
        <div className='max-w-[1550px] mx-auto bg-[#e8e8e8] flex flex-col justify-center items-center p-10'>
            <h2 className='text-[26px]'>NEWSLETTER SIGN UP</h2>
            <p className='text-[19px]'>Sign up for our newsletter to receive updates on special offers, news and events.</p>
            <form className='flex justify-center w-full my-5 gap-6' action="">
                <input className='p-4 bg-white w-[500px] focus:outline-none' type="email" placeholder='Email Address'/>
                <button className='bg-[#10658B] text-white p-4 hover:bg-[orange] duration-150'>Subscribe Now</button>
            </form>
            <div className='flex gap-2'>
            <a className='bg-[#f7f7f7] hover:bg-[#44b8f6] p-3' href=""><FaFacebookF className='text-[#10658B]'/></a>
            <a className='bg-[#f7f7f7] hover:bg-[#44b8f6] p-3' href=""><FaTwitter className='text-[#10658B]'/></a>
            <a className='bg-[#f7f7f7] hover:bg-[#44b8f6] p-3' href=""><FaLinkedin className='text-[#10658B]'/></a>
            <a className='bg-[#f7f7f7] hover:bg-[#44b8f6] p-3' href=""><FaYoutube className='text-[#10658B]'/></a>
            </div>
        </div>
        <div className='max-w-[1550px] mx-auto py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-4 text-[#323232]'>
            <div>
            <h4 className='mb-10 text-[19px]'>GET IN TOUCH</h4> 
            <p>HEAD OFFICE</p>  
            <p>2nd Floor, Plot 19-A, Sector 16, Main Korangi Road, Korangi Industrial Area, Karachi, 74900</p>
            <a className='flex items-center gap-2 text-[16px]' href="#"><FaPhoneAlt/> UAN: 021-11-11-CHASE</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#"><FaWhatsapp className='text-[green]'/> +92-334-2340070</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#"><FaEnvelope/> customercare@chasevalue.pk</a> 
            </div>     
            <div>
            <h4 className='mb-10 text-[19px]'>OUR COMPANY</h4> 
            
            <a className='flex items-center gap-2 text-[16px]' href="#">About us</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Blog</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Our Store Locations</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Careers</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">FAQS</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Covid-19</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Refund Policy</a> 
            </div>     
            <div>
            <h4 className='mb-10 text-[19px]'>HELP</h4> 
           
            <a className='flex items-center gap-2 text-[16px]' href="#">Shipping Policy</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Refund & Exchange Policy</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Order Cancelation Policy</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Privacy Policy</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Terms & Conditions</a> 
            </div>     
           
            <div>
            <h4 className='mb-10 text-[19px]'>CUSTOMER SUPPORT</h4> 
           
            <a className='flex items-center gap-2 text-[16px]' href="#">How to pay Online (Guidelines)</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Bulk Order Form</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Sell at Chase Value</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Track Order</a> 
            <a className='flex items-center gap-2 text-[16px]' href="#">Account Login</a> 
            </div>     
        </div>    
        <div className='flex justify-center items-center gap-5 my-5'>
                <img src={require('../assets/images/logo1.png')} alt="" />
                <img src={require('../assets/images/logo2.png')} alt="" />
                <img src={require('../assets/images/logo3.png')} alt="" />
                <img src={require('../assets/images/logo4.jpg')} alt="" />
                <img src={require('../assets/images/logo5.png')} alt="" />
            </div>
        </div>    
        <div className='bg-[#0a0a0a] p-4 text-center text-white'>
            <div className='max-w-[1550px] mx-auto flex justify-between items-center py-7'>
            <a className='text-white text-[15px]' href="#">© 2024 - Embrance. Design & Developed by Hasnain mawia</a>
            <div className='space-x-10'>
            <a className='text-white text-[15px]' href="#">Terms of use</a>
            <a className='text-white text-[15px]' href="#">Privacy Policy</a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

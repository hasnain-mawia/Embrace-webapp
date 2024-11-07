import { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import Accordion from '../components/Accordion'
import { FaArrowRightLong } from "react-icons/fa6";
import CountUp from 'react-countup';
import { Slider2 } from '../components/Slider2';
import Testimonial from '../components/testimonial';
import { NavHashLink  } from 'react-router-hash-link';


import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  const [Email, setEmail] = useState<any>('');
  const [Email2, setEmail2] = useState<any>('');
  const [errors , setErrors] = useState<any>({});

  console.log(Email)

  const Talkto1 = (e:any) =>{
    e.preventDefault()
    const validationErrors:any = {};
    if(!Email.trim()){
      validationErrors.Email = "Subscription Email Must Required"
      }else if(!Email.match(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/)){
      validationErrors.Email = "Email Is Not Valid"
      }
      setErrors(validationErrors);
      if(Object.keys(validationErrors).length === 0){
        alert('Email Send Successfully');

        setEmail('')
      }
}

const Talkto2 = (e:any) =>{
  e.preventDefault()
  const validationErrors:any = {};
  if(!Email2.trim()){
    validationErrors.Email2 = "Subscription Email Must Required"
    }else if(!Email2.match(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/)){
    validationErrors.Email2 = "Email Is Not Valid"
    }
    setErrors(validationErrors);
    if(Object.keys(validationErrors).length === 0){
      alert('Email Send Successfully');
      setEmail2('')
    }}

  return (
    <>
    {/* --------------------- Header [Start] ------------------------- */}
    <header className='border-b-[1px] border-[#e0e0e0] sticky top-0  sm:bg-white py-3 shadow-lg z-20'>
      <div className='max-w-[1550px] mx-auto'>
        <div className='block sm:flex item-center justify-between'>
          <div><a href="/"><img className='w-[180px]' src={require('../assets/images/logo.png')} alt="" /></a></div>
          <div className='flex items-center'>
            <ul className='block sm:flex items-center gap-2'>
              <li className='p-2 rounded-md hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'><NavHashLink smooth to="#howitsworks">How Its Works</NavHashLink></li>
              <li className='p-2 rounded-md hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'><NavHashLink smooth  to="#ourworks">Our Works</NavHashLink></li>
              <li className='p-2 rounded-md hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white cursor-not-allowed'>Pricing</li>
              <li className='p-2 rounded-md hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'><NavHashLink  smooth  to="#about-us">About us</NavHashLink></li>
            </ul>
          </div>
          <div>
            <button className='bg-[#3461FF] px-[24px] py-[16px] rounded-full text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100'>Book A Call</button>
          </div>
        </div>
      </div>
    </header>

    {/* --------------------- Header [End] ------------------------- */}
      <div className='max-w-[1550px] mx-auto my-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:h-[80vh]'>
          <div className='h-full flex flex-col item-center justify-center space-y-5'>
            <h2 className='text-[70px] leading-[70px] font-bold'>We Take<br /> Care of<br />
              Your Brand</h2>
            <p className='text-gray'>We care about our work and we care about our clients.</p>
            <form onSubmit={Talkto1} className='flex gap-2 mt-2' action="">
              <input value={Email} onChange={(e:any)=> setEmail(e.target.value)} placeholder='Enter Your Email' className='p-3 border-[2px] border-gray rounded-md px-3 outline-none w-[330px] bg-[#fafafa]' type="text" />
              <button className='bg-[#3461FF] hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 text-white rounded-md p-3'>Lets Talk</button>
            </form>
            {errors.Email && <p className='text-[14px] text-[red] px-4 '>{errors.Email}</p>}
          </div>
          <div className='flex flex-col justify-end items-center h-full'>
            <div className='flex'>
            <img data-aos="flip-right" data-aos-mirror="true" className='w-full' src={require('../assets/images/sl1.png')} alt="" />
            <div className='relative w-full'>
            <img data-aos="flip-left" data-aos-offset="300" data-aos-mirror="true" className='w-full' src={require('../assets/images/sl2.png')} alt="" />
            <img data-aos="flip-left" data-aos-mirror="true" className='w-[120px] absolute top-[-20px] left-[-90px]' src={require('../assets/images/sl3.png')} alt="" />
            </div>
            </div>
            
            <div className='flex'>
            <img data-aos="flip-left" data-aos-mirror="true" className='w-full' src={require('../assets/images/sl4.png')} alt="" />
            <img data-aos="flip-left" data-aos-mirror="true" className='w-full' src={require('../assets/images/sl5.png')} alt="" />
            </div>
            
            <div className='flex'>
            <div className='relative w-full'>
            <img data-aos="flip-left" data-aos-mirror="true" className='w-full h-full' src={require('../assets/images/sl6.png')} alt="" />
            <img data-aos="flip-left" data-aos-mirror="true" className='w-[120px] absolute top-[-30px] right-[-70px] z-10' src={require('../assets/images/sl9.png')} alt="" />
            </div>
            <img data-aos="flip-left" data-aos-mirror="true" className=' h-full' src={require('../assets/images/sl7.png')} alt="" />
            <img data-aos="flip-left" data-aos-mirror="true" className=' h-full' src={require('../assets/images/sl8.png')} alt="" />
            </div>

          </div>
        </div>
        </div>
          {/* --------------------- Companinese with Work [Start] -------------------------- */}

        <div className='bg-[#eeeeee] pb-[100px]'>
        <h2 className=' text-center text-[30px] py-10'>Companies We Work with</h2>
        <div className='max-w-[1550px] mx-auto'>
            <div className='pb-5'><Slider/></div>
            <div className='pt-5'><Slider2/></div>
          </div>
          </div>
          {/* --------------------- Companinese with Work [End] -------------------------- */}

          {/* --------------------- Commitments [Start] -------------------------- */}
          <div className='bg-[#fafafa] py-[100px]'>
        <div className='max-w-[1550px] mx-auto space-y-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <h3 className='text-[60px] font-bold'><CountUp enableScrollSpy={true} start={0} end={245} delay={2}
              />%</h3>
              <p>More revenues for the brand</p>
              </div>
            <div>
              <h3 className='text-[60px] font-bold'><CountUp enableScrollSpy={true} start={0} end={130} delay={2}/>K +</h3>
              <p>Audiences Reached</p>
              </div>
            </div>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <h3 className='text-[60px] font-bold'><CountUp enableScrollSpy={true} start={0} end={50} delay={2}/> +</h3>
              <p>Brands trust us</p>
              </div>
            <div>
              <h3 className='text-[60px] font-bold'><CountUp enableScrollSpy={true} start={0} end={24} delay={2}/> +</h3>
              <p>Worldwide Awards</p>
              </div>
            </div>
            </div>
            <div className='space-y-5'>
              <h3 className='text-[40px] font-semibold'>Commitments</h3>
              <p className='w-[550px]'>We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.</p>
              <button className=' flex item-center gap-2 hover:bg-[#3461FF] hover:text-white text-[#3461FF] p-2 rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100'>Learn More <FaArrowRightLong className='my-auto' /></button>
            </div>
           
            
            </div>
          </div>
          </div>
          {/* --------------------- Commitments [End] -------------------------- */}

          {/* --------------------- How Its Works [Start] -------------------------- */}
          <div id='howitsworks' className='bg-[#fafafa] py-[100px]'>
        <div className='max-w-[1550px] mx-auto space-y-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div data-aos="zoom-in-left" data-aos-mirror="true" className='space-y-5'>
              <h3 className='text-[40px] font-semibold'>How its Works</h3>
              <p className='w-[550px]'>We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
             <img src={require('../assets/images/Rectangle 160.png')} alt="" />
            </div>
            <div>
          <div className='space-y-10'>
            <div data-aos="zoom-in-right" data-aos-mirror="true" className='flex items-center gap-10'>
              <img src={require('../assets/images/majesticons_dollar-circle.png')} alt="" />
              <div className='w-[400px]'>
              <h3 className='text-[30px]'>Discovery</h3>
              <p>We meet with you to learn about your business, your goals, and your target audience.</p>
              </div>
              </div>
            <div data-aos="zoom-in-right" data-aos-mirror="true" className='flex items-center gap-10'>
              <img src={require('../assets/images/majesticons_dollar-circle1.png')} alt="" />
              <div className='w-[400px]'>
              <h3 className='text-[30px]'>Statergy</h3>
              <p>We meet with you to learn about your business, your goals, and your target audience.</p>
              </div>
              </div>
            <div data-aos="zoom-in-right" data-aos-mirror="true" className='flex items-center gap-10'>
              <img src={require('../assets/images/majesticons_dollar-circle3.png')} alt="" />
              <div className='w-[400px]'>
              <h3 className='text-[30px]'>Execution</h3>
              <p>We meet with you to learn about your business, your goals, and your target audience.</p>
              </div>
              </div>
            <div data-aos="zoom-in-right" data-aos-mirror="true" className='flex items-center gap-10'>
              <img src={require('../assets/images/majesticons_dollar-circle4.png')} alt="" />
              <div className='w-[400px]'>
              <h3 className='text-[30px]'>Measurement</h3>
              <p>We meet with you to learn about your business, your goals, and your target audience.</p>
              </div>
              </div>
            </div>
            </div>
            </div>
          {/* --------------------- How its Works [End] -------------------------- */}

          <div id='ourworks' className='space-y-5 flex flex-col justify-center items-center pt-[100px]'>
              <h3 className='text-[40px] font-semibold text-center'>Our Works</h3>
              <p className='text-center'>A glimpse of our portfolio</p>
              <div className='flex gap-5 w-full'>
             <div >
              <span className=' hover:bg-black w-[600px] hover:opacity-80 duration-100 z-10 rounded-[50px]'>
              <img data-aos="zoom-in-left" data-aos-mirror="true" className='w-[600px] z-0' src={require('../assets/images/Rectangle 161.png')} alt="" />
              </span>
              <p className='text-center text-[30px] mt-2'>Apple</p>
              </div>
              <div>
              <span className=' hover:bg-black w-[600px] hover:opacity-80 duration-100 z-10 rounded-[50px]'>
             <img data-aos="zoom-in-up" data-aos-mirror="true" className='w-[600px]' src={require('../assets/images/Rectangle 2.png')} alt="" />
              </span>
              <p className='text-center text-[30px] mt-2'>Coca-Cola</p>
              </div>
              <div>
              <span className=' hover:bg-black w-[600px] hover:opacity-80 duration-100 z-10 rounded-[50px]'>
             <img data-aos="zoom-in-left" data-aos-mirror="true" className='w-[600px]' src={require('../assets/images/Rectangle 3.png')} alt="" />
              </span>
              <p className='text-center text-[30px] mt-2'>Nike</p>
              </div>
              </div>
              <button className='bg-[#3461FF] px-10 py-5 rounded-full text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100'>See More</button>
          </div>
          </div>
          </div>

       {/* ------------------------- CTA Banner [Start] ------------------ */}
      <div data-aos="flip-up" data-aos-mirror="true" className='max-w-[1550px] mx-auto space-y-10 '>
      <div className="cta-banner grid grid-cols-1 sm:grid-cols-2 items-center p-[100px]">
        <div><h2 className='text-white text-[60px]'>Elevate Your <br/> Brand Today!</h2></div>
        <div className='space-y-5'>
          <p className='text-white text-[18px]'>Ready to transform your digital dresence? Let's create magic together! book our services now!</p>
          <button className='bg-[#ffffff] px-10 py-3 rounded-full text-[20px] text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'>Book Call</button>
        </div>
      </div>
      </div>
       {/* ------------------------- CTA Banner [End] ------------------ */}
      <div className='max-w-[1550px] mx-auto space-y-10 my-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 my-[150px]'>
          <div className='space-y-5'>
            <div className='flex gap-2'>
              <img data-aos="zoom-in-right" data-aos-mirror="true" src={require('../assets/images/team1.png')} alt=""/>
              <img data-aos="zoom-in-right" data-aos-mirror="true" src={require('../assets/images/team2.png')} alt=""/>
              <img data-aos="zoom-in-right" data-aos-mirror="true" src={require('../assets/images/team3.png')} alt=""/>
            </div>
            <div className='flex gap-2'>
              <img data-aos="zoom-in-right" data-aos-mirror="true" src={require('../assets/images/team4.png')} alt=""/>
              <img data-aos="zoom-in-right" data-aos-mirror="true" src={require('../assets/images/team5.png')} alt=""/>
              <img data-aos="zoom-in-right" data-aos-mirror="true" src={require('../assets/images/team6.png')} alt=""/>
            </div>
          </div>
          <div className='flex flex-col items-baseline justify-between'>
          <div className='space-y-5'><h2 className='text-[60px]'>Meet Our Team</h2>
            <p className='text-[#535252]'>Discover the brilliance behind  Embrace. Our team blends<br/> innovation and artistry to craft digital wonders that captivate</p></div>
            <button className='bg-[#3461FF] px-10 py-3 rounded-full text-[20px] text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white' id='about-us'>Learn More</button>
          </div>
        </div>
        
        <div className='py-10'>
        <h2 className='text-[60px]'>What Our Client Said about us</h2>
        <div className='pt-5'><Testimonial/></div>
        </div>
         
        {/* ------------------------- CTA Banner 2 [Start] ------------------ */}
      <div data-aos="flip-up" data-aos-mirror="true" className='max-w-[1550px] mx-auto '>
      <div className="cta-banner2 grid grid-cols-1 sm:grid-cols-2 items-center p-[70px]">
        <div className='space-y-5'>
          <h3 className='text-white text-[60px] leading-[70px]'>Start Your Journey <br/> With Us Now</h3>
          <button className='bg-[#3461FF] px-10 py-3 rounded-full text-[20px] text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 hover:text-white'>Start Now</button>
        </div>
        <div className='flex justify-end'><img data-aos="zoom-in-right" data-aos-mirror="true" src={require('../assets/images/arrow.png')} alt=""/></div>
      </div>
      </div>
       {/* ------------------------- CTA Banner 2 [End] ------------------ */}
        
        
        {/* ------------------------- CTA Banner 2 [Start] ------------------ */}
      <div className='max-w-[1550px] mx-auto '>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center py-[50px]">
        <div>
        <Accordion title='How do i sign up for the project?' description='We recommend that you copy them into your own app and modify them to suit your needs, particularly if you re using your own'/>
        <Accordion title='What thing that i should prepare before starting?' description='We recommend that you copy them into your own app and modify them to suit your needs, particularly if you re using your own '/>
        <Accordion title='Does my company need help for marketing advices?' description='We recommend that you copy them into your own app and modify them to suit your needs, particularly if you re using your own'/>

        </div>
        <div className='flex justify-end'>
        <div className='space-y-5'>
          <h3 className='text-[40px] leading-[70px]'>How we can help you?</h3>
          <p className='text-[gray]'>Follow our newsletter. We will regulary update <br/> our latest project and availability.</p>
          <form onSubmit={Talkto2} className='flex gap-2 mt-2' action="">
              <input value={Email2} onChange={(e:any)=> setEmail2(e.target.value)} placeholder='Enter Your Email' className='p-3 border-[2px] border-gray rounded-md px-3 outline-none w-[330px] bg-[#fafafa]' type="text" />
              <button className='bg-[#3461FF] hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100 text-white rounded-md p-3'>Lets Talk</button>
            </form>
            {errors.Email2 && <p className='text-[14px] text-[red] px-4 '>{errors.Email2}</p>}
            <button className=' flex item-center gap-2 hover:bg-[#3461FF] hover:text-white text-[#3461FF] p-2 rounded-lg hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-100'>More FAQ <FaArrowRightLong className='my-auto' /></button>
        </div>
        </div>
      </div>
      </div>
       {/* ------------------------- CTA Banner 2 [End] ------------------ */}
      </div>
    </>
  )
}

export default Home

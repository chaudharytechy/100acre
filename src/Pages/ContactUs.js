import React from 'react';
import Nav from '../aadharhomes/Nav';
import Footer from '../Components/Actual_Components/Footer';

const ContactUs = () => {
  return (
    <>
      <Nav />
      <div
        className="relative w-full "
        style={{
          backgroundImage:
            'url("https://burst.shopifycdn.com/photos/contact-us-image.jpg?width=1000&format=pjpg&exif=0&iptc=0")',
          objectFit: 'cover',
          backgroundSize: 'cover',
          height: '70vh',
        }}
      ></div>
      <div className='xl:py-10 xl:px-10 lg:py-10 lg:px-10'>
        <div className=''><p className='text-4xl font-bold text-center mb-2 '>Get In Touch </p></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-xl">
          <div className='md:w-90 h-auto md:h-96 bg-orange-100 py-10 px-2'>
            <div className='flex flex-col mx-3 mb-2 text-black '>
              <label htmlFor="name" className='text-lg font-bold py-1'>Name</label>
              <input type="name" id="name" placeholder="Enter your Name" required="" className='border-b-2 py-1 border-black text-md bg-orange-100 focus:outline-none' />
            </div>

            <div className='flex flex-col mx-3 mb-2'>
              <label htmlFor="email" className='text-lg font-bold py-1'>Email</label>
              <input type="email" id="email" placeholder='Enter your Email' required="" className="border-b-2 py-1 border-black bg-orange-100 text-md focus:outline-none" />
            </div>

            <div className='flex flex-col mx-3 mb-2'>
              <label htmlFor="mobile" className='text-lg font-bold py-1 '>Mobile No</label>
              <input type="tel" id="mobile" placeholder='Enter your Mobile Number' required="" className="border-b-2 py-1 border-black bg-orange-100 text-md focus:outline-none" />
            </div>

            <div className='flex flex-col mx-3 mb-2'>
              <label htmlFor="message" className='text-lg font-bold py-1'>Message</label>
              <textarea id="message" placeholder='Enter your Message' required="" rows="3" className="border-b-2 py-1 border-black bg-orange-100 text-md focus:outline-none"></textarea>
            </div>

            <div className='text-center'>
              <button className='text-white bg-red-600 w-[146px] mx-4 my-2 py-2 font-bold rounded-lg'>Send</button>
            </div>
          </div>



          <div className='md:w-90 h-auto md:h-96 object-cover '>
            <img
              src="https://whitelanddevelopers.co.in/iconic-tower/images/banner.jpg"
              alt="property in gurgaon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='md:w-90 h-auto md:h-96 bg-orange-100  '>
            <div className='py-10 px-10'>

              <div className='grid grid-cols-1 px-2 py-10'>
                <div className='my-4'>
                  <i className="fa-solid fa-mobile-screen-button text-orange-300 text-2xl"></i>
                  <a href='tel:+9123456789' className='mx-2 text-lg font-bold '>+9123456789</a>

                </div>
                <div className='my-4 flex items-center'>
                  <i className="fa-solid fa-envelope text-orange-300  text-2xl"></i>
                  <a href="mailto:hr@100acress.com" target="_blank" className='mx-2 text-red-600 text-lg font-bold '>CS@100acress.com</a>
                </div>
                <div className='my-4 flex items-center'>
                  <i className="fa-solid fa-location-dot text-orange-300 text-2xl"></i>
                  <span className='mx-2  text-lg font-bold '>708, ILD Trade Center, Sector- 47, Gurgaon.</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;


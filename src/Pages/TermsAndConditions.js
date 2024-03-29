import React from 'react';
import Nav from '../aadharhomes/Nav';
import Footer from '../Components/Actual_Components/Footer';

const TermsAndConditions = () => {
  return (
    <>
    <Nav />
     
      <div className="relative w-full " style={{
        backgroundImage: 'url("https://sarkariresultexpert.com/pic/terms.jpg")',
        objectFit: 'cover',
        backgroundSize: 'cover',
        height: '70vh'
      }}>
        </div>
      
      <h3 className='pt-1 text-red-600 md:text-xl  lg:text-2xl xl:text-3xl text-center'>Terms And Conditions</h3>


      <p className='text-gray-500 text-lg px-10 py-2 text-justify'>100acress.com Gurgaon is an honoured real estate company that strongly believes in providing customer
        delight and value for its hard-earned money was founded in the year 2000 and is being skillfully led by
        our director Mr Rajesh Agrawal. So far we have been successful in gaining top reviews from our clients
        in diverse jobs such as Booking/ Sale/ Leasing Of Residential/ Commercial Properties In Gurgaon And Delhi/NCR
        which makes us a trustworthy and efficient real estate company in Gurgaon.Our team of highly skilled professionals
        works with genuine sellers so that it can make the best deals for our potential buyer who are looking for residential,
        commercial, or any real estate investment, we try to maintain long term relationship by providing their dream home and
        insists on providing the value for their money by opening all the details of the project and showing them similar
        projects too under the same price segments in order to make them able for making better decisions.100acress.com is
        actively making services for searching, renting out, selling, financing (mortgaging), and many more such services at
        the best price to fulfil clients’ demands by engaging through a large circle of people with every possible transparency.</p>

      <div className="flex items-center pt-2 px-10">
        <img src="data:image/jpeg;base64,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"
          alt="image"
          className='h-10 w-10  ' />
        <h3 className="pt-1 text-red-600 md:text-xl  lg:text-2xl xl:text-3xl">Why 100Acress.com ?</h3>
      </div>
      
        <p className=' pt-3 px-10 text-gray-500 text-lg  text-justify'>
          Our company works with moral values which are respecting clients’ investment, determined efforts to make every possibility available,
          and preserved efforts to grant the best services to our clients. We learn with our clients to enhance our servicer quality, make ourselves
          better every day. And provide the best results of their investments which they desire. all the transparency of the work will be made which
          you require.The real estate industry is making rapid growth and We aim to become one of the most admired, influential, and reliable service
          provider companies in the real estate industry by winning our customers' trust. With our ultimate passion, performance, and skilled abilities
          we aspire to enhance our standards in Gurgaon and Delhi NCR. In catering excellent service to our customers, making confident.
        </p>
     
      <div className="flex items-center pt-6 px-10">
        <img
          src="https://img.freepik.com/premium-photo/architecture-house-award-concept-golden-award-trophy-house-white-background-3d-rendering_476612-9323.jpg"
          alt="img"
          className="h-10 w-10 "
        />
        <h3 className="pt-1 text-red-600 md:text-xl  lg:text-2xl xl:text-3xl">Our Responsibility</h3>
      </div>
      <div>
        <p className='pt-3 pb-20 px-10 text-gray-500 text-lg  text-justify'>Our expert team is working on making secure and smooth all legal and mandatory transactions of our housing and commercial projects to
          ensure real and value for money products. We provide every piece of information and quick browsing facilities about the undertakings so
          that our client does not get any harm and can trust us. Our team aims to enlarge our circle of people to avail best deals and multiple
          choices along with getting a significant status in the real estate domain.</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;














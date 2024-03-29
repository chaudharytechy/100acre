import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../aadharhomes/Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function BuyPropViewCard() {
  const [buyData, setBuytData] = useState([]);
  const [postpropertyData, setPostPropertyData] = useState([]);

  const { frontImage, otherImage, propertyName, amenities } = buyData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://acre.onrender.com/property/buy/ViewAll"
        );
        setBuytData(res.data.data);
        setPostPropertyData(res.data.data1);
        console.log("buyData", res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [buyData]);

  useEffect(() => {}, [postpropertyData]);

  return (
    // <>
    //   <Nav />
    //   <section className="flex flex-col items-center bg-white">
    //     <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-8">
    //       {buyData.map((item, index) => {
    //         const userId = item._id;
    //         return (
    //           <article
    //             key={index}
    //             className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
    //           >
    //             <div>
    //               {item.frontImage && (
    //                 <img
    //                   src={item.frontImage.url}
    //                   alt="front Image"
    //                   className="w-full h-48 object-fit"
    //                 />
    //               )}
    //             </div>
    //             <div className="p-4">
    //               <div className="pb-2">
    //                 <a className="text-lg font-semibold hover:text-red-600  duration-500 ease-in-out">
    //                   {item.projectName}
    //                 </a>
    //                 <br />
    //                 <a className="text-sm hover:text-red-600  duration-500 ease-in-out">
    //                   {item.address}
    //                 </a>
    //               </div>
    //               <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-2">
    //                 <li className="mr-4 flex items-center text-left">
    //                   <li className="text-left">
    //                     <span className="text-sm text-gray-400">
    //                       {item.builtYear}
    //                     </span>
    //                     <p className="m-0 text-base font-medium">{item.type}</p>
    //                   </li>
    //                 </li>
    //               </ul>
    //               <ul className="m-0 flex list-none items-center justify-between px-0 pt-3 pb-0">
    //                 <li className="text-left">
    //                   <span className="text-sm font-extrabold text-black">
    //                     Price: {item.price}
    //                   </span>
    //                 </li>
    //                 <li className="text-left">
    //                   <Link to={`/buy/${userId}`}>
    //                     <button
    //                       type="button"
    //                       className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2  text-center me-2 "
    //                     >
    //                       View Details
    //                     </button>
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </div>
    //           </article>
    //         );
    //       })}

    //       {postpropertyData.map((item, index) => {
    //         const filterPostData = item.postProperty;
    //         return (
    //           <div key={index}>
    //             {filterPostData.map((nestedData, nestedIndex) => {
    //               const filterUserId = nestedData._id;
    //               return (
    //                 <article
    //                   key={nestedIndex}
    //                   className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
    //                 >
    //                   <div>
    //                     <img
    //                       src={item.frontImage && item.frontImage.url}
    //                       alt="front Image"
    //                       className="w-full h-48 object-fit"
    //                     />
    //                   </div>
    //                   <div className="p-4">
    //                     <div className="pb-2">
    //                       <a className="text-lg font-semibold hover:text-red-600  duration-500 ease-in-out">
    //                         {item.projectName}
    //                       </a>
    //                       <br />
    //                       <a className="text-sm hover:text-red-600  duration-500 ease-in-out">
    //                         {item.address}
    //                       </a>
    //                     </div>
    //                     <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-2">
    //                       <li className="mr-4 flex items-center text-left">
    //                         <li className="text-left">
    //                           <span className="text-sm text-gray-400">
    //                             {item.builtYear}
    //                           </span>
    //                           <p className="m-0 text-base font-medium">
    //                             {item.type}
    //                           </p>
    //                         </li>
    //                       </li>
    //                     </ul>
    //                     <ul className="m-0 flex list-none items-center justify-between px-0 pt-3 pb-0">
    //                       <li className="text-left">
    //                         <span className="text-sm font-extrabold text-black">
    //                           Price: {item.price}
    //                         </span>
    //                       </li>
    //                       <li className="text-left">
    //                         <Link to={`/buy/${filterUserId}`}>
    //                           <button
    //                             type="button"
    //                             className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2  text-center me-2 "
    //                           >
    //                             View Details
    //                           </button>
    //                         </Link>
    //                       </li>
    //                     </ul>
    //                   </div>
    //                 </article>
    //               );
    //             })}
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </section>
    //   <Footer />
    // </>

    <>
    <Nav />
    <section className="flex flex-col items-center bg-white">
      <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-8">
        {buyData.map((item, index) => {
          const userId = item._id;
          return (
            <article
              key={index}
              className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
            >
              <div>
                <img
                  src={item.frontImage.url}
                  alt=""
                  className="w-full h-48 object-fit"
                />
              </div>
              <div className="p-4">
                <div className="pb-2">
                  <a className="text-lg font-semibold hover:text-red-600  duration-500 ease-in-out">
                    {item.projectName}
                  </a>
                  <br />
                  <a className="text-sm hover:text-red-600  duration-500 ease-in-out">
                    {item.address}
                  </a>
                </div>
                <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-2">
                  <li className="mr-4 flex items-center text-left">
                    <li className="text-left">
                      <span className="text-sm text-gray-400">
                        {item.builtYear}
                      </span>
                      <p className="m-0 text-base font-medium">{item.type}</p>
                    </li>
                  </li>
                </ul>
                <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                  <li className="text-left">
                    <span className="text-sm font-extrabold text-black">
                      Price: {item.price}
                    </span>
                  </li>
                  <li className="text-left">
                    <Link to={`/rent/${userId}`}>
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2  text-center me-2"
                      >
                        View Details
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          );
        })}

        {postpropertyData.map((item, index) => {
          const filterPostData = item.postProperty;
          return (
            <div key={index}>
              {filterPostData.map((nestedData, nestedIndex) => {
                const filterUserId = nestedData._id
                return (
                  <article
                  key={nestedIndex}
                  className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
                >
                  <div>
                    {nestedData.frontImage && nestedData.frontImage.url && (
                      <img
                      src={nestedData.frontImage.url}
                      alt=""
                      className="w-full h-48 object-fit"
                    />
                    )}
                    
                  </div>
                  <div className="p-4">
                    <div className="pb-2">
                      <a className="text-lg font-semibold hover:text-red-600  duration-500 ease-in-out">
                        {nestedData.propertyName}
                      </a>
                      <br />
                      <a className="text-sm hover:text-red-600  duration-500 ease-in-out">
                        {nestedData.address}
                      </a>
                    </div>
                    <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-2">
                      <li className="mr-4 flex items-center text-left">
                        <li className="text-left">
                          <span className="text-sm text-gray-400">
                            {nestedData.builtYear}
                          </span>
                          <p className="m-0 text-base font-medium">{nestedData.type}</p>
                        </li>
                      </li>
                    </ul>
                    <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                      <li className="text-left">
                        <span className="text-sm font-extrabold text-black">
                          Price: {nestedData.price}
                        </span>
                      </li>
                      <li className="text-left">
                        <Link to={`/rent/${filterUserId}`}>
                          <button
                            type="button"
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2  text-center me-2"
                          >
                            View Details
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </article>
                )
              })}
            </div>
          );
        })}

        
      </div>
    </section>
    <Footer />
  </>
  );
}

export default BuyPropViewCard;

import React, { useState, useEffect } from "react";
import Cities from "../Components/HomePageComponents/Cities";
import FormHome from "../Components/HomePageComponents/FormHome";
import WhyChoose from "../Components/HomePageComponents/WhyChoose";
import StarCarousel from "../Components/HomePageComponents/Carousel";
import SpacesAvailable from "../Components/HomePageComponents/Spaces";
import SearchBar from "../Components/HomePageComponents/SearchBar";
import styled from "styled-components";
import FeaturedSection from "../Components/HomePageComponents/featured";
import DeveloperSlider from "../Components/HomePageComponents/DeveloperSlider";
import OurServices from "../Components/HomePageComponents/ourServices";
import { useProductContext } from "../Context/productContext";
import SimilarCarousel from "../Components/HomePageComponents/SimiliarCarousel";
import { Helmet } from "react-helmet";
import axios from "axios";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Nav from "../aadharhomes/Nav";
import Footer from "../Components/Actual_Components/Footer";
import ReactModal from "react-modal";
import SmallPopForm from "../Components/Actual_Components/SmallPopForm";
import { Link } from "react-router-dom";
const customStyles = {
  content: {
    top: "35%", // Vertical position from the top
    left: "50%", // Horizontal position from the left
    right: "auto", // Right position
    bottom: "auto", // Bottom position
    marginRight: "-50%", // Adjust horizontal position
    width: "40%", // Width of the modal
    height: "47%", // Height of the modal
    transform: "translate(-40%, -10%)", // Translate to center the modal
    // backgroundColor: "gray", // Background color
    text: "white", // Text color (Note: 'text' is not a valid CSS property)
  },
};

function Home() {
  const [trendingProject, setTrendingProject] = useState([]);
  const [featuredProject, setFeaturedProject] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://acre.onrender.com/project/trending"
        );
        setTrendingProject(res.data.data);
      } catch (error) {
        console.log(error || error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [trendingProject]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://acre.onrender.com/project/featured"
        );
        setFeaturedProject(res.data.data);
      } catch (error) {
        console.log(error || error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [featuredProject]);

  const {
    PreLaunchProperties,
    isPreLaunchLoading,
    getPreLaunchProducts,
    PreLuanchFeatProperties,
    PreLuanchSimilarProperties,
  } = useProductContext();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleShow = () => {
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Wrapper className="section" style={{ overflowX: "hidden" }}>
      <Nav />
      <Helmet>
        <meta
          name="description"
          content="100acress.com Gurgaon Fastest Growing Property Website, Buy Residential &amp; Commercial Property in Gurgaon. Flats in Gurgaon. Real Estate in Gurgaon"
        />
        <title>
          Property in Gurgaon, Buy Sell Property in India, Real Estate -
          100acress.com
        </title>
      </Helmet>

      <div className="h-screen w-full  md:h-60 lg:h-96 sm:h-24 p-8 box-border djqwUUJNCO 9999 mb-4  ">
        <div className="mt-12 lg:pt-14 sm:pt-1 sm:h-6  md:pt-0 ">
          <SearchBar />
        </div>
      </div>

      {/* <div className="sticky-quote-cta ">
        <a className="text-lg mx-2" onClick={handleShow}>
          Enquire Now
        </a>

        <ReactModal isOpen={modalIsOpen} style={customStyles}>
          <strong className="text-black font-semibold  not-italic lg:text-2xl ml-2 sm:text-sm text-justify ">
            ENQUIRE NOW
          </strong>

          <button onClick={handleClose}>
            <i class="fa-regular fa-rectangle-xmark lg:text-3xl sm:text-xl lg:ml-72 sm:ml:2 bg-[#e53e3e] "></i>
          </button>

          <form className="px-2 pt-2 ">
            <input
              type="text"
              name="name"
              id="validationCustom01"
              placeholder="Full Name"
              required
              className="mb-2 me-2 w-100 p-2 px-3 "
              style={{
                outline: "none",
                border: "1px solid #ced4da",
                color: "#495057",
                borderRadius: "0.25rem",
              }}
            />
            <input
              className="mb-2 me-2 w-100 p-2 px-3"
              type="number"
              name="mobile"
              min={0}
              id="validationCustom02"
              placeholder="Mobile Number"
              onKeyPress={(e) => {
                if (e.target.value.length > 9) {
                  e.preventDefault();
                }
              }}
              required
              style={{
                outline: "none",
                border: "1px solid #ced4da",
                color: "#495057",
                borderRadius: "0.25rem",
              }}
            />
            <input
              type="email"
              name="email"
              id="validationCustom03"
              placeholder="Email Address"
              className="mb-2 me-2 w-100 p-2 px-3"
              style={{
                outline: "none",
                border: "1px solid #ced4da",
                color: "#495057",
                borderRadius: "0.25rem",
              }}
            />
            <button type="submit" className="btn btn-danger font-semibold">
              Submit
            </button>
          </form>
        </ReactModal>
      </div> */}

      <div>
        {" "}
        {/* <div
          className="xjUWI  lg:px-8 "
          style={{
            fontSize: "xx-large",
            fontWeight: "600",
            whiteSpace: "nowrap", // Ensures text stays in one line
            overflow: "hidden", // Hides overflowed content
            textOverflow: "ellipsis",
          }}
        >
          Trending Properties
        </div> */}
        <div
          className="xjUWI "
          style={{
            fontSize: "xx-large",
            margin: "20px 40px 5px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Trending Properties
        </div>
        {
          <section className="flex flex-col bg-white ">
            <div className="grid max-w-md grid-cols-1 p-4  sm:max-w-lg  md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 sm:gap-2 lg:gap-4">
              {trendingProject.map((item, index) => {
                const pUrl = item.project_url;
                return (
                  <Link to={`/${pUrl}`} target="_blank">
                    <article
                      key={index}
                      className="mb-4  overflow-hidden rounded-xl  border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
                    >
                      <div>
                        <img
                          src={item.frontImage.url}
                          alt="image"
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
                            {item.city}
                          </a>
                        </div>
                        <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                          <li className="text-left">
                            <span className="text-sm font-extrabold text-black">
                              {item.state}
                            </span>
                          </li>

                          <li className="text-left">
                            <button
                              type="button"
                              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2  text-center me-2"
                            >
                              View Details
                            </button>
                          </li>
                        </ul>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>
        }
      </div>

      {/* <div
        className="xjUWI"
        style={{
          fontSize: "xx-large",
          margin: "20px 60px",
          fontWeight: "600",
          height:"200"
        }}
      >
        Similar Properties You Viewed
      </div> */}
      {/* <SimilarCarousel /> */}

      <SpacesAvailable />

      <div
        className="xjUWI "
        style={{
          fontSize: "xx-large",
          margin: "20px 60px",
          fontWeight: "600",
        }}
      >
        Featured Projects
      </div>
      {/* <FeaturedSection /> */}

      {
        <section className="flex flex-col  bg-white">
          <div className="grid max-w-md grid-cols-1 p-4  sm:max-w-lg  md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 sm:gap-2 lg:gap-4">
            {featuredProject.map((item, index) => {
              const pUrl = item.project_url;
              return (
                <Link to={`/${pUrl}`} target="_blank">
                  <article
                    key={index}
                    className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
                  >
                    <div>
                      <img
                        src={item.frontImage.url}
                        alt="image"
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
                          {item.city}
                        </a>
                      </div>
                      <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                        <li className="text-left">
                          <span className="text-sm font-extrabold text-black">
                            {item.state}
                          </span>
                        </li>

                        <li className="text-left">
                          <button
                            type="button"
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2  text-center me-2"
                          >
                            View Details
                          </button>
                        </li>
                      </ul>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>
      }
      <Cities />
      <StarCarousel />
      <FormHome />
      <div
        className="xjUWI "
        style={{
          fontSize: "xx-large",
          margin: "30px 60px 0px 60px",
          fontWeight: "600",
        }}
      >
        Services We Offer
      </div>
      <OurServices />
      <WhyChoose />
      <div
        className="xjUWI "
        style={{
          fontSize: "xx-large",
          margin: "20px 60px 0px 60px",
          fontWeight: "600",
        }}
      >
        Our Partners
      </div>
      <div
        className="xjUWI "
        style={{
          fontSize: "medium",
          margin: "0px 60px 30px 60px",
          fontWeight: "500",
          color: " #696969",
        }}
      >
        We are working with Top Builders and Developers across India
      </div>
      <DeveloperSlider />
      <div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=9811750130"
            className="dd-m-whatsapp"
            target="_blank"
          >
            <span className="icon"></span>
          </a>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.section`
  .dd-m-whatsapp {
    position: fixed;
    z-index: 999;
    bottom: 40px;
    right: 10px;
    width: 55px;
    height: 55px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: #25d366;
    -webkit-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    transition: 0.3s all ease;
    cursor: pointer;
    text-decoration: none;
    color: #25d366;
  }

  .dd-m-whatsapp:hover {
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-box-shadow: 0 5px 15px 2px rgba(37, 211, 102, 0.3);
    -moz-box-shadow: 0 5px 15px 2px rgba(37, 211, 102, 0.3);
    box-shadow: 0 5px 15px 2px rgba(37, 211, 102, 0.3);
  }

  .dd-m-whatsapp .icon {
    width: 50%;
    height: 50%;
    display: block;
    fill: #fff;
    -webkit-transform: translateX(1px);
    -moz-transform: translateX(1px);
    -ms-transform: translateX(1px);
    -o-transform: translateX(1px);
    transform: translateX(1px);
  }

  .dd-m-whatsapp .icon {
    width: 70%;
    height: 70%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39 39'%3E%3Cpath d='M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z' fill='%2325d366'/%3E%3Cpath d='M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z' fill='%23fff'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }
  @media screen and (max-width: 600px) {
    .xjUWI {
      font-size: x-large;
      margin: 30px 30px !important;
    }
    .djqwUUJNCO {
      height: 17vh !important;
      background-image: url("../../Images/1.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  @media screen and (max-width: 425px) and (min-width: 425px) {
    .xjUWI {
      font-size: x-large;
      margin: 10px 30px !important;
    }
    .djqwUUJNCO {
      height: 60vh !important;
      background-image: url("../../Images/1.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  @media screen and (max-width: 375px) and (min-width: 375px) {
    .xjUWI {
      font-size: x-large;
      margin: 10px 30px !important;
    }
    .djqwUUJNCO {
      height: 20vh !important;
      background-image: url("../../Images/1.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  @media screen and (max-width: 425px) and (min-width: 425px) {
    .xjUWI {
      font-size: x-large;
      margin: 10px 30px !important;
    }
    .djqwUUJNCO {
      height: 60vh !important;
      background-image: url("../../Images/1.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  @media screen and (max-width: 1800px) and (min-width: 601px) {
    .djqwUUJNCO {
      background-image: url("../../Images/BannerImage3.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  .sticky-quote-cta {
    height: auto;
    position: fixed;
    border-radius: 15px 0 15px 0;
    right: 0;
    top: 400px;
    top: 40vh;
    z-index: 10000;
  }

  .sticky-quote-cta a {
    color: white;
    text-decoration: none;
    background: #333;
    padding: 15px 20px 35px;
    display: block;
    font-weight: bold;
    font-size: 15px;
    border-radius: 5px;
    -ms-transform: rotate(-90deg) translate(0, -20px);
    -webkit-transform: rotate(-90deg) translate(0, -20px);
    transform: rotate(-90deg) translate(0, -20px);
    position: relative;
    right: -85px;
    transition: position 0.2s, right 0.2s;
    background: rgb(251, 183, 39);
    background: red;
  }

  .sticky-quote-cta a:hover {
    right: -70px;
    transition: position 0.2s, right 0.2s;
    cursor: pointer;
  }
`;

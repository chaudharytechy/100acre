import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ReactModal from "react-modal";

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


const BannerPage = () => {
  const sliderRef = React.createRef();
  const resetData = useRef(null);
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight: false,
  };

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    projectName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const userSubmitDetails = (e) => {
    e.preventDefault();
    const { mobile, name, email, address, projectName } = userDetails;

    if (mobile) {
      axios
        .post("https://acre.onrender.com/userInsert", userDetails)
        .then((res) => {
          alert("Data submitted");
          // Reset the form fields
          setUserDetails({
            mobile: "",
            name: "",
            email: "",
            address: "",
            projectName: "",
          });
        })

        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill in the data");
    }
  };

  const [userpopupdata, setUserPopupData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    projectName: "",
  });

  const handlePopDataChange = (e) => {
    const { name, value } = e.target;
    setUserPopupData({ ...userpopupdata, [name]: value });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleShow = () => {
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleSubmitPopForm = (e) => {
    e.preventDefault();
    const { mobile, name, address, email, projectName } = userpopupdata;
    if (mobile) {
      axios
        .post("https://acre.onrender.com/userInsert", userpopupdata)
        .then((res) => alert("Data submitted"))
        .catch((error) => alert(error.message));
    } else {
      alert("Please fill in the data");
    }
  };

  const { pName } = useParams();

  const [projectViewDetails, setProjectViewDetails] = useState([]);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://acre.onrender.com/projectView/${pName}`
        );
        setProjectViewDetails(res.data.dataview[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [projectViewDetails]);

  const {
    frontImage,
    BhK_Details,
    project_floorplan_Image,
    Amenities,
    projectRedefine_Business,
    projectRedefine_Connectivity,
    projectRedefine_Education,
    projectRedefine_Entertainment,
  } = projectViewDetails;

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <Wrapper className="section">
      <>
      <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-2 lg:flex-row lg:items-center">
        <div>
          <a
            class="  flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900"
            href="#"
          >
            <img
              src={projectViewDetails?.logo?.url}
              style={{ height: "40px", width: "200px" }}
              alt="project logo"
              loading="lazy"
            />
          </a>
        </div>

        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-3 right-5 cursor-pointer lg:hidden"
          for="navbar-open"
        >
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:pt-8  peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-700  lg:text-lg md:text-xs transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                Overview
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-700   lg:text-lg md:text-xs transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                Location
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-700  lg:text-lg md:text-xs transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                Experience
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-700  lg:text-lg md:text-xs transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                FloorPlan
              </a>
            </li>
            <li className="lg:mr-12">
              <a
                className="rounded text-gray-700  lg:text-lg md:text-xs transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
                href="#"
              >
                Amenties
              </a>
            </li>
            <li className="lg:mr-12 hidden md:block">
              <a className="rounded text-gray-700 lg:text-lg md:text-xs transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2">
                <span className="text-blue-700">+91</span> xxxxxxxxxx
              </a>
            </li>
          </ul>
          <hr className="mt-4 w-full lg:hidden" />
        </nav>
      </header>

      <div className="h-[32rem] w-full relative overflow-hidden bg-cover bg-no-repeat p-12 text-center">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed object-fit "
          style={{
            backgroundImage: frontImage ? `url(${frontImage.url})` : "",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.8",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="relative">
              <h2 className="mb-4 text-sm lg:text-4xl md:text-2xl sm:text-sm font-extrabold text-white">
                EXPERIENCE DELHI'S FIRST AND ONLY
              </h2>
              <h4 className="mb-6 text-sm lg:text-3xl md:text-xl sm:text-sm font-extrabold text-[#ffc067]">
                GOLF COURSE FACING APARTMENTS
              </h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="relative">
          {/* Popup */}
          {showPopup && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className=" relative">
                <button
                  className="absolute top-0 right-0  text-black  rounded-lg"
                  onClick={() => setShowPopup(false)}
                >
                  <i className="fa-solid fa-xmark text-4xl"></i>
                </button>
                <form class="bg-white rounded-lg px-6 py-8 shadow-md">
                  <div className="mb-2">
                    <h2 class="text-xl font-semibold text-black">
                      GET A CALLBACK
                    </h2>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="name"
                      value={userpopupdata.name}
                      placeholder="Enter Your Name"
                      onChange={handlePopDataChange}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="email"
                      value={userpopupdata.email}
                      placeholder="Enter Your Email"
                      onChange={handlePopDataChange}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      rows="2"
                      placeholder="Contact Number"
                      name="mobile"
                      value={userpopupdata.mobile}
                      onChange={handlePopDataChange}
                      required
                    ></input>
                  </div>

                  <div className="mb-2">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      rows="2"
                      placeholder="Enter Project Name"
                      name="projectName"
                      value={userpopupdata.projectName}
                      onChange={handlePopDataChange}
                    ></input>
                  </div>

                  <div className="mb-2">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      rows="2"
                      placeholder="Project Address"
                      name="address"
                      onChange={handlePopDataChange}
                      value={userpopupdata.address}
                    ></input>
                  </div>
                  <div class="flex justify-center">
                    <button
                      onClick={handleSubmitPopForm}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      <div
        className="lg:flex sm:text-center lg:mx-20 lg:flex-col  lg:items-center"
        style={{ marginLeft: "38px", paddingTop: "28px" }}
        id="overview"
      >
        <h3 className="w-full  lg:w-3/4 lg:mx-28 text-2xl lg:text-4xl font-semibold text-[#012e29]">
          {projectViewDetails.projectName} - {projectViewDetails.projectAddress}
          , {projectViewDetails.city}
        </h3>
      </div>

      <div className="text-center text-black font-semibold m-4 md:m-8 lg:m-10 xl:m-20 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pt-0">
        <p className="pr-6">
          Your dream home right across an iconic{" "}
          {projectViewDetails.projectName}
        </p>
      </div>

      <div className="text-justify md-[768px] text-gray-700 m-10 md:m-8 lg:m-12 xl:m-20 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl pt-0 mt-4">
        <p className="leading-relaxed">
          {projectViewDetails.project_discripation}
        </p>
      </div>

      <div>
        <img
          src={projectViewDetails?.project_locationImage?.url}
          alt="location image"
          className="w-full h-auto"
        />
      </div>

      <div className="sticky-quote-cta ">
        <a onClick={handleShow}>For any Queries</a>

        <ReactModal isOpen={modalIsOpen} style={customStyles}>
          <strong className="text-black font-semibold  not-italic lg:text-2xl ml-2 sm:text-sm text-justify ">
            ENQUIRE NOW
          </strong>

          <button onClick={handleClose}>
            <i class="fa-regular fa-rectangle-xmark lg:text-3xl sm:text-xl lg:ml-72 sm:ml:2"></i>
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
      </div>

      <div className="text-center pt-4">
        <strong className="font-semibold  lg:text-3xl  md:text-xl sm:text-sm text-[#012e29]">
          Central Park Sector 104 Gallery
        </strong>
      </div>

  


      <table className="lg:text-xl pt-4 lg:w-full md:w-auto sm:w-72 md:mx-auto sm:mx-auto bg-white  border-gray-300 mt-3">
        <thead className="lg:text-xl">
          <tr>
            <th className="py-2 px-4 border-b-2 font-bold text-xl text-center">
              projectName Size
            </th>
            <th className="py-2 px-4 border-b-2 font-bold text-xl text-center">
              projectName Type
            </th>
            <th className="py-2 px-4 border-b-2 font-bold text-xl text-center">
              projectName Price
            </th>
          </tr>
        </thead>
        <tbody>
          {BhK_Details &&
            Array.isArray(BhK_Details) &&
            BhK_Details.length > 0 &&
            BhK_Details.map((item, index) => (
              <tr>
                <td className="py-2 px-4 border-b-2 text-center">
                  {item.bhk_Area} Sq.ft
                </td>
                <td className="py-2 px-4 border-b-2 text-center">
                  {item.bhk_type}
                </td>
                <td className="py-2 px-4 border-b-2 text-center">
                  {item.price}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="text-center mb-1 pt-4 text-black font-semibold m-4 md:m-8 lg:m-12 xl:m-20 text-sm sm:text-base md:text-lg lg:text-3xl mt-4">
        <p className="leading-relaxed">URBAN LIVING REDEFINING CITY LIFE</p>
      </div>

      <div
        className="relative mb-2 max-w-screen-lg mx-auto pt-4  sm:w-full  lg:mx-4 md:w-full md:mx-2 sm:mx-1 lg:pt-1 sm:pt-0"
        id="experience"
        style={{ height: "350px" }}
      >
        <Slider ref={sliderRef} {...settings}>
          {project_floorplan_Image &&
            Array.isArray(project_floorplan_Image) &&
            project_floorplan_Image.length > 0 &&
            project_floorplan_Image.map((item, index) => {
              return (
                <div key={index} style={{ marginRight: "10px" }}>
                  <img
                    className="w-full lg:h-[350px] md:h-[150px] sm:h-[150px] object-fit rounded-xl"
                    src={item.url}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              );
            })}
        </Slider>

        <div className="pt-4 absolute inset-y-0 left-0 flex items-center">
          <button
            className="text-black text-4xl lg:text-6xl focus:outline-none"
            onClick={goToPrev}
          >
            <i className="fa-solid fa-circle-arrow-left"></i>
          </button>
        </div>

        <div className="pt-4 absolute inset-y-0 right-0 flex items-center">
          <button
            className="text-black text-4xl lg:text-6xl focus:outline-none"
            onClick={goToNext}
          >
            <i className="fa-solid fa-circle-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="px-5 mb-0 pt-4">
        <div className="grid  md:pt-3 lg:grid-cols-4 sm:pt-1 sm:grid-cols-1 md:grid-cols-2 sm:mx-2 gap-3 m-2 sm:m-2 md:m-4 lg:m-4">
          <div
            className="border-2 lg:mx-2 md:mx-2 border-[#d9a253] lg:w-full lg:h-[300] sm:h-[100] sm:w-full md:w-[200] md:h-[200] rounded-lg bg-[#f1eadf]"
            style={{ width: "90%", height: "100%" }}
          >
            <div className="mx-4 pb-2">
              <img
                src="https://www.golfisland.in/assets/images/icon/icon-park-outline_connection.svg"
                className="m-2 mx-auto"
                alt="Connectivity"
              />
              <p className="m-0 text-sm font-semibold text-center">
                BUSINESS AND COMMERCIAL
              </p>

              {projectRedefine_Business &&
                Array.isArray(projectRedefine_Business) &&
                projectRedefine_Business.length > 0 &&
                projectRedefine_Business.map((item, index) => (
                  <table className="w-full">
                    <tr>
                      <td>{item}</td>
                    </tr>
                  </table>
                ))}
            </div>
          </div>

          <div
            className="border-2 lg:mx-2 md:mx-2 border-[#d9a253] lg:w-full lg:h-[300] sm:h-[100] sm:w-full md:w-[200] md:h-[200] rounded-lg "
            style={{ width: "90%", height: "100%" }}
          >
            <div className="mx-4 pb-2">
              <img
                src="https://golfisland.in/assets/images/icon/streamline_entertainment-control-button-play-circle-controls-media-multi-play-multimedia-button-circle.svg"
                className="m-2 mx-auto"
              />
              <h3 className="m-0 text-sm font-semibold text-center">
                Connectivity
              </h3>
              {projectRedefine_Connectivity &&
                Array.isArray(projectRedefine_Connectivity) &&
                projectRedefine_Connectivity.length > 0 &&
                projectRedefine_Connectivity.map((item, index) => (
                  <table className="w-full">
                    <tr>
                      <td>{item}</td>
                    </tr>
                  </table>
                ))}
            </div>
          </div>

          <div
            className="border-2 lg:mx-2 md:mx-2 border-[#d9a253] lg:w-full lg:h-[300] sm:h-[100] sm:w-full md:w-[200] md:h-[200] rounded-lg"
            style={{ width: "90%", height: "100%" }}
          >
            <div className="mx-4 pb-2">
              <img
                src="https://www.golfisland.in/assets/images/icon/la_business-time.svg"
                className="m-2 mx-auto"
              />
              <h3 className="m-0 text-sm font-semibold text-center">
                EDUCATION AND HEALTHCARE
              </h3>
              {projectRedefine_Education &&
                Array.isArray(projectRedefine_Education) &&
                projectRedefine_Education.length > 0 &&
                projectRedefine_Education.map((item, index) => (
                  <table className="w-full">
                    <tr>
                      <td>{item}</td>
                    </tr>
                  </table>
                ))}
            </div>
          </div>

          <div
            className="border-2 lg:mx-2 md:mx-2 border-[#d9a253] lg:w-[20%] lg:h-[300] sm:h-[100] sm:w-full md:w-[200] md:h-[200] rounded-lg "
            style={{ width: "90%", height: "100%" }}
          >
            <div className="mx-4 pb-2">
              <img
                src="https://www.golfisland.in/assets/images/icon/medical-icon_i-health-education.svg"
                className="m-2 mx-auto"
              />
              <h3 className="m-0 text-sm font-semibold text-center">
                ENTERTAINMENT GALORE
              </h3>
              {projectRedefine_Entertainment &&
                Array.isArray(projectRedefine_Entertainment) &&
                projectRedefine_Entertainment.length > 0 &&
                projectRedefine_Entertainment.map((item, index) => (
                  <table className="w-full">
                    <tr>
                      <td>{item}</td>
                    </tr>
                  </table>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-5 sm:pt-1 text-center mb-4">
        <strong className="  text-[#012e29]  font-sans lg:text-3xl  md:text-2xl sm:text-sm font-bold">
          A COLLECTIVE STORIED LEGACY OF THE RP GROUP
        </strong>
      </div>

      <div className="bg-gray-100 font-sans pt-4">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
            <div className="bg-white p-6 rounded-md shadow-md transition hover:translate-x-2 transform-gpu">
              <h2 className="font-semibold mb-2 text-center text-3xl">
                50+ <br /> Projects
              </h2>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md transition hover:translate-x-2 ">
              <h2 className="text-3xl font-semibold mb-2 text-center">
                10K+ Customers
              </h2>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md transition hover:translate-x-2 transform-gpu">
              <h2 className="text-3xl font-semibold mb-2 text-center">
                6 <br /> Cities
              </h2>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md transition hover:translate-x-2 transform-gpu">
              <h2 className="text-3xl font-semibold mb-2 text-center">
                0 Debt & Litigation
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[#012e29] font-semibold mt-2 lg:pt-4 md:pt-3  text-sm sm:text-base md:text-lg lg:text-3xl sm:pt-0 px-3">
        <p className="leading-relaxed">
          LUXURY LIVING WITH A GLOBAL PERSPECTIVE
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 px-4 pt-4 "
        id="amenities"
      >
        {Amenities &&
          Array.isArray(Amenities) &&
          Amenities.length > 0 &&
          Amenities.map((item, index) => (
            <div
              key={index}
              className="uppercase p-4 m-4  text-center border-[#d9a253]  rounded-lg border-2 hover:bg-[#d9a253]"
            >
              {" "}
              {item}
            </div>
          ))}
      </div>

      <div className="text-center pt-4">
        <strong className=" text-justify lg:text-3xl sm:text-sm font-extrabold lg:p-8 sm:p-0 text-[#012e29]">
          DOMINANT PLAYERS IN BUILDING INFRASTRUCTURE & REALTY
        </strong>
      </div>
      <div class="flex items-center justify-center pt-2" id="about">
        <img
          class="object-cover object-center rounded-xl w-24 h-auto"
          src={projectViewDetails?.logo?.url}
          alt="logo"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mx-4 pt-2 lg:mx-0">
        <div className="lg:w-full sm:w-full text-justify mb-8 lg:mb-0 ">
          <p>
            At <b>{projectViewDetails.projectName}</b>,{" "}
            {projectViewDetails.AboutDeveloper}
          </p>
        </div>
      </div>

      <div className="sm:h-auto lg:h-[600] w-auto bg-[#012e29]">
        <div className="text-center text-white m-4 md:m-8 lg:m-12 xl:m-20 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl lg:pt-4 mt-4">
          <p className="leading-relaxed">
            EXPERIENCE LUXURY LIVING WITH UNPARALLELED AMENITIES AND INDULGENCES
          </p>
        </div>

        <div className="text-justify text-white m-4 md:m-8 lg:m-12 xl:m-20 text-sm sm:text-base md:text-lg lg:text-xl  pt-0 mt-4">
          <p className="leading-relaxed">
            Experience unparalleled convenience and access to the city's premier
            attractions, coupled with a serene oasis in the midst of the vibrant
            metropolis. Indulge in the best of everything at Golf Island, where
            prime location and luxurious amenities combine to create the ideal
            address for discerning individuals and families.
          </p>
        </div>

        <form className="mx-auto max-w-2xl h-auto" ref={resetData}>
          <div className="lg:pt-6 mb-4 border-b border-white">
            <input
              row="6"
              type="text"
              name="name"
              onChange={handleChange}
              value={userDetails.name}
              placeholder="Enter Your Name*"
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            ></input>
          </div>

          <div className="mb-4 relative border-b border-white">
            <input
              type="text"
              name="email"
              row="6"
              value={userDetails.email}
              onChange={handleChange}
              placeholder="Enter Your Email*"
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div className="mb-4  border-b border-white">
            <input
              type="text"
              name="mobile"
              value={userDetails.mobile}
              onChange={handleChange}
              required
              placeholder="Contact Number*"
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div>
            <input
              placeholder="Project Name*"
              name="projectName"
              value={projectViewDetails.projectName}
              onChange={handleChange}
              type="hidden"
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div>
            <input
              placeholder="Project Address*"
              name="address"
              onChange={handleChange}
              value={projectViewDetails.projectAddress}
              type="hidden"
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div className="flex justify-center md:mt-2 p-4">
            <strong className="text-white text-center">
              Rera No. {projectViewDetails.projectReraNo}
            </strong>
          </div>
          <div className="flex justify-center ">
            <button
              onClick={userSubmitDetails}
              className="inline-flex gap-1  text-white bg-[#012e29] border focus:outline-none px-3 py-2 rounded"
            >
              Make an Inquiry <i className="fa-solid fa-arrow-right pt-1 "></i>
            </button>
          </div>
        </form>
      </div>
    </>
    </Wrapper>
  );
};

export default BannerPage;
const Wrapper = styled.section`
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
`

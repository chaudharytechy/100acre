import React, { useState } from "react";
import axios from "axios";

function FormHome() {
  const [isLoading, setIsLoading] = useState(false);
  const FORMURL = "https://api.100acress.com/contact_Insert";

  const handleLoadingClose = () => {
    setIsLoading(false);
  };

  const handleLoadingStart = () => {
    setIsLoading(true);
  };

  const [formDataInquiry, setFormDataInquiry] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    status: "pending",
  });

  const handleMainForm = (e) => {
    setFormDataInquiry({ ...formDataInquiry, [e.target.name]: e.target.value });
  };

  const submitFormData = (e) => {
    handleLoadingStart();
    e.preventDefault();
    axios({
      method: "post",
      url: FORMURL,
      data: formDataInquiry,
    })
      .then((res) => {
        console.log(res.data.message);
        alert("Your Message has been sent!");
        handleLoadingClose();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <section className="font-sans">
  <div className="flex justify-center items-center bg-red-600 rounded">
    <div className="text-white w-full bg-red-600 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <p className="fw-semibold text-lg lg:text-4xl text-white md:text-4xl sm:text-sm text-center">
            Let us find your Dream Property
          </p>
          <p className="fw-semibold text-xs lg:text-2xl md:text-lg text-white sm:text-xs text-center">
            Connect to Property Expert Now
          </p>
          <form onSubmit={submitFormData} className="my-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                onChange={handleMainForm}
                className="w-full text-white placeholder-white outline-none p-2 border-b-2 bg-red-600 border-white mobile-input"
              />
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="Mobile"
                required
                onChange={handleMainForm}
                onKeyPress={(e) => {
                  if (e.target.value.length > 9) {
                    e.preventDefault();
                  }
                }}
                className="w-full outline-none text-white placeholder-white p-2 border-b-2 bg-red-600 border-white mobile-input"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              onChange={handleMainForm}
              className="w-full text-white mt-4 outline-none p-2 placeholder-white  border-b-2 bg-red-600 border-white mobile-input"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Query"
              required
              onChange={handleMainForm}
              rows="2"
              className="w-full p-2 outline-none border-b-2 placeholder-white mt-4 bg-red-600 border-white text-white mobile-input"
            ></textarea>
            <div className="flex justify-center">
              <input
                type="submit"
                value={isLoading ? "Submitting" : "Submit"}
                className="text-center bg-white text-red-600 font-bold p-2 mt-4 rounded text-lg shadow-xl"
              />
            </div>
          </form>
        </div>
        <div className="hidden md:block w-1/2 overflow-hidden">
          <img
            src="https://cdn.create.vista.com/api/media/small/186887934/stock-photo-manager-office-manager-hard-works-office-top-floor-building-next"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default FormHome;
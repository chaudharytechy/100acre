import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const customStyle = {
  position: "absolute",
  top: "100px",
  marginLeft: "250px",
  right: "auto",
  width: "80%",
};

function handleFileChange(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const previewImage = document.getElementById("previewImage");
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
const ProjectEdit = () => {
  const [viewDetails, setViewDetails] = useState([]);
  const { id } = useParams();
  const {
    frontImage,
    otherImage,
    project_floorplan_Image,
    project_locationImage,
  } = viewDetails;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://acre.onrender.com/project/Edit/${id}`
        );
        setViewDetails(res.data.dataedit);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleUpdateUser = async () => {
    try {
      const response = await fetch(
        `https://acre.onrender.com/project/Update/${id}`,
        {
          method: "POST", // or 'POST' depending on your server logic
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          // Add your update data here if required
          // body: JSON.stringify({ key: 'value' }),
        }
      );

      if (response.ok) {
        // Update was successful, handle the response if needed
        console.log("User updated successfully");
      } else {
        // Update failed, handle the error
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div style={customStyle}>
        <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
          <div className="card-body">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td>
                    <img
                      src={
                        viewDetails.frontImage ? viewDetails.frontImage.url : ""
                      }
                      alt=""
                      style={{ maxWidth: "20%" }}
                      id="previewImage"
                    />
                    <br />
                    <input type="file" onChange={(e) => handleFileChange(e)} />
                  </td>
                </tr>

                <tr>
                  <th>Other Images</th>
                </tr>

                <tr>
                  <td>
                    <section className="w-full mx-4">
                      <div className="flex flex-wrap max-w-screen-md ">
                        {otherImage &&
                          Array.isArray(otherImage) &&
                          otherImage.length > 0 &&
                          otherImage.map((image, index) => (
                            <article
                              key={index}
                              className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                            >
                              <img
                                src={image.url}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </article>
                          ))}
                      </div>
                    </section>
                  </td>
                </tr>
                <tr>
                  <th>Project FloorPlan Image</th>
                </tr>
                <tr>
                  <td>
                    <section className="w-full mx-4">
                      <div className="flex flex-wrap max-w-screen-md ">
                        {project_floorplan_Image &&
                          Array.isArray(project_floorplan_Image) &&
                          project_floorplan_Image.length > 0 &&
                          project_floorplan_Image.map((image, index) => (
                            <article
                              key={index}
                              className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                            >
                              <img
                                src={image.url}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </article>
                          ))}
                        <br />
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e)}
                        />
                      </div>
                    </section>
                  </td>
                </tr>
                <tr>
                  <th>Project Location Image</th>
                </tr>
                <tr>
                  <td>
                    <section className="w-full mx-4">
                      <div className="flex flex-wrap max-w-screen-md ">
                        {project_locationImage &&
                          Array.isArray(project_locationImage) &&
                          project_locationImage.length > 0 &&
                          project_locationImage.map((image, index) => (
                            <article
                              key={index}
                              className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                            >
                              <img
                                src={image.url}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </article>
                          ))}
                        <br />
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e)}
                        />
                      </div>
                    </section>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Property Name :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          className="outline-none"
                          value={viewDetails.projectName}
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectName: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Builder Name :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.builderName}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              builderName: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>

                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Address :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.projectAddress}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectAddress: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>

                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      City:{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.city}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              city: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>

                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      State :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.state}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              state: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>

                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Project Overview :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.projectOverview}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectOverview: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>

                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Project Redefine Business :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.projectRedefine_Business}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectRedefine_Business: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Project Redefine Connectivity :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.projectRedefine_Connectivity}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectRedefine_Connectivity: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Project Redefine Education :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.projectRedefine_Education}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectRedefine_Education: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Project Redefine Entertainment :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.projectRedefine_Entertainment}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectRedefine_Entertainment: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Project Rera No :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.projectReraNo}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectReraNo: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Project Redefine Entertainment :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.projectRedefine_Entertainment}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              projectRedefine_Entertainment: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>

                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      About Developer :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.AboutDeveloper}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              AboutDeveloper: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>

                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Amenities :{" "}
                      <span
                        style={{
                          color: "black",
                          outline: "none",
                          fontWeight: "normal",
                        }}
                      >
                        <input
                          type="text"
                          className="outline-none"
                          value={
                            viewDetails.Amenities &&
                            viewDetails.Amenities.length > 0
                              ? viewDetails.Amenities.join(", ")
                              : ""
                          }
                          onChange={(e) => {
                            const newAmenities = e.target.value
                              .split(",")
                              .map((item) => item.trim());
                            setViewDetails((prevDetails) => ({
                              ...prevDetails,
                              amenities: [...newAmenities],
                            }));
                          }}
                        />
                      </span>
                    </span>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Type :{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.type}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              type: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>

                <tr>
                  <th>
                    <span className="text-red-600 font-semibold ">
                      Available Date:{" "}
                      <span style={{ color: "black", fontWeight: "normal" }}>
                        <input
                          type="text"
                          value={viewDetails.availableDate}
                          className="outline-none"
                          onChange={(e) =>
                            setViewDetails({
                              ...viewDetails,
                              availableDate: e.target.value,
                            })
                          }
                        />
                      </span>
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>

            <button
              type="button"
              onClick={handleUpdateUser}
              class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectEdit;

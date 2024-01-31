import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";

const customStyle = {
  position: "absolute",
  top: "100px",
  marginLeft: "250px",
  right: "auto",
  width: "80%",
};

const ViewDetails = () => {
  const [viewDetails, setViewDetails] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://acre.onrender.com/postPerson/propertyoneView/${id}`
        );
        setViewDetails(res.data.data.postProperty);
        // setOtherImage(res.data.data.postProperty.otherImage);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  const { id } = useParams();

  return (
    <>
      <Sidebar />
      <div style={customStyle}>
        <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
          <div className="card-body">
            {viewDetails.map((item, index) => {
              return (
                <table key={index} className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        {item.frontImage && item.frontImage.url ? (
                          <img
                            src={item.frontImage.url}
                            alt=""
                            style={{ maxWidth: "20%"}}
                          />
                        ) : (
                          <span>No Image Available</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="" alt="" style={{ maxWidth: "40%" }} />
                      </td>
                    </tr>

                    <tr>
                      <th>Other Image</th>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={item.otherImage[0].url}
                          alt=""
                          style={{ maxWidth: "30%" }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <th><span className="text-red-600 font-semibold">Property Name :</span> {item.propertyName}</th>
                    </tr>
                    <tr>
                      <td><span className="text-red-600 font-semibold">Property Type :</span> {item.propertyType}</td>
                    </tr>

                    <tr>
                      <td><span className="text-red-600 font-semibold">Address:</span> {item.address}</td>
                    </tr>

                    <tr>
                      <td><span className="text-red-600 font-semibold">City:</span> {item.city}</td>
                    </tr>

                    <tr>
                      <td> <span className="text-red-600 font-semibold">State:</span>{item.state}</td>
                    </tr>

                    <tr>
                      <td><span className="text-red-600 font-semibold">Price :</span> {item.price}</td>
                    </tr>

                    <tr>
                      <td><span className="text-red-600 font-semibold">Description : </span>{item.description}</td>
                    </tr>

                    <tr>
                      <td><span className="text-red-600 font-semibold">Landmark :</span> {item.landmark}</td>
                    </tr>

                    <tr>
                      <td><span className="text-red-600 font-semibold">Build year:</span> {item.buildyear}</td>
                    </tr>

                    <tr>
                      <td><span className="text-red-600 font-semibold">Amenities:</span></td>
                    </tr>
                    <tr>
                      <td><span className="text-red-600 font-semibold">Type:</span> {item.type}</td>
                    </tr>

                    <tr>
                      <td><span className="text-red-600 font-semibold">Available date</span></td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;

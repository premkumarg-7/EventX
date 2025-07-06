import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { exportComponentAsPNG } from "react-component-export-image";
import axios from "axios";
import "./style.css";
import Certificate from "./image.png";

const CertificateGenerator = () => {
  const certificateWrapper = useRef();
  const location = useLocation();

  // Get userId from location state or localStorage
  const userId = location.state?.userId || localStorage.getItem("userId");

  const [userData, setUserData] = useState({
    Name: "",
    College: "",
    Event: "",
    isLoading: true,
  });

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId); // Store for persistence
      fetchUserDetails(userId);
    } else {
      alert("User ID is missing! Please provide a valid user.");
      setUserData((prev) => ({ ...prev, isLoading: false }));
    }
  }, [userId]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.post("http://localhost:9192/api/quizzes/get_participant", {
        id: userId,
      });

      if (response.data && response.status === 200) {
        setUserData({
          Name: response.data.username || "N/A",
          College: response.data.organization || "N/A",
          Event: response.data.subject || "N/A",
          isLoading: false,
        });
      } else {
        alert("User data is missing from the response.");
        setUserData((prev) => ({ ...prev, isLoading: false }));
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      alert("Failed to fetch user details. Please check the API.");
      setUserData((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <div className="AppCertify">
      <div className="Meta">
        <h1>Get Your Certificate</h1>

        {userData.isLoading ? (
          <p className="loading-text">Generating Report...</p>
        ) : (
          <>
            <button
              onClick={() =>
                exportComponentAsPNG(certificateWrapper, {
                  html2CanvasOptions: { backgroundColor: null },
                })
              }
            >
              Download Certificate
            </button>
          </>
        )}
      </div>

      <div id="downloadWrapper" ref={certificateWrapper}>
        <div id="certificateWrapper">
          {userData.isLoading ? (
            <p className="loading-text">Generating Report...</p>
          ) : (
            <>
              <p className="SetName">{userData.Name}</p>
              <p className="SetCollege">{userData.College}</p>
              <p className="SetEvent">{userData.Event}</p>
              <img src={Certificate} alt="Certificate" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateGenerator;

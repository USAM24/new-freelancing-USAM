import React, { useContext, useEffect, useState } from "react";
import login_img from "../../assets/login_img.png";
import ggl from "../../assets/google.png";
import facebook_logo from "../../assets/logos_facebook.png"
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from '../../../node_modules/jwt-decode';
import { UserContext } from "../../Contexts/UserContext";
import axios from "axios";

export default function SigninPage() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUserData, setToken } = useContext(UserContext);

  async function saveDataUser() {
    const token = localStorage.getItem('Token_Value');
    if (token) {
      const decodeToken = jwtDecode(token);
      setToken(decodeToken);  // Storing in context
      // setUserId(decodeToken.id);
  
      try {
        const response = await fetch('https://api.usamif.com/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setUserData(data.user);
          localStorage.setItem('User_Data', JSON.stringify(data.user));  // Storing user data in localStorage
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }
  }
  
  function navigateToLogin() {
    navigate("/");
  }

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://api.usamif.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: username, password: password }),
      });
      if (response.ok) {
        navigateToLogin();
        const data = await response.json();
        localStorage.setItem('Token_Value', data.token);
        saveDataUser();
      } else {
        setError("Invalid username or password");
        console.error("Error logging in:", response);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      setError("Network error. Please try again.");
      console.error("Error logging in:", error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="container mx-auto pt-5">
      <div className="bg-primary-700 p-6 flex flex-wrap lg:py-24 rounded-lg justify-between lg:m-10  ">
        <div className=" md:w-1/2">
          <img
            src={login_img}
            alt="wellcoming image"

          />
        </div>
        <div className=" md:w-1/2 ">
          <div>
            <div className=" mb-10">

              <h5
                className=" font-semibold text-center mb-5 dark:text-black"
                style={{ fontSize: 27 }}
              >
                Welcome to USAM, if you have an account login now.
              </h5>
              <div className="flex justify-center align-center">
                <h6 className="text-white m-0">Or Connect With</h6>
                <div className="flex align-top ">
                  <div className="ml-3">
                    <a href="#">
                      <img src={facebook_logo} alt="facebook logo" />
                    </a>

                  </div>

                  <div className="ml-3">
                    <a href="#">

                      <img src={ggl} className=" mb-1 " alt="google logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSignIn} className="  mt-6  ">
              <div className="mt-3 px-5 sm:px-2 sm:mb-2">
                <label
                  className="block text-black font-semibold mb-3  "
                  htmlFor="email"
                  style={{ fontSize: 27 }}
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded-md px-3 py-5 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={username}
                  placeholder="Enter your User email"

                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-3 px-5 sm:px-2 sm:mb-2">
                <label
                  className="block text-black  font-semibold mb-3   "
                  htmlFor="password"
                  style={{ fontSize: 27 }}
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-md px-3 py-5 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-6 flex justify-between">
                <div className="flex items-center">
                  <input type="checkbox" />
                  <p className="m-0 small-font ps-1 dark:text-black">Remember me</p>
                </div>
                <Link to={"/forgot-password"} className="text-decoration-none">
                  <h6 className="text-black m-0 small-font fw-bold">
                    Forgot Password ?
                  </h6>
                </Link>
              </div>
              <div className="mb-11">
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
              </div>
              <div className="flex justify-end mt-7">

                <button
                  //  onClick={() => navigateToLogin()}
                  className="bg-black text-white font-medium py-3 px-20 rounded-lg"
                  type="submit"
                  style={{ fontSize: 22 }}
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center align-center mt-4 ">

                <h6 className="m-0 me-1 small-font fw-bold">
                  Don't have an account ?{" "}
                </h6>
                <Link to={"/sign-up"} className="text-decoration-none">
                  <h6 className="text-white dark:text-black m-0 small-font fw-bold">
                    Register Now
                  </h6>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import signup_img from "../../assets/signup.png";
import ggl from "../../assets/google.png";
import facebook_logo from "../../assets/logos_facebook.png";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";


const SignupPage = () => {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')
  const [errorsMessage, setErrorsMessage] = useState([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "freelancer",
  });
  function getData(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }
  function navigateToLogin() {
    navigate("/sign-in");
  }
  function validation() {
    let schema = Joi.object({
      firstName: Joi.string().pattern(/^[a-zA-Z]+$/).min(3).max(30).required()
      .messages({
        'string.empty': 'First Name cannot be empty',
        'string.pattern.base': 'First Name can only contain letters',
      }),
      lastName: Joi.string().pattern(/^[a-zA-Z]+$/).min(3).max(30).required()
      .messages({
        'string.empty': 'Last Name cannot be empty',
        'string.pattern.base': 'Last Name can only contain letters',
      }),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .messages({
        'string.empty': 'Email cannot be empty',
      }),
      password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')).messages({
        'string.empty': 'Password cannot be empty',
        'string.pattern.base': 'Password must be at least 8 characters long and contain at least one special character',
      }),
      role: Joi.string().alphanum().min(3).max(30).required(),
    });
    return schema.validate(formData, { abortEarly: false });
  }
  function handleSubmit(e){
    e.preventDefault();
    let validate = validation();
    if(validate?.error){
        setErrorsMessage(validate?.error?.details);
        console.log(validate?.error?.details);
        setTimeout(() => {
          setErrorsMessage([]);
        }, 3000);
    }else{
        axios.post('https://api.usamif.com/users/sign-up',formData)
    .then((response)=>{
        console.log(response);
        navigateToLogin();
    }).catch((err)=>{
        console.log(err.response.data.error);
        setErrorMessage(err.response.data.error);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
    });
    }
}
  return (

    <div className="container mx-auto pt-5">
      <div className="bg-primary-700 p-6 flex flex-wrap lg:py-24 rounded-lg justify-between lg:m-10  ">
        <div className="md:w-1/2">
          <img src={signup_img} className="rounded-md" alt="" />
        </div>

        <div className="md:w-1/2  ">
          <div>
            <div className=" mb-10">
              <h5
                className=" font-semibold text-center mb-5 dark:text-black"
                style={{ fontSize: 27 }}
              >
                Welcome to USAM, let's create an account now
              </h5>
              <div className="flex justify-center align-center">
                <h6 className=" m-0 text-white">Or Connect With</h6>
                <div className="flex align-top">
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
            <form onSubmit={handleSubmit} className="  mt-6  ">
              <div className="flex">
                <div className="md:w-1/2 mt-3 px-5 sm:px-2 sm:mt-0">
                  <label
                    htmlFor="firstName"
                    className="mb-3 font-semibold block text-black "
                    style={{ fontSize: 24 }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className=" w-full py-3 text-gray-700 shadow appearance-none border  rounded-md px-3"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={getData}
                  />
                </div>
                <div className="md:w-1/2 mt-3 px-5 sm:px-2 sm:mt-0">
                  <label
                    htmlFor="lastName"
                    className="mb-3 font-semibold block text-black"
                    style={{ fontSize: 24 }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className=" w-full py-3 text-gray-700 shadow appearance-none border  rounded-md px-3"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    onChange={getData}
                  />
                </div>
              </div>
              <div className="mt-3 px-5 sm:px-2 sm:mb-2">
                <label
                  htmlFor="email"
                  className="mb-3 font-semibold block text-black"
                  style={{ fontSize: 24 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className=" w-full py-3 text-gray-700 shadow appearance-none border  rounded-md px-3"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={getData}
                />
              </div>
              <div className="mt-3 px-5 sm:px-2 sm:mb-2">
                <label
                  htmlFor="password"
                  className="mb-3 font-semibold block text-black"
                  style={{ fontSize: 24 }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full py-3 text-gray-700 shadow appearance-none border rounded-md px-3"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={getData}
                />
              </div>

              <div className="mt-3 px-5 sm:px-2 sm:mb-2">
                <label
                  htmlFor="role"
                  className="mb-3 font-semibold text-black hidden"
                  style={{ fontSize: 24 }}
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full py-3 text-gray-700 shadow appearance-none border rounded-md px-3 hidden"
                >
                  <option value="employee">serching for freelancer</option>
                  <option value="freelancer">Freelance</option>
                </select>
              </div>
              <div className="mb-11">
              {errorMessage && <p className="text-red-800 text-xs italic">{errorMessage}</p>}
              {errorsMessage.length>0 ? errorsMessage.map((error,i)=><p key={i} className="text-red-800 text-xs italic">{error.message}</p>):<></>}
            </div>
              <div className="flex justify-end mt-7">
                <button
                  type="submit"
                  // onClick={() => navigateToLogin()}
                  className=" bg-black rounded-5 text-white px-14 py-2 rounded-lg"
                  style={{ fontSize: 22 }}
                >
                  Continue
                </button>
              </div>
              <div className="flex justify-center align-center mt-4 ">
                <h6 className="m-0 me-1 small-font fw-bold">
                  Already have an account ?{" "}
                </h6>
                <Link to={"/sign-in"} className="text-decoration-none">
                  <h6 className="text-white dark:text-black m-0 small-font fw-bold">
                    Login Now
                  </h6>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignupPage;

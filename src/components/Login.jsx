import { useRef, useState } from "react";
import Header from "./Header";
import { checkForm } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const handleFormValidation = () => {
    // form validation
    const message = checkForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up
      auth;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      auth;
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "  - " + errorMessage);
        });
    }
  };
  const handelSignInForm = () => {
    setSignInform(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className=" absolute w-3/12 p-12  bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 text-white "
        >
          <h1 className="my-2 py-4 text-4xl font-bold ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full  bg-black bg-opacity-80 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full  bg-black bg-opacity-80 rounded-lg"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full  bg-black bg-opacity-80 rounded-lg"
          />
          <p className="text-red-500 font-bold ">{errorMessage}</p>
          <button
            className="p-2 my-6 w-full bg-red-600 rounded-lg"
            onClick={handleFormValidation}
          >
            {isSignInForm ? " Sign In" : "Sign Up"}
          </button>
          <p
            className="text-gray-400 cursor-pointer"
            onClick={handelSignInForm}
          >
            {isSignInForm
              ? " New to Netlix ? Sign Up"
              : " Alredy Register ? Sign In"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

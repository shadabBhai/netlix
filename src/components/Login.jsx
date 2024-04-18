import Header from "./Header";
const Login = () => {
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
          action=""
          className=" absolute w-3/12 p-12  bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 text-white "
        >
          <h1 className="my-2 py-4 text-4xl font-bold ">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full  bg-black bg-opacity-80 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full  bg-black bg-opacity-80 rounded-lg"
          />
          <button className="p-2 my-6 w-full bg-red-600 rounded-lg">
            Sign In
          </button>
          <p>
            <span className="text-gray-400">New to Netlix ?</span> Sing Up
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

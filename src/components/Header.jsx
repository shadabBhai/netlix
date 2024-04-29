const Header = () => {
  const handelUserLogOut = () => {};
  return (
    <div
      className=" 
    z-20 absolute w-full px-8 bg-gradient-to-b from-black flex justify-between"
    >
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div
        className="text-lg font-bold text-red-600 cursor-pointer py-6 "
        onClick={handelUserLogOut}
      >
        {" "}
        Sign out{" "}
      </div>
    </div>
  );
};

export default Header;

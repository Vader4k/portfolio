import React, { useMemo, useCallback } from "react";
import { NavLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = useCallback(
    (url) => {
      navigate(url);
    },
    [navigate]
  );

  const isHome = location.pathname === "/";
  const isProject = location.pathname.includes("/project");
  const isAbout = location.pathname === "/about";

  const navStyle = useMemo(() => {
    if (isHome || isProject || isAbout) {
      return "bg-bg-50 text-black";
    }
    return "bg-text-50 text-bg-50";
  }, [isHome, isProject, isAbout]);

  return { handleClick, isHome, isProject, isAbout, navStyle };
};

const Navbar = React.memo(() => {
  const { handleClick, isHome, isProject, isAbout, navStyle } = useNavigation();

  return (
    <>
      <nav
        className={`md:flex hidden sticky top-0 h-screen py-12 px-14 pt-20 max-w-[50px] flex-col justify-between font-Montserrat text-[0.7rem] ${navStyle}`}
      >
        <div className="flex relative flex-col gap-6">
          <span className="w-full my-[-30px]">
            {isHome ? (
              <span>
                {NavLinks.map((item) => (
                  <NavLink to={item.path} key={item.id} target="_blank">
                    <p className="transform -rotate-90 origin-bottom-left uppercase hover:line-through transition-all w-[30px] my-10">
                      {item.text}
                    </p>
                  </NavLink>
                ))}
              </span>
            ) : (
              <>
                {isProject ? (
                  <button
                    onClick={() => handleClick("/works")}
                    className="transform -rotate-90 origin-bottom-left uppercase hover:line-through tracking-[0.2rem] my-20"
                  >
                    Work
                  </button>
                ) : (
                  <button
                    onClick={() => handleClick("/")}
                    className="transform -rotate-90 origin-bottom-left uppercase hover:line-through tracking-[0.4rem] my-20 text-[0.65rem]"
                  >
                    Home
                  </button>
                )}
              </>
            )}
          </span>

          <div
            className={`${
              isHome || isAbout || isProject
                ? "top-[250px] border-black"
                : "top-[150px]"
            } border-b  transform -rotate-90 absolute w-[100px] left-[-58px]`}
          />
        </div>
        <span className="transform -rotate-90 origin-bottom-left w-[100px] tracking-widest">
          @ / 2024
        </span>
      </nav>

      <nav
        className={`w-full flex items-center justify-between md:hidden font-Montserrat text-[0.7rem] p-5 ${navStyle}`}
      >
        <div className="flex gap-0 items-center">
          <span className="w-full my-[-30px]">
            {isHome ? (
              <span className="flex gap-6">
                {NavLinks.map((item) => (
                  <NavLink to={item.path} key={item.id} target="_blank">
                    <p className="uppercase transition-all hover:line-through">
                      {item.text}
                    </p>
                  </NavLink>
                ))}
              </span>
            ) : (
              <>
                {isProject ? (
                  <button
                    onClick={() => handleClick("/works")}
                    className="uppercase hover:line-through tracking-[0.2rem]"
                  >
                    Work
                  </button>
                ) : (
                  <button
                    onClick={() => handleClick("/")}
                    className=" uppercase hover:line-through tracking-[0.4rem] text-[0.65rem]"
                  >
                    Home
                  </button>
                )}
              </>
            )}
          </span>
          <div
            className={`${
              isHome || isAbout || isProject ? "border-black" : ""
            } border-b w-[100px]`}
          />
        </div>
        <span className="w-[100px] tracking-widest">@ / 2024</span>
      </nav>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

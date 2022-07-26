import React from "react";
import { Link, NavLink } from "@remix-run/react";
import { NAV } from "../consts/menu";
import { NavItemDropdown, NavItemDropdownContainer } from "./Navigation.style";

export const Navigation = () => {
  return (
    <div className="container flex w-full">
      {/* <div className="logo flex items-center"> */}
      <Link to="/" className="logo flex items-center">
        <div className="max-w-full h-auto">
          <img src="/images/logo-itschool-dark.svg" alt="logo" />
        </div>
      </Link>
      {/* </div> */}

      <nav className="ml-auto flex items-center">
        {NAV.map(({ title, path, dropdown }, idx) => (
          <React.Fragment key={idx}>
            {path !== undefined && (
              <NavLink
                key={title}
                to={path}
                className="cursor-poiter font-medium text-3xl rounded-3xl px-8 py-4 text-white leading-none hover:bg-link-bg"
              >
                {title}
              </NavLink>
            )}
            {dropdown !== undefined && (
              <NavItemDropdown
                key={title}
                className="cursor-default flex relative text-white items-center justify-center font-medium text-3xl rounded-3xl px-8 py-4 text-white leading-none"
              >
                <p className="font-medium text-3xl py-4 items-center">
                  {title}
                </p>
                <NavItemDropdownContainer className="dropdown-container text-white relative flex flex-col w-max top-full l-0 rounded">
                  {dropdown.map((item, idx) => (
                    <NavLink
                      key={idx}
                      to={item.path}
                      className="hover:bg-link-bg hidden"
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </NavItemDropdownContainer>
              </NavItemDropdown>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

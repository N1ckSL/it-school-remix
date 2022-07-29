import React from "react";
import { Link, NavLink } from "@remix-run/react";
import { NAV } from "../consts/menu";

export const Navigation = () => {
  return (
    <div className="container flex w-full ">
      <Link to="/" className="logo flex items-center">
        <div className="max-w-full h-auto">
          <img src="/images/logo-itschool-dark.svg" alt="logo" />
        </div>
      </Link>

      <nav className="ml-auto hidden md:flex items-center">
        {NAV.map(({ title, path, dropdown }, idx) => (
          <React.Fragment key={idx}>
            {path !== undefined && (
              <NavLink
                key={title}
                to={path}
                className="cursor-poiter font-medium text-xl rounded-3xl px-6 py-2 text-white items-center leading-none hover:bg-link-bg"
              >
                {title}
              </NavLink>
            )}
            {dropdown !== undefined && (
              <div
                key={title}
                className="cursor-default font-medium text-xl rounded-3xl px-6 py-2 text-white leading-none"
              >
                <p className="font-medium text-xlitems-center">{title}</p>
                <div className="text-white relative flex flex-col w-max top-full left-0 rounded">
                  {dropdown.map((item, idx) => (
                    <NavLink
                      key={idx}
                      to={item.path}
                      className="hover:bg-link-bg hidden"
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

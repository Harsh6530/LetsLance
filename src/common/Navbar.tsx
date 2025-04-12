import { Link, NavLink, useLocation } from "react-router-dom";
import MaterialIcon from "./MaterialIcon";
import { twMerge } from "tailwind-merge";
import { ReactNode, useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Industry, Service } from "../interfaces/Data";

const navItems = [
  { title: "Home", to: "/" },
  { title: "Industries", dropdown: <DropdownIndustries /> },
  // { title: "Portfolio", to: "/portfolio" },
  { title: "Services", dropdown: <DropdownServices /> },
  { title: "Company", to: "/company" },
];

const navStickThreshold = 64;

export default function Navbar() {
  const [mobileNavShown, setMobileNavShown] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [dropdownElememt, setDropdownElement] = useState<ReactNode | null>(
    null
  );

  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);
  window.addEventListener("scroll", () => setScrollY(window.scrollY));

  useEffect(() => {
    setDropdownElement(null);
  }, [location]);

  return (
    <>
      <nav
        ref={navRef}
        className={twMerge(
          "p-page fixed left-0 top-0 z-[100] flex w-full items-center justify-between py-5 duration-500",
          scrollY > navStickThreshold && "bg-back py-1"
        )}
      >
        <Link
          to="/"
          className={twMerge(
            "group flex w-max items-center gap-x-3 duration-300",
            scrollY < navStickThreshold && "brightness-0 invert"
          )}
        >
          <img
            src="/logo.png"
            alt="letslance logo"
            className="aspect-square h-16 duration-inherit group-hover:rotate-[360deg] mobile:h-14"
          />
          <h1 className="text-2xl font-medium text-primary duration-inherit group-hover:scale-105 mobile:-ml-2 mobile:text-2xl">
            LetsLance
          </h1>
        </Link>

        <div
          className={twMerge(
            "flex items-center gap-x-3 text-front text-opacity-70 mobile:hidden",
            scrollY < navStickThreshold && "brightness-0 invert"
          )}
        >
          {navItems.map((item, i) => (
            <div key={i}>
              {item.to && (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    twMerge(
                      "border border-transparent px-4 py-1 duration-300 hover:text-primary",
                      isActive
                        ? "rounded-lg border-primary bg-primary bg-opacity-5 text-primary"
                        : undefined
                    )
                  }
                >
                  {item.title}
                </NavLink>
              )}
              {item.dropdown && (
                <button
                  className={twMerge(
                    "border border-transparent px-4 py-1 duration-300 hover:text-primary",
                    dropdownElememt === item.dropdown &&
                      "border border-transparent border-b-foreground"
                  )}
                  onClick={() => setDropdownElement(item.dropdown)}
                >
                  {item.title}
                </button>
              )}
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          className={twMerge(
            "ml-3 rounded-full border border-primary px-6 py-1 font-medium outline outline-0 outline-primary duration-150 hover:outline-2 mobile:hidden",
            scrollY < navStickThreshold && "brightness-0 invert"
          )}
        >
          Contact
        </Link>

        <div className="relative widescreen:hidden">
          <button onClick={() => setMobileNavShown(!mobileNavShown)}>
            <MaterialIcon
              className={`text-4xl ${
                scrollY < navStickThreshold ? "text-back" : "text-front"
              }`}
              codepoint="e5d2"
            />
          </button>
          {mobileNavShown && (
            <div className="absolute right-0 top-full flex flex-col gap-y-2 rounded-lg border bg-background py-3 shadow-md">
              {navItems.map((item, i) => (
                <div className="flex flex-col items-center" key={i}>
                  {item.to && (
                    <NavLink
                      onClick={() => setMobileNavShown(false)}
                      to={item.to}
                      className={({ isActive }) =>
                        twMerge(
                          "border border-transparent px-4 py-1 duration-300 hover:text-primary",
                          isActive
                            ? "rounded-lg border-primary bg-primary bg-opacity-5 text-primary"
                            : undefined
                        )
                      }
                    >
                      {item.title}
                    </NavLink>
                  )}
                  {item.dropdown && (
                    <button
                      className={twMerge(
                        "border border-transparent px-4 py-1 duration-300 hover:text-primary",
                        dropdownElememt === item.dropdown &&
                          "border border-transparent border-b-foreground"
                      )}
                      onClick={() => {
                        setDropdownElement(item.dropdown);
                        setMobileNavShown(false);
                      }}
                    >
                      {item.title}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div
        className={twMerge(
          "fixed left-0 top-0 z-[99] min-h-[40vh] w-full rounded-b-[2rem] bg-primary duration-500",
          dropdownElememt
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        {dropdownElememt}
        <button
          className="absolute right-12 top-24 z-[100] text-back mobile:right-5 mobile:top-20"
          onClick={() => {
            setDropdownElement(null);
          }}
        >
          <MaterialIcon
            codepoint="e5cd"
            className="text-[2rem] mobile:text-[1.7rem]"
          />
        </button>
      </div>
    </>
  );
}

function DropdownIndustries() {
  const [industries] = useFetch<Industry[]>("/data/industries.json");

  return (
    <div className="p-page flex w-full flex-wrap gap-x-10 gap-y-6 py-16 pt-28 text-back">
      {industries &&
        industries.map((industry, i) => (
          <Link
            key={i}
            className="w-[22%] pb-1 text-base duration-300 hover:translate-x-[5%] hover:scale-110 hover:cursor-pointer hover:border-b mobile:text-sm"
            to={`/industries/${industry.id}`}
          >
            {industry.title}
          </Link>
        ))}
    </div>
  );
}

function DropdownServices() {
  const [services] = useFetch<Service[]>("/data/services.json");
  return (
    <div className="p-page flex w-full flex-wrap gap-x-10 gap-y-6 py-16 pt-28 text-back mobile:justify-evenly">
      {services &&
        services.map((service, i) => (
          <Link
            key={i}
            className="w-[34%] pb-1 text-base duration-300 hover:translate-x-[5%] hover:scale-110 hover:cursor-pointer hover:border-b mobile:text-sm "
            to={`/services/${service.id}`}
          >
            {service.title}
          </Link>
        ))}
    </div>
  );
}

import {
    faAngleDown,
    faAngleUp,
    faBars,
    faCalendar, faTable, faX
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const LeftContainer = () => {
  const [isDown, setIsDown] = useState(false);
  const [isX, setIsX] = useState(false);
  const handleIcon = () => {
    console.log(isX)

    setIsX(!isX);
  };

  return (
    <div className={`default-bg default-font ${isX ? "w-1/5" : "w-12"}`}>
      <div className="icon flex justify-end p-4 text-2xl">
        <button onClick={handleIcon}>
          {isX ? (
            <>
              <FontAwesomeIcon icon={faX} />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faBars} />
            </>
          )}
        </button>
      </div>
      <div className={`sideNav ${isX ? "block" : "hidden"} `}>
        <div className="menu p-2">
          <h6 className="uppercase">menu</h6>
          <li className="list-none flex">
            <div className="left w-4/5 flex gap-2 items-center">
              <FontAwesomeIcon icon={faTable} />
              <Link>Dashboards</Link>
            </div>
            <div className="right w-1/5 flex justify-end items-center">
              {isDown ? (
                <button onClick={() => setIsDown(false)}>
                  <FontAwesomeIcon icon={faAngleUp} />
                </button>
              ) : (
                <button onClick={() => setIsDown(true)}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
              )}
            </div>
          </li>

          <li className={`list-none flex ${isDown ? "block" : "hidden"}`}>
            <div className="w-3/4 mx-auto">
              <Link className="block">Ecommerce</Link>
              <Link className="block">Sass</Link>
              <Link>Crypto</Link>
            </div>
          </li>
        </div>
        <hr className="w-4/5 mx-auto" />
        <div className="applications p-2">
          <h6 className="uppercase">applications</h6>
          <li className="list-none flex">
            <div className="left w-4/5 flex gap-2 items-center">
              <FontAwesomeIcon icon={faCalendar} />
              <Link>Calendar</Link>
            </div>
            <div className="right w-1/5 flex justify-end items-center">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;

"use client";

import React, { useState } from "react";
import { IoArrowDownSharp } from "react-icons/io5";

const CustomSelect = ({ region, switchRegion, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-select">
      <div
        className="custom-select__switcher"
        onClick={() => setIsOpen((current) => !current)}
      >
        {region} <IoArrowDownSharp />
      </div>
      {isOpen && (
        <ul className="custom-select__list">
          {options.map(({ value, label }) => (
            <li
              className={`custom-select__item ${region === label ? "active" : ""}`}
              onClick={() => {
                switchRegion(value);
                setIsOpen(false);
              }}
              key={value}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

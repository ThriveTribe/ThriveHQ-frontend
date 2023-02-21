import React, { useState } from 'react';

export default function TDleft() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="">
      <button
        id="dropdownLeftButton"
        data-dropdown-toggle="dropdownLeft"
        data-dropdown-placement="top"
        className="mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleButtonClick}
      >
        {/* </svg> */}
        Dropdown left
      </button>

      {showDropdown && (
        <div
          id="dropdownLeft"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownLeftButton"
          >
            
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                thing one
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                things 2
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

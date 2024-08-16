import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './SideBar'; // Import the Sidebar component

function BasicButtonExample() {
  const title = [
    { value: "Home", data: [{ key: "hello" }] },
    {
      value: "ABOUT US", data: [
        { value: "WHO IS WHO" },
        { value: "MOPR" },
        { value: "CITIZEN'S/CLIENT'S CHARTER" },
        { value:"ORGANIZATION STRUCTURE"}
      ]
    },
    { value: "FINANCE COMMISION", data: [
        { key: "CENTRAL FINANCE'S COMMISION REPORT" },
        { key:"MINISTRY OF FINANCE"}
    ] },
    { value: "Docs", data: [{ key: "hello" }] }
  ];

  return (
    <div className="flex">
    
       {/* Add the Sidebar here */}
      <div className="flex-1">
        <TitleNav content={title} />
      </div>
    </div>
  );
}

function Drop({ content }) {
  return (
    <>
      {content.map((e, index) => (
        <li key={index}>
          <Link to={`/user/${e.value}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {e.value || e.key}
          </Link>
        </li>
      ))}
    </>
  );
}

function TitleNav({ content }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <>
      {content.map((e, index) => (
        <div 
          key={index} 
          className="relative inline-block m-2"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            id="dropdownDefaultButton"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {e.value}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {openIndex === index && (
            <div
              id="dropdown"
              className="absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 z-10"
              onMouseEnter={() => setOpenIndex(index)} // Keep open on hover
              // onMouseLeave={handleMouseLeave} // Close on mouse leave
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <Drop content={e.data} />
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default BasicButtonExample;

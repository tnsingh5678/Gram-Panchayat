import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BasicButtonExample() {
  const title = [
   
    {
      value: "ABOUT US", data: [
        { value:"About"},
        { value: "WHO IS WHO" },
        { value: "MOPR" },
        { value: "CITIZEN'S/CLIENT'S CHARTER" },
        { value:"ORGANIZATION STRUCTURE"}
      ]
    },
    { value: "FINANCE COMMISION", data: [
        { value: "CENTRAL FINANCE'S COMMISION REPORT RELATED TO RURAL LOCAL BODIES (RLBS)" },
        { value:"MINISTRY OF FINANCE OPERATIONAL GUIDELINES FOR CENTRAL FINANCE COMMISSION"},
        { value: "ADVISORIES ISSUED BY MINISTRY OF PANCHAYATI RAJ ON CFC GRANTS"},
        { value: "STUDY REPORTS/CONFERENCE PROCEEDINGS"},
        { value: "MINUTES OF THE COORDINATION COMMITTEE MEETINGS"},
        { value: "STATEMENT ON ALLOCATION AND RELEASE OF CFC GRANTS TO RLBS"},
        { value: "RELEASE ORDER OF FINANCE COMMISSION GRANTS TO RLBS ISSUED BY MINISTRY OF FINANCE"},
        { value: "PUBLICATIONS"},
    ] },
    { value: "PESA", data: [
      { value: "PESA ACT" },
      { value: "MODEL PESA RULES CIRCULATEDBY MOPR" },
      { value: "FIFTH SCHEDULE OF THE CONSTITUTION OF INDIA" },
      { value: "STATE WISE DETAILS OF NOTIFIED FIFTH SCHEDULE AREAS" },
      { value: "PESA RULES FRAMED BY PESA STATES" },
      { value: "SALIENT FEATURES OF PESA ACT" },
      { value: "INITIATIVES TAKEN BY MOPR ON PESA" },
      { value: "COMPLIANCE OF PESA ACT" },
      { value: "STUDY OF PESA ACT" },
      { value: "GPDP GUIDELINES REGARDING PESA SDC" }
    ] },
    { value: "PRI", data: [
      { value: "CONSTITUTIONAL PROVISION" },
      { value: "STATE PANCHAYATI RAJ ACTS/RULES/REGULATIONS" },
      { value: "STATUS OF PANCHAYAT ELECTIONS IN PRIS" },
      { value: "STATE/UT-WISE NO. OF PRIS" },
      { value: "STATUS OF DEVOLUTION OF POWERS" },
      { value: "STATE/UT-WISE DETAILS OF ELECTED REPRESENTATIVES & EWRS" },
      { value: "STATUS OF RESERVATION FOR WOMEN IN PRIS" },
      { value: "STUDY REPORTS/ CONFERENCE REPORTS" },
      { value: "ADVISORIES ISSUED ON POLICY MATTERS" },
      { value: "NON-PART-IX AREAS" },
      { value: "PANCHAYATS WITH BEST PRACTICES" },
      { value: "STATE/UT PANCHAYATI RAJ DEPARTMENT WEBSITE" },
    ] },
    { value: "RGSA", data: [
      { value: "RASHTRIYA GRAM SWARAJ ABHIYAN(RGSA)" },
      { value: "TRAINING MATERIAL" },
      { value: "PEOPLE'S PLAN CAMPAIGN(PPC)" },
      { value: "MOPR INTERNSHIP" }
    ] },
    { value: "SDG", data: [
      { value: "EXPERT REPORTS ON LSDG" },
      { value: "AKAM-ICONIC WEEK" },
      { value: "WRITE-SHOP PROGRAM" },
      { value: "LSDG LOGO" },
      { value: "THEMATIC WORKSHOPS" },
      { value: "BPDP & DPDP WORKSHOP" },
      { value: "COLLABORATIONS WITH ACADEMIC INSTITUTIONS" }
    ] },
    { value: "PDI", data: [
      { value: "PDI COMMITTEE REPORT 2023" },
      { value: "NATIONAL WORKSHOP ON PANCHAYAT DEVELOPMENT INDEX(PDI)" },
      { value: "PDI-WRITESHOP" }
    ] },
    { value: "E-GOVERNANCE", data: [
      { value: "AUDITIONLINE" },
      { value: "E-GRAMSWARAJ" },
      { value: "LGD" }
    ] },
    { value: "AWARDS", data: [
      { value: "NATIONAL PANCHAYAT AWARDS" },
      { value: "LIST OF AWARDEE PANCHAYATS" },
      { value: "REFERENCE DOCUMENTS" }
    ] }

  ];

  return (
    <div className="flex">
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
          <Link to={`/${e.value}`} className="block px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-600 dark:hover:text-white">
            {e.value || e.key}
          </Link>
        </li>
      ))}
    </>
  );
}

function TitleNav({ content }) {
  const [openIndex, setOpenIndex] = useState(null);

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
          onClick={()=>setOpenIndex(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          // onMouseLeave={handleMouseLeave}
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
              className="absolute left-0 text-white mt-2 w-44 bg-blue-900 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 z-10"
              
              onMouseEnter={() => setOpenIndex(index)} // Keep open on hover
              onMouseLeave={handleMouseLeave} // Close when mouse leaves dropdown
            >
              <ul
                className="py-2 text-sm text-white-700 dark:text-gray-200"
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

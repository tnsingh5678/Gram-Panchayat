import { useState } from "react";
import HomeNav from "../component/components/HomeNav";
import Footer from "../component/components/Footer";
import { schemes } from "../schemes"; 


export default function Schemes() {
 
  const [expandedScheme, setExpandedScheme] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const schemesPerPage = 5;
  const filteredSchemes = schemes.filter(
    (scheme) =>
      (scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.shortDetail.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "" ||
        scheme.categories.includes(selectedCategory))
  );
  const indexOfLastScheme = currentPage * schemesPerPage;
  const indexOfFirstScheme = indexOfLastScheme - schemesPerPage;
  const currentSchemes = filteredSchemes.slice(indexOfFirstScheme, indexOfLastScheme);

  const toggleReadMore = (index) => {
    setExpandedScheme(expandedScheme === index ? null : index);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredSchemes.length / schemesPerPage);

  return (
    <>
      <div className="flex h-auto justify-between bg-orange-400">
        <div className="justify">
      <img src="./AS_L2.jpg" className="h-[100px] w-[100px] bg-blue-600 p-1"></img></div>
        <HomeNav />
      </div>
      <div>
        <h1 className="text-4xl text-center m-4">Schemes</h1>
      </div>

      <div className="flex justify-center p-4">
        <input
          type="text"
          placeholder="Search by scheme name or detail..."
          className="p-2 border border-gray-300 rounded-lg w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex justify-center p-4">
        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Poor">Poor</option>
          <option value="Child">Child</option>
          <option value="School Student">School Student</option>
          <option value="College Student">College Student</option>
          <option value="Working Professional">Working Professional</option>
        </select>
      </div>

      <div className="p-4">
        {currentSchemes.map((scheme, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300  rounded-lg">

            <a href={scheme.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-blue-500">
              {scheme.name}
            </a>
            <p>{scheme.shortDetail}</p>
            {expandedScheme === index && (
              <>
                <p>{scheme.fullDetail}</p>
               
              </>
            )}
            <button
              className="text-blue-500 mt-2"
              onClick={() => toggleReadMore(index)}
            >
              {expandedScheme === index ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}

        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-2 p-2 border border-gray-300 rounded-lg ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

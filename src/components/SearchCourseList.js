import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SearchCourseList = ({courses}) => {
  const [search, setSearch] = useState("");
 
  return (
    <div>
      <div className="relative mt-2 ml-2">
        <input
          className="font-serif font-bold border border-gray-300 rounded-3xl py-2 px-9 pr-10 focus:outline-none max-w-md text-slate-600 mx-auto"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="absolute top-1/2 -translate-y-1/2 p-4 rounded-full ">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="mx-auto mt-6 md:ml-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {courses
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 md:w-[70%] lg:w-[80%] cursor-pointer shadow-md rounded" // Adjusted the width for different screen sizes
              >
                <Link to={`/coursedetailscreen/${item.id}`}>
                  <img
                    src={item.thumbnail}
                    alt="course"
                    className="w-full h-48 object-fit rounded-t"
                  />
                  <div className="p-4">
                    <p className="text-xl font-sans text-gray-600">
                      {item.name}
                    </p>
                    <p className="font-bold text-slate-800">By {item.instructor}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCourseList;

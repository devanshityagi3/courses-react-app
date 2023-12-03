import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SearchCourseList = ({courses}) => {
  const [search, setSearch] = useState("");
 
  return (
    <div>
      <div className="relative">
        <input
          className="font-serif font-bold border border-gray-300 rounded-3xl py-2 px-9 pr-10 focus:outline-none max-w-md text-slate-600 ml-40"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="absolute top-1/2 -translate-y-1/2 p-4 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="ml-40">
        <div className="grid grid-cols-3 gap-4 mx-[100px] mt-[40px]">
          {courses
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item) => (
              <div
                key={item.id}
                className="w-[280px] h-[280px] cursor-pointer shadow-md rounded"
              >
                <Link to={`/coursedetailscreen/${item.id}`}>
                  <img src={item.thumbnail} alt="course" />
                  <p className="ml-2 text-xl font-sans text-gray-600">
                    {item.name}
                  </p>
                  <p className="ml-2">{item.instructor}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCourseList;

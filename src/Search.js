import React, { useState } from "react";
import data from "./data";
import "./Search.css";

const Search = () => {
  const [filter, setFilter] = useState("");

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.cardData.filter(
    (item) =>
      Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  );

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="search-container">
            <input
              type="text"
              className="curved-search-input"
              placeholder="Search"
              value={filter}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="row">
          {filteredData.map((item, index) => (
            <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.place}</p>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;

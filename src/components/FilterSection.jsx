import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterSection = () => {
  const {
    filters: { text, company },
    allProducts,
    updateFilterValue,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((curELm) => {
      return curELm[property];
    });
    return (newValue = ["all company", ...new Set(newValue)]);
  };
  const companyData = getUniqueData(allProducts, "company");

  return (
    <div className="flex flex-wrap justify-between gap-10 mb-10">
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            autoComplete="off"
            placeholder="Search watch"
            onChange={updateFilterValue}
            className="bg-gray-600 xs:px-20 sm:px-32 rounded-full  outline-none pl-7 py-2 "
          />
        </form>
      </div>

      <div>
        <form>
          <select
            name="company"
            id="company"
            onClick={updateFilterValue}
            className="bg-transparent border-2 outline-none py-1 px-3 capitalize"
          >
            {companyData.map((watchItems, index) => {
              return (
                <option
                  value={watchItems}
                  key={index}
                  name="company"
                  className="bg-gray-800"
                >
                  {watchItems}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  );
};

export default FilterSection;

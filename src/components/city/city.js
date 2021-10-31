import React from 'react';

const City = ({ city, filterItems }) => {
  return (
    <div className="btn-container">
      {city.map((city, id) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={id}
            onClick={() => filterItems(city)}
          >
            {city}
          </button>
        );
      })}
    </div>
  );
};

export default City;
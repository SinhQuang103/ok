// src/components/Filter.js
import React from 'react';

const Filter = () => {
    return (
        <div className="filter">
            <div className="type">
                <label htmlFor="type">Brand</label>
                <select id="type">
                    <option value="all">All</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                </select>
            </div>
            <div className="price-range">
                <label htmlFor="priceRange">Price Range</label>
                <select id="priceRange">
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="100+">100+</option>
                </select>
            </div>
            <div className="startfilter">
                Start Filter
            </div>
        </div>
    );
};

export default Filter;

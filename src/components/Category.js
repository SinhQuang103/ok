// src/components/Category.js
import React, { useState } from 'react';
import ProductList from './ProductList'; // Make sure ProductList is correctly imported

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="CategoryPage">
            <div className="Category">
                <a onClick={() => handleCategoryClick('Category 1')}>Category 1</a>
                <a onClick={() => handleCategoryClick('Category 2')}>Category 2</a>
                <a onClick={() => handleCategoryClick('Category 3')}>Category 3</a>
            </div>
            <div className="ProductList">
                <ProductList category={selectedCategory} />
            </div>
        </div>
    );
};

export default Category;

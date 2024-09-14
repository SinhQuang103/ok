import React, { useState } from 'react';
import Category from './Category';
import ProductList from './ProductList';
import DetailInfo from './DetailInfo';
import Filter from './Filter';

const ExamplePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="example-page">
            <div className="sidebar">
                <Category onSelectCategory={handleCategorySelect} />
                <Filter />
            </div>
            <div className="main-content">
                <ProductList category={selectedCategory} />
                <DetailInfo />
            </div>
        </div>
    );
};

export default ExamplePage;

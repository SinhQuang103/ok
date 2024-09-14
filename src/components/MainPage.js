import React, { useState } from 'react';
import Category from './Category';
import ProductList from './ProductList';

const MainPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState({
        'Category 1': ['User Product A', 'User Product B'],
        'Category 2': ['User Product C', 'User Product D', 'User Product E', 'User Product F', 'User Product G'],
        'Category 3': ['User Product H']
    });

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="MainPage">
            <Category onSelectCategory={handleCategorySelect} />
            <ProductList category={selectedCategory} />
        </div>
    );
};

export default MainPage;

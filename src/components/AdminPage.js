import React, { useState } from 'react';
import './AdminPage.css';
import ProductList from './ProductList';

const AdminPage = () => {
    const [isAddProductVisible, setIsAddProductVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const toggleAddProductForm = () => {
        setIsAddProductVisible(!isAddProductVisible);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="AdminPage">
            <div className="AdminHeader">
                <div className="logo">Admin Logo</div>
                <div className="AdminSearchBar">
                    <input type="text" placeholder="Search products..." />
                </div>
                <div className="AddProduct" onClick={toggleAddProductForm}>
                    {isAddProductVisible ? 'Cancel' : 'Add Product'}
                </div>
            </div>
            {isAddProductVisible && (
                <div className="AddProductForm">
                    <h2>Add Product</h2>
                    <div className="input-group">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input
                            type="text"
                            id="imageUrl"
                            placeholder="Enter image URL"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            placeholder="Enter product description"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            placeholder="Enter price"
                        />
                    </div>
                    <div className="submit-button">
                        Add Product
                    </div>
                </div>
            )}
            <div className="Body">
                <div className="Category">
                    <a href="#category1" onClick={() => handleCategorySelect('Category 1')}>Category 1</a>
                    <a href="#category2" onClick={() => handleCategorySelect('Category 2')}>Category 2</a>
                    <a href="#category3" onClick={() => handleCategorySelect('Category 3')}>Category 3</a>
                </div>
                <div className="ProductList">
                    <ProductList category={selectedCategory} />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

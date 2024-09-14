// src/components/AddProductForm.js
import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

    const handleAddProduct = () => {
        setMessage('Product added successfully');
        setImageUrl('');
        setDescription('');
        setPrice('');
    };

    return (
        <div className="AddProductForm">
            <h2>Add Product</h2>
            <div className="input-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            {message && <div className="message">{message}</div>}
            <div className="submit-button" onClick={handleAddProduct}>
                Add Product
            </div>
        </div>
    );
};

export default AddProductForm;

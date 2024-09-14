import React from 'react';

const ProductList = ({ category }) => {
    // Static products for demonstration or fallback
    const staticProducts = {
        'Category 1': ['Old Product 1', 'Old Product 2'],
        'Category 2': ['Old Product 3', 'Old Product 4'],
        'Category 3': ['Old Product 5']
    };

    // Dynamic products for the selected category
    const dynamicProducts = {
        'Category 1': ['Product 1', 'Product 2'],
        'Category 2': ['Product 3', 'Product 4', 'Product 5', 'Product 6', 'Product 7'],
        'Category 3': ['Product 8'],
    };

    // Choose which product list to display
    const productsToDisplay = category ? dynamicProducts[category] : staticProducts['Category 1'];

    return (
        <div className="product-list">
            <h2>{category ? category : 'Category 1'}</h2>
            <div className="products">
                {productsToDisplay.length > 0 ? (
                    productsToDisplay.map((product, index) => (
                        <div key={index} className="product-box">
                            {product}
                        </div>
                    ))
                ) : (
                    <p>Select a category to view products</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;

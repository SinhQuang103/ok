// src/components/DetailInfo.js
import React from 'react';

const DetailInfo = () => {
    return (
        <div className="DetailInfo">
            <div className="picture"></div>
            <div className="Info">
                <div className="name">Item Name</div>
                <div className="price">$100</div>
                <div className="categoryType">Category Type</div>
            </div>
        </div>
    );
};

export default DetailInfo;

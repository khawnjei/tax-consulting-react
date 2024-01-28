import React from 'react';

const ImageGridTwoColumn = ({ images }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="folio-s-img">
                    <img src={images[0]} alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="folio-s-img">
                    <img src={images[1]} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImageGridTwoColumn;
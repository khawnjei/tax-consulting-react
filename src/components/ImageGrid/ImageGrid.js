import React from 'react';

const ImageGrid = ({ images }) => {
    return (
        <section className="platform-image">
            <div className="container">
                <div className="row">
                    {
                        images?.map((image, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <img src={image} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ImageGrid;
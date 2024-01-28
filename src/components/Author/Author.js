import React from 'react';
import { Link } from 'react-router-dom';

const Author = ({ singlePost }) => {
    return (
        <div className="post-author">
            <img src={singlePost?.authorImage} alt="" />
            <span>{singlePost?.authorDesignation}</span>
            <h3><Link to="#">{singlePost?.authorName}</Link></h3>
            <p>
            </p>
        </div>
    );
};

export default Author;
import React from 'react';
import { Link } from 'react-router-dom';

const Tag = () => {
    return (
        <aside className="widget widget-tags">
            <h3 className="widget-title"><span>Popular Tag</span></h3>
            <div className="tags">
                <Link to="#">Popular</Link>
                <Link to="#">Design</Link>
                <Link to="#">Ux</Link>
                <Link to="#">Usability</Link>
                <Link to="#">Develop</Link>
                <Link to="#">Icon</Link>
                <Link to="#">Business</Link>
                <Link to="#">Consult</Link>
                <Link to="#">Kit</Link>
                <Link to="#">Keyboard</Link>
                <Link to="#">Mouse</Link>
                <Link to="#">Tech</Link>
            </div>
        </aside>
    );
};

export default Tag;
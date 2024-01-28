import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <aside className="widget widget-categories">
            <h3 className="widget-title"><span>Categories</span></h3>
            <ul>
                <li><Link to="/">Taxation</Link><span>26</span></li>
                <li><Link to="/">Bookkeeping</Link><span>30</span></li>
                <li><Link to="/">Cryptocurency Taxation</Link><span>71</span></li>
                <li><Link to="/">ITIN Application</Link><span>56</span></li>
                <li><Link to="/">Small business CFO services</Link><span>60</span></li>
            </ul>
        </aside>
    );
};

export default Category;
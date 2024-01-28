import { Link } from 'react-router-dom';

import Slider from "react-slick";

const ThemeSlider = ({ images, settings, classes = "" }) => {
    return (
        <Slider className={classes} {...settings}>
            {
                images?.map((image, index) => {
                    return (
                        <Link key={index} to={image?.link}>
                            <img src={image?.image} alt="" />
                        </Link>
                    )
                })
            }
        </Slider>
    );
};

export default ThemeSlider;
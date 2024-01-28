import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import ThemeSlider from '../Sliders/ThemeSlider/ThemeSlider';
import Video from '../Video/Video';

const style = {
    background: '#ff4a17',
    width: '80px',
    height: '80px',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    display: 'inline-block',
    fontSize: '18px',
    lineHeight: '80px',
    opacity: 1,
    top: '40%',
    transition: 'all 0.4s ease',
    cursor: 'pointer'
}

function SampleNextArrow({ classes, newStyle, onClick }) {
    return (
        <div
            className={`${classes}`}
            style={{ ...newStyle }}
            onClick={onClick}
        ><i className="fa fa-arrow-right" aria-hidden="true"></i></div>
    );
}

function SamplePrevArrow({ classes, newStyle, onClick }) {
    return (
        <div
            className={classes}
            style={{ ...newStyle }}
            onClick={onClick}
        ><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
    );
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow classes="carousel-control-next" newStyle={style} />,
    prevArrow: <SamplePrevArrow classes="carousel-control-prev" newStyle={style} />,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        },

    ]
};

const NewsContent = ({ news }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const postsPerPage = 5;
    const postVisited = pageNumber * postsPerPage;
    const currentPosts = news.slice(postVisited, postVisited + postsPerPage);
    const pageCount = Math.ceil(news.length / postsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="col-lg-8 col-md-12">

            {
                currentPosts?.map(singleNews => {
                    return (
                        <div key={singleNews?.id} className="news-item-3">
                            <div className="news-thumb">

                                {
                                    singleNews?.galleryImages.length > 0 ? <ThemeSlider classes="carousel slide" images={singleNews?.galleryImages} settings={settings} />
                                        : (
                                            <>
                                                <img src={singleNews.featureImg} alt="" />
                                                {
                                                    singleNews?.videoLink && <Video videoLink={singleNews.videoLink} />
                                                }
                                            </>
                                        )
                                }

                                <Link to={singleNews.categoryLink} className="cate">{singleNews.category}</Link>

                            </div>
                            <div className="news-details">
                                <h3>
                                    <Link to={singleNews.link}>{singleNews.title}</Link>
                                </h3>
                                <div className="news-footer">
                                    <span><i className="fa fa-eye"></i>{singleNews.views} Views</span>
                                    <span><i className="fa fa-comments"></i>{singleNews.comments} Comments</span>
                                    <span><i className="fa fa-calendar-alt"></i>{singleNews.date}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {/* Pagination  */}

            <Pagination pageCount={pageCount} changePage={changePage} />

        </div>
    );
};

export default NewsContent;
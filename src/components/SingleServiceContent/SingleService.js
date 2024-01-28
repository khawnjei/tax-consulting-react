import { Link } from "react-router-dom";

const SingleServiceContent = ({ singleDetails }) => {
    return (
        <section className="single-service-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="service-area">
                            <div className="service-thumb">
                                <img src={singleDetails.image} alt="" />
                            </div>
                            <div className="service-title">
                                <Link to="/">Overview</Link>
                                <h3>{singleDetails.title}</h3>
                            </div>
                            <div className="service-content"
                                dangerouslySetInnerHTML={{
                                    __html: singleDetails.description
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SingleServiceContent;